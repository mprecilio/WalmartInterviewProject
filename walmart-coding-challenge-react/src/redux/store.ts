import { applyMiddleware, createStore, combineReducers } from 'redux'
import { loginReducer } from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// All reducers combined into a root reducer to apply middleware, If you make a new reducer put it here
const rootReducer = combineReducers({
  login: loginReducer
})

// Store creation this currently has dev tools on top of it to see store in the browser
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

// Create-react-app redux boilerplate
export type AppDispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>
