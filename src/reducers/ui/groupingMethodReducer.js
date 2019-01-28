import {
  SET_GROUPING_METHOD
} from '../../constants/action-types'

import {
  QUANTILE_GROUPING
} from '../../constants/configuration-constants'

const groupingMethodReducer = (state = QUANTILE_GROUPING, action) => {
  switch (action.type) {
    case SET_GROUPING_METHOD:
      return action.data
    default:
      return state
  }
}

export default groupingMethodReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/groupingMethodReducer.js