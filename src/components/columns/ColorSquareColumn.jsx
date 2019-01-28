import React from 'react'
import PropTypes from 'prop-types'

import { GUTTER_SIZE, GRID_SIZE } from '../../constants/configuration'

import Cell from '../Cell'

const ColorSquareColumn = ({ rows, index, timeseries, utcOffset }) => {
  const renderCell = (rowIndex, datetime) => {
    const key = datetime.clone().add(utcOffset, 'minutes').valueOf()
    const pairs = timeseries[key]

    if (pairs === undefined) {
      return
    }

    const entries = Object.entries(pairs.utcOffset)

    return entries.map(([currentUtcOffset, value], cellIndex) => (
      <Cell
        scale={1 / entries.length}
        index={cellIndex}
        debug={datetime}
        key={`${key}-${currentUtcOffset}`}
        dataKey={key}
        utcOffset={currentUtcOffset}
        value={value.count}
        rowIndex={rowIndex}
        columnIndex={index}
        size={GRID_SIZE - GUTTER_SIZE}
        gutter={GUTTER_SIZE}
      />
    ))
  }

  const cells = rows.map((datetime, rowIndex) => (
    renderCell(rowIndex, datetime)
  ))

  return (
    <g
      className="column"
      transform={`translate(${index * GRID_SIZE}, 0)`}
    >
      {cells}
    </g>
  )
}

ColorSquareColumn.defaultProps = {
}

ColorSquareColumn.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  index: PropTypes.number.isRequired,
  timeseries: PropTypes.objectOf(PropTypes.number).isRequired,
  utcOffset: PropTypes.number.isRequired
}

export default ColorSquareColumn



// WEBPACK FOOTER //
// ./src/components/columns/ColorSquareColumn.jsx