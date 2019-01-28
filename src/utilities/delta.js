import * as d3 from 'd3'

d3.timeFormatDefaultLocale({
  dateTime: '%A den %d %B %Y %X',
  date: '%d-%m-%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  shortDays: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
  months: [
    'januar', 'februar', 'marts', 'april', 'maj', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'december'
  ],
  shortMonths: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
})

export const deltaSeries = {
  unit: ['second', 'minute', 'hour', 'day', 'date', 'month'],
  line: ['minute', 'hour', 'date', 'week', 'month', 'year']
}

export const deltaPrimaryFunctions = {
  minute: [d3.timeYear, d3.timeMonth, d3.timeDay, d3.timeHour, d3.timeMinute],
  hour: [d3.timeYear, d3.timeMonth, d3.timeDay, d3.timeHour],
  day: [d3.timeYear, d3.timeMonth, d3.timeWeek, d3.timeMonday],
  date: [d3.timeYear, d3.timeMonth, d3.timeDay],
  week: [d3.timeYear, d3.timeMonth, d3.timeWeek],
  month: [d3.timeYear, d3.timeMonth],
  year: [d3.timeYear]
}

export const deltaSecondaryFunctions = {
  second: d3.timeSecond,
  minute: d3.timeMinute,
  hour: d3.timeHour,
  day: d3.timeMonday,
  date: d3.timeDay,
  week: d3.timeWeek,
  month: d3.timeMonth
}

export const deltaFullFormats = {
  second: 'YYYY-MM-DDTHH:mm:ss',
  minute: 'YYYY-MM-DDTHH:mm',
  hour: 'YYYY-MM-DDTHH',
  day: 'YYYY-MM-DD',
  date: 'YYYY-MM-DD',
  week: 'YYYY-MM-ww',
  month: 'YYYY-MM',
  year: 'YYYY'
}

export const deltaPrimarySmallFormats = {
  minute: ['YYYY', 'MMM', 'D', 'HH', 'mm'],
  hour: ['YYYY', 'MMM', 'D', 'HH'],
  day: ['YYYY', 'MMM', 'W', 'dd'],
  date: ['YYYY', 'MMM', 'D'],
  week: ['YYYY', 'MMM', 'W'],
  month: ['YYYY', 'M'],
  year: ['YY']
}

export const deltaSecondarySmallFormats = {
  second: 'ss',
  minute: 'mm',
  hour: 'HH',
  day: 'dd',
  date: 'D',
  week: 'W',
  month: 'M'
}

export const deltaSecondaryFormats = {
  second: 'HH:mm:ss',
  minute: 'HH:mm',
  hour: 'HH',
  day: 'dd',
  date: 'dd',
  week: 'W',
  month: 'M-YY',
  year: 'YYYY'
}



// WEBPACK FOOTER //
// ./src/utilities/delta.js