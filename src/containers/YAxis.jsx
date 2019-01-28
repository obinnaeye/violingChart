import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as d3 from 'd3'
import moment from 'moment'

import getRowAndColumnCount from '../selectors/getRowAndColumnDelta'
import getUtcOffsets from '../selectors/getUtcOffsets'
import getColorScales from '../selectors/getColorScales'
import getVisibleUtcOffsetAxis from '../selectors/getVisibleUtcOffsetAxis'
import { deltaSecondaryFunctions, deltaSecondarySmallFormats } from '../utilities/delta'

import { setUtcOffset as unboundSetUtcOffset } from '../actions/uiActions'

import Axis from '../components/Axis'

import { GRID_SIZE, SCALE } from '../constants/configuration'

const YAxis = ({ x, y, width, height, delta, utcOffsets, utcOffset, setUtcOffset, colorScales, showTimeZones }) => {
  const halfGridSize = GRID_SIZE / 2.0
  const deltaFunction = deltaSecondaryFunctions[delta.row]
  const deltaFormat = deltaSecondarySmallFormats[delta.row]

  const getDomain = (offset) => {
    const start = moment(0).startOf(delta.column).add(offset, delta.row)
    const end = moment(0).endOf(delta.column).add(offset, delta.row)

    return ([start.toDate(), end.toDate()])
  }

  const getScale = offset => d3.scaleTime()
    .domain(getDomain(offset))
    .range([halfGridSize, height + halfGridSize])
    .nice(deltaFunction, 1)

  const renderAxis = () => {
    if (delta.row === 'hour') {
      return utcOffsets.map((offset, index) => (
        <Axis
          key={offset}
          scale={getScale((offset - utcOffset) / 60)}
          orientation="left"
          x={x - (index * 30 * SCALE)}
          y={y}
          title={showTimeZones ? `${offset < 0 ? '-' : '+'}0${Math.abs(offset) / 60}:00` : null}
          onClick={() => setUtcOffset(offset)}
          color={colorScales[offset].median}
          height={height}
          format={deltaFormat}
          interval={deltaFunction}
          gridlines={index === 0 ? width : null}
        />
      ))
    }

    return (
      <Axis
        scale={getScale()}
        orientation="left"
        x={x}
        y={y}
        format={deltaFormat}
        gridlines={width}
      />
    )
  }

  return (
    <g>
      {renderAxis()}
    </g>
  )
}

YAxis.defaultProps = {
  x: 0,
  y: 0
}

YAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  height: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  const delta = getRowAndColumnCount(state)
  const { utcOffset } = getUtcOffsets(state)
  const colorScales = getColorScales(state)
  const visibleUtcOffsets = getVisibleUtcOffsetAxis(state)

  return {
    showTimeZones: state.ui.showTimeZones,
    utcOffsets: visibleUtcOffsets,
    delta,
    utcOffset,
    colorScales
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setUtcOffset: unboundSetUtcOffset
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(YAxis)



// WEBPACK FOOTER //
// ./src/containers/YAxis.jsx