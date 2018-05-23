// here we connect components to REDUX and STORE

import React from 'react'

// REFACTORING STEP 7
import { connect } from 'react-redux'
import { addJoke } from '../actions'
import { bindActionCreators } from 'redux'


//-------
// step 6: we move components from app.js to containers folder
// (wrapped with REDUX)
// and don't forget in app.js to import right locations

// INSTEAD OF dispatch
// const AddJokeForm = ({ dispatch }) => {
// WE NOW USE addJoke: (which is from /actions)
const AddJokeForm = ({ addJoke }) => {

  const onSubmit = (e) => {
    e.preventDefault()
    let form = e.target

    let newJoke = {
      question: form.question.value.trim(),
      answer: form.answer.value.trim()
    }

    addJoke(newJoke)

    // //// REFACTORING STEP 7
    // dispatch(addJoke(newJoke))
    // //----------

    form.reset()
  }

  return (
    <form className="well" onSubmit={ onSubmit }>
      <fieldset className="form-group">
        <label htmlFor="question">Question</label>
        <input type="text" name="question" className="form-control" />
        <label htmlFor="answer">Answer</label>
        <input type="text" name="answer" className="form-control" />
        <button className="btn btn-success">Add</button>
      </fieldset>
    </form>
  )
}
// step 11: Here we use mapDispatchToProps - so we don't have to use it in
// components
// addJoke is from /actions

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addJoke
}, dispatch)

// export default AddJokeForm
// step 7: using connect we connect action addJoke and AddJokeForm
// and it will be used in App.js
export default connect(null, mapDispatchToProps)(AddJokeForm)
