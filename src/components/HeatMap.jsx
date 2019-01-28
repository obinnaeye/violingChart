import React from 'react'
import PropTypes from 'prop-types'

import XAxis from '../containers/XAxis'
import SecondaryXAxis from '../containers/SecondaryXAxis'
import YAxis from '../containers/YAxis'
import TableContainer from '../containers/TableContainer'
import Timeline from './Timeline'
import SummaryPlot from './SummaryPlot'
import FullSummaryPlot from './FullSummaryPlot'

import { GRID_SIZE, SCALE } from '../constants/configuration'

const HeatMap = ({ padding, rowCount, columnCount, maxColumn, maxColumnCount, delta, zoom, setZoom }) => {
  const halfGridSize = GRID_SIZE / 2
  const innerHeigth = GRID_SIZE * rowCount
  const innerWidth = GRID_SIZE * maxColumnCount
  const innerChartWidth = GRID_SIZE * columnCount
  const axisSize = GRID_SIZE * 1.5
  const summaryPlotSize = GRID_SIZE * 4
  const timelineSize = GRID_SIZE * 2

  const margins = {
    left: (axisSize * 6) + padding,
    right: padding,
    top: summaryPlotSize + (axisSize * 2) + padding,
    bottom: timelineSize + padding
  }

  const height = innerHeigth + margins.top + margins.bottom + padding + GRID_SIZE
  const width = innerWidth + margins.left + margins.right + padding + GRID_SIZE

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g>
        <SummaryPlot
          x={margins.left + padding + halfGridSize}
          y={padding}
          width={innerWidth}
          height={margins.top / 2}
        />
        <XAxis
          x={margins.left + padding}
          y={margins.top}
          width={innerChartWidth}
          height={innerHeigth}
          delta={delta.column}
          count={columnCount}
        />
      </g>
      <g transform={`translate(${margins.left}, ${margins.top})`}>
        <YAxis
          y={padding}
          width={innerChartWidth}
          height={innerHeigth}
          delta={delta.row}
          count={rowCount}
        />
        <TableContainer
          x={padding + halfGridSize + 0.5}
          y={padding + halfGridSize + 0.5}
        />
        <Timeline
          x={padding + halfGridSize}
          y={innerHeigth + padding + halfGridSize + (margins.bottom / 2)}
          width={innerWidth}
          height={margins.bottom / 2}
          maxSize={maxColumn}
          onSelect={setZoom}
          zoom={zoom}
        />
        <FullSummaryPlot
          x={padding + halfGridSize}
          y={innerHeigth + padding + halfGridSize + (margins.bottom / 2)}
          width={innerWidth}
          height={margins.bottom / 2}
          currentColumnCount={columnCount}
          maxColumnCount={maxColumn}
        />
        <SecondaryXAxis
          x={padding}
          y={innerHeigth + padding + halfGridSize}
          width={innerChartWidth}
          height={margins.bottom / 2}
          delta={delta.column}
          count={columnCount}
        />
      </g>
    </svg>
  )
}

HeatMap.defaultProps = {
  padding: 5 * SCALE
}

HeatMap.propTypes = {
  padding: PropTypes.number,
  rowCount: PropTypes.number.isRequired,
  columnCount: PropTypes.number.isRequired,
  maxColumnCount: PropTypes.number.isRequired,
  delta: PropTypes.shape({
    row: PropTypes.string.isRequired,
    column: PropTypes.string.isRequired
  }).isRequired,
  zoom: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
  }).isRequired,
  setZoom: PropTypes.func.isRequired
}

export default HeatMap



// WEBPACK FOOTER //
// ./src/components/HeatMap.jsx