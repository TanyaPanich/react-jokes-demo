//this stayed exactly as it is - dump component
import React from 'react'

const Joke = ({ question, answer }) => {

  return (
    <li className="list-group-item">
      <b>{ question }</b>
      <p>{ answer }</p>
    </li>
  )
}

export default Joke
