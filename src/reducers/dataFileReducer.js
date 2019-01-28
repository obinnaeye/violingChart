import {
  SET_DATA_FILE
} from '../constants/action-types'

import {
  DATASET_2
} from '../constants/configuration-constants'

const dataFileReducer = (state = DATASET_2, action) => {
  switch (action.type) {
    case SET_DATA_FILE:
      return action.data
    default:
      return state
  }
}

export default dataFileReducer



// WEBPACK FOOTER //
// ./src/reducers/dataFileReducer.js