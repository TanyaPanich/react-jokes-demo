//step 8: add /actions,
// create functions that return async functions (which receive dispatch)


// normally this comes from process.env.API
const API = process.env.API ||
  'https://powerful-beyond-70119.herokuapp.com/jokes'


export const ADD_JOKE = 'ADD_JOKE'
// REFACTORING STEP 8
// SHOULD BE ASYNC

// THIS WAS IN APP.JS now we refactor it (see below)

// addJoke = async (joke) => {
//   console.log("joke to send to API", joke)
//   const response = await fetch(API, {
//     method: 'POST',
//     body: JSON.stringify(joke),
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//   const newJoke = await response.json()

//export it, container will get it and will do mapDispatchToProps
export const addJoke = joke =>
  async (dispatch) => {
    console.log("joke to send to API", joke)
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(joke),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newJoke = await response.json()

    // step 8:
    // INSTEAD OF setState WE DO DISPATCH
    // this.setState({jokes: [...this.state.jokes, newJoke]})
    dispatch({
      type: ADD_JOKE,
      payload: newJoke //{id: 1, question: '...', answer: ''}
    })
}

//we export these consts to /reducers jokes.js
export const GET_JOKES = 'GET_JOKES'
export const UPDATE_JOKES = 'UPDATE_JOKES'

// Need this to GET jokes from server,
// or update after adding a new joke
export const getJokes = () => { //export getJokes to app.js
  return async (dispatch) => {
    const response = await fetch(API)
    const jokes = await response.json()

    dispatch({
      type: UPDATE_JOKES,
      jokes
    })
  }
}
