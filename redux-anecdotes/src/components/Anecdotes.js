import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {voteFor} from '../reducers/anecdoteReducer'
import {voteNoti, clearNoti} from '../reducers/notiReducer'

const Anecdotes = (props) => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => {
        return state.anecdotes.sort(function (a,b) {
          return b.votes - a.votes
        })
      })
    const anecdotesToShow = filter === '' ? 
    anecdotes : anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    
    const vote = (anecdote) => {
        dispatch(voteFor(anecdote.id))
        dispatch(voteNoti(anecdote.content))
        setTimeout(() => {
          dispatch(clearNoti())
        }, 5000)
    }

    return (
    <div>
      {anecdotesToShow.map(anecdote =>
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

export default Anecdotes