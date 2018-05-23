import React from 'react'
import ReactDOM from 'react-dom'
import AddJokeForm from './AddJokeForm'

//React testing tool for Components
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('AddJokeForm', () => {
  it('calls AddJokeForm when the button is clicked', () => {
    //this is a spy:
    const addJoke = jest.fn()
    const wrapper = shallow(<AddJokeForm.WrappedComponent addJoke={ addJoke } />)

    let event = {
      preventDefault: () => console.log('preventDefault'),
      target: {
          question: {value: 'testing'},
          answer: {value: '1234'},
          reset: () => console.log('reset')
      }
    }
    wrapper.find('form').simulate('submit', event)
    expect(addJoke.mock.calls.length).toBe(1)

  })
})
