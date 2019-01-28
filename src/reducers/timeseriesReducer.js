import {
  RECEIVE_TIMESERIES
} from '../constants/action-types'

const timeseriesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TIMESERIES:
      return action.data
    default:
      return state
  }
}

export default timeseriesReducer



// WEBPACK FOOTER //
// ./src/reducers/timeseriesReducer.js