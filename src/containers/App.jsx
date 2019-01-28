import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchTimeseries as unboundFetchTimeseries } from '../actions/timeseriesActions'

import HeatMapContainer from './HeatMapContainer'
import ConfigurationPanel from './ConfigurationPanel'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import '../stylesheets/src/stylesheets/app.scss'
import Tooltip from '../components/ToolTip'

class App extends React.Component {
  componentDidMount() {
    const { fetchTimeseries } = this.props
    fetchTimeseries()
  }

  render() {
    const { loading, tooltip } = this.props

    let content
    if (loading) {
      content = <LoadingSpinner />
    } else {
      content = (
        <div>
          <ConfigurationPanel />
          <HeatMapContainer />
        </div>
      )
    }

    return (
      <div id="app">
        {content}
        {tooltip && <Tooltip />}
      </div>
    )
  }
}

App.defaultProps = {
}

App.propTypes = {
  fetchTimeseries: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  const { ui } = state
  const { loading, tooltip } = ui

  return {
    loading,
    tooltip
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTimeseries: unboundFetchTimeseries
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
