import moment from 'moment'
import { createSelector } from 'reselect'

import Timer from '../utilities/benchmark'

import getMomentData from './getMomentData'
import getRowAndColumnDelta from './getRowAndColumnDelta'

const getMinAndMaxKey = createSelector(
  getRowAndColumnDelta, getMomentData,
  ({ column }, data) => {
    if (column === 'date') column = 'day'

    const minKey = moment.min(...data).clone().utc().startOf(column)
    const maxKey = moment.max(...data).clone().utc().startOf(column).add(1, column)

    return {
      minKey,
      maxKey
    }
  }
)

export default getMinAndMaxKey



// WEBPACK FOOTER //
// ./src/selectors/getMinAndMaxKey.js