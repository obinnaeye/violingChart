import {
  SET_DELTA
} from '../../constants/action-types'


const deltaReducer = (state = 'hour/date', action) => {
  switch (action.type) {
    case SET_DELTA:
      return action.data
    default:
      return state
  }
}

export default deltaReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/deltaReducer.js