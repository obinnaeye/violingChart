import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import getColumnMaxAndMinValue from '../selectors/getColumnMaxAndMinValue'
import getColumnGroupedTimeseries from '../selectors/getColumnGroupedTimeseries'
import getDomain from '../selectors/getDomain'

import BarPlot from './BarPlot'

import { GRID_SIZE, GUTTER_SIZE } from '../constants/configuration'

const SummaryPlot = ({ x, y, height, minValue, maxValue, domain, timeseries }) => {
  const data = Object.entries(domain).map(([column]) => {
    const value = timeseries[column]

    if (value !== undefined) {
      return value.totalCount
    }
    return 0
  })

  return (
    <BarPlot
      x={x}
      y={y}
      height={height}
      maxValue={maxValue}
      data={data}
      color="rgba(0, 0, 0, 0.5)"
      barSize={GRID_SIZE}
      gutterSize={GUTTER_SIZE}
    />
  )
}

SummaryPlot.defaultProps = {
  x: 0,
  y: 0,
  fullSeries: false
}

SummaryPlot.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  timeseries: PropTypes.object.isRequired,
  domain: PropTypes.object.isRequired,
  fullSeries: PropTypes.bool
}


const mapStateToProps = (state) => {
  const { maxValue } = getColumnMaxAndMinValue(state)
  const timeseries = getColumnGroupedTimeseries(state)
  const domain = getDomain(state)

  return {
    maxValue,
    timeseries,
    domain
  }
}

const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(SummaryPlot)



// WEBPACK FOOTER //
// ./src/components/SummaryPlot.jsx