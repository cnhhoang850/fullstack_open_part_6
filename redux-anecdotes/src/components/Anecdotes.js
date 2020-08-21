import React from 'react'
import {voteFor} from '../reducers/anecdoteReducer'
import {voteNoti} from '../reducers/notiReducer'
import {connect} from 'react-redux'

const Anecdotes = (props) => {    
    const vote = (anecdote) => {
        props.voteFor(anecdote)
        props.voteNoti(anecdote.content)
        window.clearTimeout()
    }

    return (
    <div>
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
    )
}

const mapStateToProps = (state) => {
  const anecdotes = state.anecdotes.sort(function (a,b) {
    return b.votes - a.votes 
  })

  return { 
    anecdotes: (state.filter === '' 
    ? anecdotes 
    : anecdotes.filter(anecdote => 
        anecdote.content.toLowerCase()
        .includes(state.filter.toLowerCase()))) 
  }
}

const mapDispatchToProps = {
  voteFor,
  voteNoti
}
const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)
export default ConnectedAnecdotes