import React from 'react'
import Joke from './Joke'

//import CONNECT - Redux refactoring
import { connect } from 'react-redux'

const Jokes = ({ title, jokes }) => {

  const renderJokes = () => {
    return jokes.map((joke, i) => {
      return <Joke {...joke} key={i} />
    })
  }

  return (
    <div className="joke-list">
      <h1>{ title }</h1>
      <ul className="list-group">
        { renderJokes() }
      </ul>
    </div>
  )
}

//step 11: Used mapStateToProps in components where we need data from state
const mapStateToProps = (state) => ({
  jokes: state.jokes,
  title: 'Penguin Jokes'
})

export default connect(mapStateToProps)(Jokes)
//export default Jokes
