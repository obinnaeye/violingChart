import moment from 'moment'
import { createSelector } from 'reselect'

import Timer from '../utilities/benchmark'

import getMomentData from './getMomentData'
import getRowAndColumnDelta from './getRowAndColumnDelta'
import getMinAndMaxKey from './getMinAndMaxKey'

const getZoom = state => state.ui.zoom

const getStartAndEndValue = createSelector(
  getMinAndMaxKey, getRowAndColumnDelta, getMomentData, getZoom,
  ({ minKey, maxKey }, { column }, data, { start, end }) => {
    if (column === 'date') column = 'day'

    const zoomStartKey = minKey.clone().add(start, column)
    const zoomEndKey = minKey.clone().add(end, column)

    const startKey = moment.max(minKey, zoomStartKey)
    const endKey = moment.min(maxKey, zoomEndKey)

    return {
      startKey,
      endKey
    }
  }
)

export default getStartAndEndValue



// WEBPACK FOOTER //
// ./src/selectors/getStartAndEndValue.js