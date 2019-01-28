import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import getColumnMaxAndMinValue from '../selectors/getColumnMaxAndMinValue'
import getColumnGroupedTimeseries from '../selectors/getColumnGroupedTimeseries'
import getColumnTimeSteps from '../selectors/getColumnTimeSteps'

import BarPlot from './BarPlot'


import { GRID_SIZE, GUTTER_SIZE } from '../constants/configuration'

const FullSummaryPlot = ({ x, y, height, width, minValue, maxValue, timeseries, timeSteps, maxColumnCount }) => {
  const data = timeSteps.map(({ key }) => {
    const value = timeseries[key]

    if (value !== undefined) {
      return value.totalCount
    }
    return 0
  })

  const barWidth = width / maxColumnCount

  return (
    <BarPlot
      x={x}
      y={y}
      height={height}
      minValue={minValue}
      maxValue={maxValue}
      data={data}
      color="rgba(0, 0, 0, 0.5)"
      barSize={barWidth}
      gutterSize={GUTTER_SIZE}
    />
  )
}

FullSummaryPlot.defaultProps = {
  x: 0,
  y: 0,
  fullSeries: false
}

FullSummaryPlot.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  timeseries: PropTypes.object.isRequired,
  maxColumnCount: PropTypes.number.isRequired
}


const mapStateToProps = (state) => {
  const { maxValue, minValue } = getColumnMaxAndMinValue(state)
  const timeseries = getColumnGroupedTimeseries(state)
  const timeSteps = getColumnTimeSteps(state)

  return {
    maxValue,
    minValue,
    timeseries,
    timeSteps
  }
}

const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(FullSummaryPlot)



// WEBPACK FOOTER //
// ./src/components/FullSummaryPlot.jsx