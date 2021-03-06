import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import App from './App'
import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'
import store from './store'

anecdoteService.getAll().then(anecdotes => 
  store.dispatch(initializeAnecdotes(anecdotes)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)