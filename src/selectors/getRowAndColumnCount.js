import { createSelector } from 'reselect'

import { MAX_COLUMN_COUNT } from '../constants/configuration'

import getMinAndMaxKey from './getMinAndMaxKey'
import getStartAndEndValue from './getStartAndEndValue'
import getRowAndColumnDelta from './getRowAndColumnDelta'
import Timer from '../utilities/benchmark'

const getRowAndColumnCount = createSelector(
  getMinAndMaxKey, getStartAndEndValue, getRowAndColumnDelta,
  ({ minKey, maxKey }, { startKey, endKey }, { row, column }) => {
    if (row === 'date') row = 'day'
    if (column === 'date') column = 'day'

    const endOfStartPeriod = startKey.clone().endOf(column)

    let rowCount = endOfStartPeriod.diff(startKey, row) + 1

    const maxColumn = maxKey.diff(minKey, column) + 1
    const columnCount = Math.min(endKey.diff(startKey, column), MAX_COLUMN_COUNT)
    const maxColumnCount = Math.min(maxColumn, MAX_COLUMN_COUNT)

    if (column === 'month' && (row === 'day' || row === 'date')) rowCount = 31

    return {
      rowCount,
      columnCount,
      maxColumn,
      maxColumnCount
    }
  }
)

export default getRowAndColumnCount



// WEBPACK FOOTER //
// ./src/selectors/getRowAndColumnCount.js