import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//we add Testing tools:
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import renderer from 'react-test-renderer'

//make fake data
const jokesData = [{id:1, question: "penguin?", answer: "yes!"}]
//handle async
const middlewares = [ thunk ]
//setup Store
const mockStore = configureMockStore(middlewares)
const store = mockStore({jokes: jokesData})


describe('App', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  beforeEach(() => {
    fetchMock.get('end:/jokes', jokesData
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the same way every time', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
