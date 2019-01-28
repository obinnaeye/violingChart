import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

import {
  VIOLIN_PLOT,
  SQUARE_PLOT
} from '../constants/configuration-constants'
import ViolinPlotColumn from './columns/ViolinPlotColumn'
import ColorSquareColumn from './columns/ColorSquareColumn'

const Table = ({ timeseries, domain, x, y, utcOffset, plotMethod }) => {
  const renderColumn = (columnIndex, rows) => {
    switch (plotMethod) {
      case VIOLIN_PLOT:
        return (
          <ViolinPlotColumn
            rows={rows}
            index={columnIndex}
            utcOffset={utcOffset}
            timeseries={timeseries}
          />
        )
      case SQUARE_PLOT:
      default:
        return (
          <ColorSquareColumn
            rows={rows}
            index={columnIndex}
            utcOffset={utcOffset}
            timeseries={timeseries}
          />
        )
    }
  }

  const renderAllCells = () => (
    Object.entries(domain).map(([_column, rows], columnIndex) => (
      renderColumn(columnIndex, rows)
    ))
  )

  let translate
  if (x > 0 || y > 0) {
    translate = `translate(${x}, ${y})`
  }

  return (
    <g transform={translate}>
      {renderAllCells()}
    </g>
  )
}

Table.defaultProps = {
  x: 0,
  y: 0,
  utcOffset: 0
}

Table.propTypes = {
  timeseries: PropTypes.objectOf(PropTypes.number),
  domain: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.instanceOf(Moment)
    ).isRequired
  ).isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  utcOffset: PropTypes.number,
  plotMethod: PropTypes.string.isRequired
}

export default Table
