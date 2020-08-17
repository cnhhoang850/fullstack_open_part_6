import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import uniReducer from './reducers/uniReducer'

const store = createStore(uniReducer)

const App = () => (
  <div>
    <div>
      <button onClick={e => store.dispatch({ type:'GOOD' })}>good</button>
      <button onClick={e => store.dispatch({ type: 'NEUTRAL' })}>neutral</button>
      <button onClick={e => store.dispatch({ type: 'BAD'})}>bad</button>
      <button onClick={e => store.dispatch({ type: 'RESET'})}>reset</button>
    </div>
    <div>
      <p>good {store.getState().good}</p>
      <p>neutral {store.getState().neutral}</p>
      <p>bad {store.getState().bad}</p>
    </div>
  </div>
)

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)