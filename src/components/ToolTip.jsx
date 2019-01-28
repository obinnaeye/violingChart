import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hideTooltip } from '../actions/uiActions'
import getRowGroupedTimeseries from '../selectors/getRowGroupedTimeseries'

import '../stylesheets/src/stylesheets/tooltip.scss'

const Tooltip = ({ x, y, onDisband, groupData }) => {
  const { group, count } = groupData
  const style = {
    left: x,
    top: y
  }

  const renderData = () => Object.entries(group).map(([_, { data }]) => data[1]).join(', ')

  return (
    <div
      id="tooltip"
      style={style}
      onClick={onDisband}
      role="textbox"
      tabIndex="0"
    >
      <div>Count: {count}</div>
      <div>Data: {renderData()}</div>
    </div>
  )
}

Tooltip.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onDisband: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const tooltip = state.ui.tooltip
  const { dataKey, utcOffset, ...rest } = tooltip
  const groupData = getRowGroupedTimeseries(state)[dataKey].utcOffset[utcOffset] || {
    count: 0,
    group: []
  }

  return {
    ...rest,
    groupData
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  onDisband: hideTooltip
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Tooltip)



// WEBPACK FOOTER //
// ./src/components/Tooltip.jsx