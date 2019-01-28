import * as d3 from 'd3'
import { createSelector } from 'reselect'

import getFormattedTimeseries from './getFormattedTimeseries'
import getRowAndColumnDelta from './getRowAndColumnDelta'

const getRowGroupedTimeseries = createSelector(
  getFormattedTimeseries, getRowAndColumnDelta,
  (data, { row }) => {
    return d3.nest()
      .key(([_, value]) => value.date.startOf(row).valueOf())
      .rollup(group => ({
        totalCount: group.length,
        utcOffset: d3.nest()
          .key(([_, value]) => value.date.utcOffset())
          .rollup(pairs => ({
            count: pairs.length,
            group: pairs.reduce((obj, [key, value]) => {
              obj[key] = value
              return obj
            }, {})
          }))
          .object(group)
      }))
      .object(Object.entries(data))
  }
)

export default getRowGroupedTimeseries



// WEBPACK FOOTER //
// ./src/selectors/getRowGroupedTimeseries.js