import * as d3 from 'd3'
import { createSelector } from 'reselect'

import getFormattedTimeseries from './getFormattedTimeseries'
import getRowAndColumnDelta from './getRowAndColumnDelta'

const getColumnGroupedTimeseries = createSelector(
  getFormattedTimeseries, getRowAndColumnDelta,
  (data, { column }) => d3.nest()
    .key(([_, value]) => value.date.clone().startOf(column).format('YYYY-MM-DD'))
    .rollup(group => ({
      totalCount: group.length,
      group
    }))
    .object(Object.entries(data))
)

export default getColumnGroupedTimeseries



// WEBPACK FOOTER //
// ./src/selectors/getColumnGroupedTimeseries.js