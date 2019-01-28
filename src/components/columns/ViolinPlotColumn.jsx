import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { GRID_SIZE } from '../../constants/configuration';
import getColorScales from '../../selectors/getColorScales';
import getMaxAndMinValue from '../../selectors/getMaxAndMinValue';
import ViolinPlot from '../ViolinPlot';




const ViolinPlotColumn = ({
  rows,
  index,
  timeseries,
  utcOffset,
  minValue,
  maxValue,
  colorScales
}) => {
  const rowCount = rows.length

  const data = {}

  rows.forEach((datetime, rowIndex) => {
    const key = datetime.clone().add(utcOffset, 'minutes').valueOf()
    const pairs = timeseries[key]

    if (pairs !== undefined) {
      const entries = Object.entries(pairs.utcOffset)

      entries.forEach(([currentUtcOffset, value]) => {
        data[currentUtcOffset] = data[currentUtcOffset] || Array(rowCount).fill(0)
        data[currentUtcOffset][rowIndex] = value.count
      })
    }
  })

  const renderViolinPlot = (dataForCurrentUtcOffset, currentUtcOffset) => {
    // Either use mean value (almost always 0 or 1) or use same permanent color
    // const meanValue = Math.round(d3.mean(dataForCurrentUtcOffset))
    // const color = colorScales[currentUtcOffset].scale(meanValue)
    const color = colorScales[currentUtcOffset].median
    const currentMaxValue = d3.max(dataForCurrentUtcOffset)

    return (
      <g
        transform={`rotate(90, 0, 0) translate(0, ${-GRID_SIZE + 0.5})`}
      >
        <ViolinPlot
          height={GRID_SIZE}
          minValue={0}
          maxValue={currentMaxValue}
          data={dataForCurrentUtcOffset}
          color={color}
        />
      </g>
    )
  }

  const violinPlots = Object.entries(data).map(([currentUtcOffset, dataForCurrentUtcOffset]) => (
    renderViolinPlot(dataForCurrentUtcOffset, currentUtcOffset)
  ))

  return (
    <g
      className="column"
      transform={`translate(${index * GRID_SIZE}, 0)`}
    >
      {violinPlots}
    </g>
  )
}

ViolinPlotColumn.defaultProps = {
}

ViolinPlotColumn.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired,
  index: PropTypes.number.isRequired,
  timeseries: PropTypes.objectOf(PropTypes.number).isRequired,
  utcOffset: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  colorScales: PropTypes.arrayOf(
    PropTypes.func.isRequired
  ).isRequired
}

const mapStateToProps = (state) => {
  const { maxValue, minValue } = getMaxAndMinValue(state)
  const colorScales = getColorScales(state)

  return {
    maxValue,
    minValue,
    colorScales
  }
}

const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(ViolinPlotColumn)



// WEBPACK FOOTER //
// ./src/components/columns/ViolinPlotColumn.jsx