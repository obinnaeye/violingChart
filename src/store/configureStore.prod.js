import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

export default configureStore



// WEBPACK FOOTER //
// ./src/store/configureStore.prod.js