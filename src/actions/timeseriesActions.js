import * as types from '../constants/action-types'

export const requestTimeseries = () => ({ type: types.REQUEST_TIMESERIES })

export const receiveTimeseries = data => ({ type: types.RECEIVE_TIMESERIES, data })

export const fetchTimeseries = () => (dispatch, getState) => {
  dispatch(requestTimeseries())

  const dataFile = getState().dataFile
  const data = require(`../../data/${dataFile}`)

  return dispatch(receiveTimeseries(data))
}



// WEBPACK FOOTER //
// ./src/actions/timeseriesActions.js