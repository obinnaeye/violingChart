import * as d3 from 'd3'
import { createSelector } from 'reselect'

import getRowGroupedTimeseries from './getRowGroupedTimeseries'

const getMaxAndMinValue = createSelector(
  getRowGroupedTimeseries,
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

export default getMaxAndMinValue



// WEBPACK FOOTER //
// ./src/selectors/getMaxAndMinValue.js