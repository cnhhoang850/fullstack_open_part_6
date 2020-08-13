import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {voteFor} from '../reducers/anecdoteReducer'

const Anecdotes = (props) => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        return state.sort(function (a,b) {
          return b.votes - a.votes
        })
      })
    
    const vote = (id) => {
        dispatch(voteFor(id))
    }

    return (
    <div>
    <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
    )
}

export default Anecdotes