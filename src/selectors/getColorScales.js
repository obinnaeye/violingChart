import * as d3 from 'd3'
import { createSelector } from 'reselect'

import {
  COLORS
} from '../constants/configuration'

import {
  LINEAR_GROUPING,
  LOG_GROUPING,
  QUANTILE_GROUPING
} from '../constants/configuration-constants'

import getMaxAndMinValue from './getMaxAndMinValue'
import getRowGroupedTimeseries from './getRowGroupedTimeseries'
import getUtcOffsets from './getUtcOffsets'

const getContinousColors = (index) => {
  const currentColor = COLORS[index]

  if (currentColor instanceof Array) {
    return [currentColor[0], currentColor[currentColor.length - 1]]
  }

  return ['white', currentColor]
}

const getDiscreteColors = (index) => {
  const currentColor = COLORS[index]

  if (currentColor instanceof Array) {
    return currentColor
  }

  const colorInterpolator = d3.interpolateRgb('white', currentColor)
  const colors = d3.quantize(colorInterpolator, 7)
  return colors
}

const getMedianColor = (index) => {
  const currentColor = COLORS[index]
  return currentColor[Math.ceil(currentColor.length / 2)]
}

const getContinousDomain = (minValue, maxValue) => [minValue, maxValue]
const getDiscreteDomain = data => Object.values(data).map(value => value.totalCount)
const getGroupingMethod = state => state.ui.groupingMethod

const getColorScale = (index, minValue, maxValue, data, groupingMethod) => {
  switch (groupingMethod) {
    case LINEAR_GROUPING:
      return d3.scaleLinear()
        .domain(getContinousDomain(minValue, maxValue))
        .range(getContinousColors(index))
    case LOG_GROUPING:
      return d3.scaleLog()
        .domain(getContinousDomain(minValue, maxValue))
        .range(getContinousColors(index))
    case QUANTILE_GROUPING:
      return d3.scaleQuantile()
        .domain(getDiscreteDomain(data))
        .range(getDiscreteColors(index))
    default:
      return d3.scaleLinear()
        .domain(getContinousDomain(maxValue))
        .range(getContinousColors(index))
  }
}

const getColorScales = createSelector(
  getMaxAndMinValue, getRowGroupedTimeseries, getUtcOffsets, getGroupingMethod,
  ({ minValue, maxValue }, data, { utcOffsets }, groupingMethod) => {
    return utcOffsets.reduce((result, utcOffset, index) => {
      result[utcOffset] = {
        scale: getColorScale(index, minValue, maxValue, data, groupingMethod),
        median: getMedianColor(index)
      }
      return result
    }, {})
  }
)

export default getColorScales



// WEBPACK FOOTER //
// ./src/selectors/getColorScales.js