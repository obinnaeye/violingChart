import * as d3 from 'd3'
import moment from 'moment'
import { createSelector } from 'reselect'

import getMinAndMaxKey from './getMinAndMaxKey'
import getRowAndColumnDelta from './getRowAndColumnDelta'

import { deltaPrimaryFunctions, deltaFullFormats } from '../utilities/delta'
import Timer from '../utilities/benchmark'

const getDeltaFunction = delta => [...deltaPrimaryFunctions[delta]].pop()

const getColumnTimeSteps = createSelector(
  getMinAndMaxKey, getRowAndColumnDelta,
  ({ minKey, maxKey }, { row, column }) => {
    const rowDeltaFunction = getDeltaFunction(row)
    const range = rowDeltaFunction.every(1).range(minKey.toDate(), maxKey.toDate()).map(d => moment.utc(d))

    const deltaFullFormat = deltaFullFormats[column]

    const result = d3.nest()
      .key(d => moment.utc(d).format(deltaFullFormat))
      .entries(range)

    return result
  }
)

export default getColumnTimeSteps



// WEBPACK FOOTER //
// ./src/selectors/getColumnTimeSteps.js