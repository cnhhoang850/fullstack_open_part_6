import {useDispatch} from 'react-redux'
import anecdoteService from '../services/anecdotes'


const anecdotesReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE': {
      const id = action.data.id
      const changedAnec = action.data
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnec)
    }
    case 'NEW_ANEC': 
      return state.concat(action.data)
    case 'INIT_ANEC': 
      return action.data
    default: 
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anecdotes
    })
  }
}

export const createAnec = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANEC',
      data: newAnecdote
    })
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const changedAnec = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: changedAnec
    })
  }
}

export default anecdotesReducer