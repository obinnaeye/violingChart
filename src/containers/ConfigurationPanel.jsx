import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FormGroup, ToggleButtonGroup } from 'react-bootstrap'

// import DeltaSelect from '../components/DeltaSelect'
import Select from '../components/Select'
import CheckBox from '../components/CheckBox'

import getRowAndColumnDelta from '../selectors/getRowAndColumnDelta'

import '../stylesheets/src/stylesheets/configuration-panel.scss'

import { setDelta, setGroupingMethod, setPlotMethod, setShowTimeZones } from '../actions/uiActions'
import { changeDataFile } from '../actions/dataFileActions'

import {
  GROUPING_METHODS,
  PLOT_METHODS,
  DATA_FILES
} from '../constants/configuration-constants'

const ConfigurationPanel = ({ delta, setDelta, groupingMethod, setGroupingMethod, plotMethod, setPlotMethod, dataFile, changeDataFile, showTimeZones, setShowTimeZones }) => (
  <div id="configuration-panel">
    <FormGroup>
      {/* <DeltaSelect
        delta={delta}
        onSelect={setDelta}
      /> */}
    </FormGroup>
    <FormGroup>
      <Select
        value={groupingMethod}
        options={GROUPING_METHODS}
        onSelect={setGroupingMethod}
      />
    </FormGroup>
    <FormGroup>
      <Select
        value={plotMethod}
        options={PLOT_METHODS}
        onSelect={setPlotMethod}
      />
    </FormGroup>
    <FormGroup>
      <Select
        value={dataFile}
        options={DATA_FILES}
        onSelect={changeDataFile}
      />
    </FormGroup>
    <ToggleButtonGroup type="checkbox">
      <label>Show time zones: </label>
      <CheckBox
        value={showTimeZones}
        onChange={setShowTimeZones}
      />
    </ToggleButtonGroup>
  </div>
)

ConfigurationPanel.defaultProps = {
}

ConfigurationPanel.propTypes = {
}

const mapStateToProps = (state) => {
  const delta = getRowAndColumnDelta(state)
  const { ui, dataFile } = state
  const { groupingMethod, plotMethod, showTimeZones } = ui

  return {
    delta,
    groupingMethod,
    plotMethod,
    dataFile,
    showTimeZones
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setDelta,
  setGroupingMethod,
  setPlotMethod,
  setShowTimeZones,
  changeDataFile
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationPanel)



// WEBPACK FOOTER //
// ./src/containers/ConfigurationPanel.jsx