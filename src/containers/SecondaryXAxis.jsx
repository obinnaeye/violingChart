import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as d3 from 'd3'

import getStartAndEndValue from '../selectors/getStartAndEndValue'
import { deltaPrimaryFunctions, deltaSecondaryFormats } from '../utilities/delta'

import { GRID_SIZE } from '../constants/configuration'

import Axis from '../components/Axis'

const SecondaryXAxis = ({ x, y, width, height, startKey, endKey, delta }) => {
  const halfGridSize = GRID_SIZE / 2.0
  const deltaFunction = [...deltaPrimaryFunctions[delta]].pop()
  const deltaFormat = deltaSecondaryFormats[delta]

  const domain = [startKey.clone().local().toDate(), endKey.clone().local().startOf(delta).toDate()]
  const scale = d3.scaleTime()
    .domain(domain)
    .range([halfGridSize, width + halfGridSize])
    .nice(deltaFunction, 1)

  return (
    <Axis
      scale={scale}
      orientation="bottom"
      x={x}
      y={y}
      format={deltaFormat}
      interval={deltaFunction}
    />
  )
}

SecondaryXAxis.defaultProps = {
  x: 0,
  y: 0
}

SecondaryXAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number.isRequired,
  gridSize: PropTypes.number.isRequired,
  startKey: PropTypes.object.isRequired,
  endKey: PropTypes.object.isRequired,
  delta: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  const { startKey, endKey } = getStartAndEndValue(state)

  return {
    startKey,
    endKey
  }
}

export default connect(mapStateToProps, {})(SecondaryXAxis)



// WEBPACK FOOTER //
// ./src/containers/SecondaryXAxis.jsx