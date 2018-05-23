//we hardcoded these const in actions, that's why we can just export them
// if we don't specify some file in folder, it will go to index.js by default
import { ADD_JOKE, UPDATE_JOKES } from '../actions'


//step 5: Add reduce with Actions (switch cases)
export const jokes = (state = [], action) => {
  switch (action.type) {
    //const ADD_JOKE is hardcoded in /actions
    case ADD_JOKE:
      return [
        ...state,
        action.payload
      ]
    //const UPDATE_JOKES is hardcoded in /actions
    case UPDATE_JOKES:
      return [
        ...state,
        ...action.jokes
      ]

    default:
      return state
  }
}
