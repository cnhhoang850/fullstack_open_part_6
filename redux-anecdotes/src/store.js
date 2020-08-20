import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notiReducer from './reducers/notiReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notiReducer,
    filter: filterReducer
  })
  
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store