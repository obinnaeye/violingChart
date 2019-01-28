import * as types from '../constants/action-types'

export const setDelta = data => ({ type: types.SET_DELTA, data })
export const setZoom = data => ({ type: types.SET_ZOOM, data })
export const setGroupingMethod = data => ({ type: types.SET_GROUPING_METHOD, data })
export const setPlotMethod = data => ({ type: types.SET_PLOT_METHOD, data })

export const showTooltip = data => ({ type: types.SHOW_TOOLTIP, data })
export const hideTooltip = () => ({ type: types.HIDE_TOOLTIP })
export const setUtcOffset = data => ({ type: types.SET_UTC_OFFSET, data })
export const setShowTimeZones = data => ({ type: types.SET_SHOW_TIME_ZONES, data })



// WEBPACK FOOTER //
// ./src/actions/uiActions.js