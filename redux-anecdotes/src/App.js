import React, {useEffect} from 'react'
import NewAnec from './components/CreateAnec'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import {useDispatch} from 'react-redux'
import anecdoteService from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <h2>create new</h2>
      <NewAnec />
    </div>
  )
}

export default App