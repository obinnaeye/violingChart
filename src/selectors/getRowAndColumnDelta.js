import { createSelector } from 'reselect'

const getDelta = state => state.ui.delta

const getRowAndColumnDelta = createSelector(
  getDelta,
  (delta) => {
    const [row, column] = delta.split('/')

    return {
      row,
      column
    }
  }
)

export default getRowAndColumnDelta



// WEBPACK FOOTER //
// ./src/selectors/getRowAndColumnDelta.js