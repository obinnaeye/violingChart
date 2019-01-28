import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as d3 from 'd3'

import getStartAndEndValue from '../selectors/getStartAndEndValue'
import { deltaPrimaryFunctions, deltaPrimarySmallFormats } from '../utilities/delta'

import { GRID_SIZE } from '../constants/configuration'

import Axis from '../components/Axis'

const XAxis = ({ x, y, width, height, startKey, endKey, delta }) => {
  const halfGridSize = GRID_SIZE / 2.0
  const deltaFunctions = deltaPrimaryFunctions[delta]
  const deltaFormats = deltaPrimarySmallFormats[delta]

  const domain = [startKey.clone().local().toDate(), endKey.clone().local().startOf(delta).toDate()]
  const scale = d3.scaleTime()
    .domain(domain)
    .range([halfGridSize, width + halfGridSize])
    .nice([...deltaFunctions].pop(), 1)
    .clamp(true)

  const axesCount = deltaFormats.length
  const yOffset = GRID_SIZE * (axesCount - 1)

  const renderAxes = () => (
    deltaFormats.map((deltaFormat, index) => {
      const last = index === axesCount - 1
      return (
        <Axis
          scale={scale}
          orientation="top"
          x={x}
          y={y + (GRID_SIZE * index) - yOffset}
          format={deltaFormat}
          interval={deltaFunctions[index]}
          gridlines={last ? height : null}
          clamp={!last}
        />
      )
    })
  )

  return (
    <g>
      {renderAxes()}
    </g>
  )
}

XAxis.defaultProps = {
  x: 0,
  y: 0
}

XAxis.propTypes = {
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

export default connect(mapStateToProps, {})(XAxis)



// WEBPACK FOOTER //
// ./src/containers/XAxis.jsx