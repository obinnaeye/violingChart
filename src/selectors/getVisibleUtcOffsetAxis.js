import { createSelector } from 'reselect'

import getStartAndEndValue from './getStartAndEndValue'
import getRowGroupedTimeseries from './getRowGroupedTimeseries'

const getVisibleUtcOffsetAxis = createSelector(
  getStartAndEndValue, getRowGroupedTimeseries,
  ({ startKey, endKey }, data) => {
    const startKeyValue = startKey.valueOf()
    const endKeyValue = endKey.valueOf()

    const groupedUtcOffsets = Object.entries(data)
      .filter(([key, _]) => key >= startKeyValue && key <= endKeyValue)
      .map(([_, value]) => Object.keys(value.utcOffset))

    const visibleUtcOffsets = [].concat(...groupedUtcOffsets)
    visibleUtcOffsets.unshift('0')

    const uniqueVisibleUtcOffsets = Array.from(new Set(visibleUtcOffsets))
      .map(n => parseInt(n))

    return uniqueVisibleUtcOffsets
  }
)

export default getVisibleUtcOffsetAxis



// WEBPACK FOOTER //
// ./src/selectors/getVisibleUtcOffsetAxis.js