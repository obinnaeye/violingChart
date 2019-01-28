import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showTooltip as unboundShowTooltip } from '../actions/uiActions'

import getColorScales from '../selectors/getColorScales'

import '../stylesheets/src/stylesheets/cell.scss'

const Cell = ({ colorScales, value, utcOffset, rowIndex, columnIndex, size, gutter, dataKey, showTooltip, scale, index }) => {
  const halfGutter = gutter / 2
  const color = colorScales[utcOffset].scale(value)

  const handleClick = (event) => {
    console.log(showTooltip)
    showTooltip({
      x: event.pageX,
      y: event.pageY,
      dataKey,
      utcOffset
    })
  }

  return (
    <rect
      className="cell"
      width={size * scale}
      height={size}
      x={halfGutter}
      y={halfGutter + (rowIndex * (size + gutter))}
      fill={color}
      title={value}
      onClick={handleClick}
    />
  )
}

Cell.defaultProps = {
}

Cell.propTypes = {
  colorScales: PropTypes.arrayOf(
    PropTypes.func.isRequired
  ).isRequired,
  values: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  gutter: PropTypes.number.isRequired,
  dataKey: PropTypes.number.isRequired,
  showTooltip: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const colorScales = getColorScales(state)

  return {
    colorScales
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  showTooltip: unboundShowTooltip
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Cell)


