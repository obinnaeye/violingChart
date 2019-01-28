import { createSelector } from 'reselect'

import getFormattedTimeseries from './getFormattedTimeseries'

const getMomentData = createSelector(
  getFormattedTimeseries,
  (data) => {
    return Object.entries(data).map(([_, value]) => value.date)
  }
)

export default getMomentData



// WEBPACK FOOTER //
// ./src/selectors/getMomentData.js