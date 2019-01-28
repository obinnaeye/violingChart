import { createSelector } from 'reselect'

import getStartAndEndColumnIndex from './getStartAndEndColumnIndex'
import getColumnTimeSteps from './getColumnTimeSteps'

const getDomain = createSelector(
  getStartAndEndColumnIndex, getColumnTimeSteps,
  ({ startIndex, endIndex }, columnTimeSteps) => {
    const sliced = columnTimeSteps.slice(startIndex, endIndex)
    const result = sliced.reduce((obj, item) => (obj[item.key] = item.values, obj), {})

    return result
  }
)

export default getDomain



// WEBPACK FOOTER //
// ./src/selectors/getDomain.js