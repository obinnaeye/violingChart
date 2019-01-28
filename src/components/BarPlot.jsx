import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

const BarPlot = ({ data, maxValue, height, x, y, color, barSize, gutterSize }) => {
  const halfGutterSize = gutterSize / 2
  const dataCount = data.length

  const xScale = d3.scaleLinear()
    .domain([0, dataCount - 1])
    .range([0, ((dataCount - 1) * barSize)])

  const yScale = d3.scaleLinear()
    .domain([0, maxValue])
    .range([0, height])

  let translate
  if (x > 0 || y > 0) {
    translate = `translate(${x}, ${y})`
  }

  const renderBar = (value, index) => (
    <rect
      y={-yScale(value) + yScale(maxValue)}
      x={xScale(index) - halfGutterSize}
      width={barSize - gutterSize}
      height={yScale(value)}
    />
  )

  const renderBars = () => data.map((value, index) => renderBar(value, index))

  return (
    <g
      transform={translate}
      fill={color}
    >
      {renderBars()}
    </g>
  )
}

BarPlot.defaultProps = {
  x: 0,
  y: 0,
  color: 'black'
}

BarPlot.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  color: PropTypes.string,
  barSize: PropTypes.number.isRequired,
  gutterSize: PropTypes.number.isRequired
}


export default BarPlot



// WEBPACK FOOTER //
// ./src/components/BarPlot.jsx