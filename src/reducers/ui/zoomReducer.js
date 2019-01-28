import {
  SET_ZOOM
} from '../../constants/action-types'

import { MAX_COLUMN_COUNT } from '../../constants/configuration'

const defaultState = {
  start: 0,
  end: MAX_COLUMN_COUNT
}

const ensureInsideZoomInterval = ({ start, end }) => {
  if (end <= start) end = start + 1
  if (end - start > MAX_COLUMN_COUNT) end = start + MAX_COLUMN_COUNT

  return { start, end }
}

const zoomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ZOOM:
      return ensureInsideZoomInterval(action.data)
    default:
      return state
  }
}

export default zoomReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/zoomReducer.js