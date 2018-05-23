import React, { Component } from 'react'

//REDUX
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//--------

import './App.css'

//REDUX
import Jokes from './components/Jokes'
import { getJokes } from './actions'

//import AddJokeForm from './components/AddJokeForm'
//WE MOVE IT TO CONTAINERS STEP 6
import AddJokeForm from './containers/AddJokeForm'


// We move API to /actions index.js
//const API = 'https://powerful-beyond-70119.herokuapp.com/jokes'

class App extends Component {
  // set state here
  // constructor(props) {
  //   super(props)
  //   this.state = { jokes: [] }
  // }

  // async componentDidMount() {
  //   const response = await fetch(API)
  //   const json = await response.json()
  //   console.log("jokes...", json)
  //   this.setState({
  //     jokes: json })
  // }

  // now we added to actions index.js method GET,
  // so we can just get jokes from props
  // populate the inital jokes:
  async componentDidMount() {
    this.props.getJokes()
  }
  //REFACTORING STEP 8, MOVE IT TO ACTIONS INDEX.JS
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
  //   this.setState({jokes: [...this.state.jokes, newJoke]})
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Jokes</h1>
  //       <Jokes jokes={ this.state.jokes } title="World's best Penguin jokes"/>
  //       <AddJokeForm addJoke={ this.addJoke } />
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="App">
        <h1>Jokes</h1>
        <Jokes />
        <AddJokeForm />
      </div>
    )
  }
}

// REDUX:
const mapDispatchToProps = dispatch => bindActionCreators({ getJokes }, dispatch)

// Do not forget to connect App, and import CONNECT (on the top)
export default connect(null, mapDispatchToProps)(App)

//export default App
