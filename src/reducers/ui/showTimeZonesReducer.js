import {
  SET_SHOW_TIME_ZONES
} from '../../constants/action-types'


const showTimeZonesReducer = (state = true, action) => {
  switch (action.type) {
    case SET_SHOW_TIME_ZONES:
      return action.data
    default:
      return state
  }
}

export default showTimeZonesReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/showTimeZonesReducer.js