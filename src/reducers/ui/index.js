import { combineReducers } from 'redux'

import loading from './loadingReducer'
import delta from './deltaReducer'
import zoom from './zoomReducer'
import tooltip from './tooltipReducer'
import utcOffset from './utcOffsetReducer'
import groupingMethod from './groupingMethodReducer'
import plotMethod from './plotMethodReducer'
import showTimeZones from './showTimeZonesReducer'

const uiReducer = combineReducers({
  loading,
  delta,
  zoom,
  tooltip,
  utcOffset,
  groupingMethod,
  plotMethod,
  showTimeZones
})

export default uiReducer



// WEBPACK FOOTER //
// ./src/reducers/ui/index.js