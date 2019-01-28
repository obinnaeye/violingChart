import {
  SET_PLOT_METHOD
} from '../../constants/action-types'

import {
  VIOLIN_PLOT
} from '../../constants/configuration-constants'


const plotMethodReducer = (state = VIOLIN_PLOT, action) => {
  switch (action.type) {
    case SET_PLOT_METHOD:
      return action.data
    default:
      return state
  }
}

export default plotMethodReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/plotMethodReducer.js