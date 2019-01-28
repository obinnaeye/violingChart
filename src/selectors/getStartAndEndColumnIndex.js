import { createSelector } from 'reselect'

import getMinAndMaxKey from './getMinAndMaxKey'
import getStartAndEndValue from './getStartAndEndValue'
import getRowAndColumnDelta from './getRowAndColumnDelta'

const getStartAndEndColumnIndex = createSelector(
  getMinAndMaxKey, getStartAndEndValue, getRowAndColumnDelta,
  ({ minKey }, { startKey, endKey }, { column }) => {
    if (column === 'date') column = 'day'

    const startIndex = startKey.diff(minKey, column)
    const endIndex = endKey.diff(minKey, column)

    return {
      startIndex,
      endIndex
    }
  }
)

export default getStartAndEndColumnIndex



// WEBPACK FOOTER //
// ./src/selectors/getStartAndEndColumnIndex.js