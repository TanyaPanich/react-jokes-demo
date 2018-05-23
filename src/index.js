import React from 'react'
import ReactDOM from 'react-dom'
//step 2: create STORE:
import { createStore, applyMiddleware } from 'redux'
//step 12: use thunk to handle async functions
import thunk from 'redux-thunk'
//step 3: wrapping App in provider (see below)
import { Provider } from 'react-redux'
import './index.css'
//step 4: create /reducers folder and default state
import rootReducer from './reducers'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

//step 2: CREATE STORE
const store = createStore(rootReducer,
//step 12: ADD THUNK
applyMiddleware(thunk))


//step 3 - wrapping App in Provider and passing store to it
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()


// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
