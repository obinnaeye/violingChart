import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import moment from 'moment'
import App from './containers/App.jsx'
import configureStore from './store/configureStore'

const store = configureStore()
moment.locale('en')

const Prototype = props => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Prototype />, document.getElementById('root'))
})

