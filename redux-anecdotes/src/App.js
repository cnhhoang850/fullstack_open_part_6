import React from 'react'
import NewAnec from './components/CreateAnec'
import Anecdotes from './components/Anecdotes'

const App = () => {
  return (
    <div>
      <Anecdotes />
      <h2>create new</h2>
      <NewAnec />
    </div>
  )
}

export default App