import { combineReducers } from 'redux'

import ui from './ui'
import timeseries from './timeseriesReducer'
import dataFile from './dataFileReducer'

const rootReducer = combineReducers({
  ui,
  timeseries,
  dataFile
})

export default rootReducer



// WEBPACK FOOTER //
// ./src/reducers/rootReducer.js