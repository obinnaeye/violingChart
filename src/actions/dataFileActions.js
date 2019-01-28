import * as types from '../constants/action-types'

import { fetchTimeseries } from './timeseriesActions'

export const setDataFile = data => ({ type: types.SET_DATA_FILE, data })

export const changeDataFile = newDataFile => (dispatch) => {
  dispatch(setDataFile(newDataFile))
  return dispatch(fetchTimeseries())
}



// WEBPACK FOOTER //
// ./src/actions/dataFileActions.js