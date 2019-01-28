import {
  SET_UTC_OFFSET
} from '../../constants/action-types'


const utcOffset = (state = 0, action) => {
  switch (action.type) {
    case SET_UTC_OFFSET:
      return action.data
    default:
      return state
  }
}

export default utcOffset



// WEBPACK FOOTER //
// ./src/reducers/ui/utcOffsetReducer.js