import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import getRowGroupedTimeseries from '../selectors/getRowGroupedTimeseries'
import getStartAndEndValue from '../selectors/getStartAndEndValue'
import getMaxAndMinValue from '../selectors/getMaxAndMinValue'
import getDomain from '../selectors/getDomain'
import getUtcOffsets from '../selectors/getUtcOffsets'

import Table from '../components/Table'

const TableContainer = props => (
  <Table
    {...props}
  />
)

TableContainer.defaultProps = {
  x: 0,
  y: 0,
  utcOffset: 0
}

TableContainer.propTypes = {
  timeseries: PropTypes.objectOf(PropTypes.number).isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  utcOffset: PropTypes.number
}

const mapStateToProps = (state) => {
  const timeseries = getRowGroupedTimeseries(state)
  const domain = getDomain(state)
  const { startKey, endKey } = getStartAndEndValue(state)
  const { minValue, maxValue } = getMaxAndMinValue(state)
  const { utcOffset } = getUtcOffsets(state)
  const plotMethod = state.ui.plotMethod

  return {
    timeseries,
    domain,
    startKey,
    endKey,
    minValue,
    maxValue,
    utcOffset,
    plotMethod
  }
}

export default connect(mapStateToProps, {})(TableContainer)



// WEBPACK FOOTER //
// ./src/containers/TableContainer.jsx