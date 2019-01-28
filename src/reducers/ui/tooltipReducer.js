import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  REQUEST_TIMESERIES,
  SET_DELTA,
  SET_ZOOM
} from '../../constants/action-types'

const tooltipReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return action.data
    case HIDE_TOOLTIP:
      return false
    case REQUEST_TIMESERIES:
    case SET_DELTA:
    case SET_ZOOM:
      return false
    default:
      return state
  }
}

export default tooltipReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/tooltipReducer.js