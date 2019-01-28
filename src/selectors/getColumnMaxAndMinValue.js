import * as d3 from 'd3'
import { createSelector } from 'reselect'

import getColumnGroupedTimeseries from './getColumnGroupedTimeseries'

const getColumnMaxAndMinValue = createSelector(
  getColumnGroupedTimeseries,
  (data) => {
    const values = Object.values(data).map(value => value.totalCount)
    const minValue = d3.min(values)
    const maxValue = d3.max(values)

    return {
      minValue,
      maxValue
    }
  }
)

export default getColumnMaxAndMinValue



// WEBPACK FOOTER //
// ./src/selectors/getColumnMaxAndMinValue.js