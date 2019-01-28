import {
  REQUEST_TIMESERIES,
  RECEIVE_TIMESERIES
} from '../../constants/action-types'

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case REQUEST_TIMESERIES:
      return true
    case RECEIVE_TIMESERIES:
      return false
    default:
      return state
  }
}

export default loadingReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/loadingReducer.js