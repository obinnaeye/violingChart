import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import getRowAndColumnCount from '../selectors/getRowAndColumnCount'
import getRowAndColumnDelta from '../selectors/getRowAndColumnDelta'

import HeatMap from '../components/HeatMap'

import { setDelta, setZoom } from '../actions/uiActions'

const HeatMapContainer = props => (
  <div id="heat-map">
    <HeatMap
      {...props}
    />
  </div>
)

HeatMapContainer.defaultProps = {
}

HeatMapContainer.propTypes = {
}

const mapStateToProps = (state) => {
  const { rowCount, columnCount, maxColumn, maxColumnCount } = getRowAndColumnCount(state)
  const delta = getRowAndColumnDelta(state)
  const zoom = state.ui.zoom

  return {
    rowCount,
    columnCount,
    maxColumn,
    maxColumnCount,
    zoom,
    delta
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setDelta,
  setZoom
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HeatMapContainer)



// WEBPACK FOOTER //
// ./src/containers/HeatMapContainer.jsx