//step 4: Create /reducers + default state Using combineReducers

import { combineReducers } from 'redux'
import { jokes } from './jokes'

export default combineReducers({
  jokes
})
