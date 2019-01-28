import * as d3 from 'd3'
import { createSelector } from 'reselect'

import getFormattedTimeseries from './getFormattedTimeseries'

const getUtcOffset = state => state.ui.utcOffset
const getShowTimeZones = state => state.ui.showTimeZones

const getUtcOffsets = createSelector(
  getFormattedTimeseries, getUtcOffset, getShowTimeZones,
  (data, utcOffset, showTimeZones) => {
    if (!showTimeZones) {
      return {
        utcOffsets: [0],
        utcOffset: 0
      }
    }

    const dates = Object.values(data).map(d => d.date)

    const offsets = dates.map(date => date.utcOffset())
    const groupedOffsets = d3.nest()
      .key(k => k)
      .rollup(v => v.length)
      .object(offsets)

    const offsetKeys = Object.keys(groupedOffsets)
    offsetKeys.unshift('0')

    const uniqueOffsetKeys = Array.from(new Set(offsetKeys))

    const sortedUniqueOffsetsKeys = uniqueOffsetKeys
      .sort((a, b) => b - a)
      .map(n => parseInt(n))

    return {
      utcOffsets: sortedUniqueOffsetsKeys,
      utcOffset
    }
  }
)

export default getUtcOffsets



// WEBPACK FOOTER //
// ./src/selectors/getUtcOffsets.js