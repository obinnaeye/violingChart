import moment from 'moment'
import { createSelector } from 'reselect'

const getData = state => state.timeseries
const getShowTimeZones = state => state.ui.showTimeZones

const buildMomentObject = (dateString, timeZoneString, showTimeZones) => {
  const date = moment.utc(dateString)
  const utcOffset = parseInt(timeZoneString) / 100 * 60

  if (timeZoneString !== undefined) {
    if (showTimeZones) {
      return date.utcOffset(utcOffset)
    }

    return date.add(utcOffset, 'minutes')
  }

  return date
}

const getFormattedTimeseries = createSelector(
  getData, getShowTimeZones,
  (data, showTimeZones) => {
    const result = data.reduce((obj, item) => {
      const date = buildMomentObject(item[0], item[1], showTimeZones)
      obj[date.valueOf()] = {
        date,
        data: item
      }

      return obj
    }, {})

    return result
  }
)

export default getFormattedTimeseries



// WEBPACK FOOTER //
// ./src/selectors/getFormattedTimeseries.js