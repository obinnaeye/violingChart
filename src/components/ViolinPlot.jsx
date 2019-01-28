import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import { GRID_SIZE } from '../constants/configuration'

const ViolinPlot = ({ data, minValue, maxValue, height, x, y, color }) => {
  const halfGridSize = GRID_SIZE / 2
  const halfHeight = height / 2
  const dataCount = data.length

  const xScale = d3.scaleLinear()
    .domain([0, dataCount - 1])
    .range([halfGridSize, ((dataCount - 1) * GRID_SIZE) + halfGridSize])

  const yScale = d3.scaleLinear()
    .domain([minValue, maxValue])
    .range([0, halfHeight])

  const area = d3.area()
    .curve(d3.curveBasis)
    .x((d, i) => xScale(i))
    .y0(_ => 0)
    .y1(d => yScale(d))

  const pathCommand = area(data)

  let translate
  if (x > 0 || y > 0) {
    translate = `translate(${x}, ${y})`
  }

  return (
    <g
      transform={translate}
      fill={color}
    >
      <g
        transform={`translate(0, ${halfHeight - 0.2})`}
      >
        <path d={pathCommand} />
      </g>
      <g
        transform={`scale(1, -1) translate(0, ${-halfHeight - 0.2})`}
      >
        <path d={pathCommand} />
      </g>
    </g>
  )
}

ViolinPlot.defaultProps = {
  x: 0,
  y: 0,
  color: 'black'
}

ViolinPlot.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  color: PropTypes.string
}


export default ViolinPlot



// WEBPACK FOOTER //
// ./src/components/ViolinPlot.jsx