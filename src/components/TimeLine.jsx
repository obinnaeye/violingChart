import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import { MAX_COLUMN_COUNT } from '../constants/configuration'

class Timeline extends React.Component {
  constructor(props) {
    super(props)

    this.brush = d3.brushX()
      .on('brush end', this.handleBrush.bind(this))
  }

  componentDidMount() {
    const { width, zoom, maxSize } = this.props
    const ratio = maxSize / width

    this.renderBrush()

    d3.select(this.node)
      .call(this.brush.move, [
        zoom.start / ratio,
        zoom.end / ratio
      ])
  }

  componentDidUpdate() {
    this.renderBrush()
  }

  handleBrush() {
    const currentEventTime = new Date()
    if (this.lastEventTime && (currentEventTime - this.lastEventTime < 10)) return
    this.lastEventTime = new Date()
    const { onSelect, maxSize, width } = this.props
    const maxIntervalSize = Math.min(maxSize, MAX_COLUMN_COUNT)
    const selection = d3.event.selection
    const ratio = maxSize / width
    const start = Math.round(selection[0] * ratio)
    const end = Math.round(selection[1] * ratio)
    const brushInterval = end - start

    if (brushInterval > maxIntervalSize) {
      d3.select(this.node)
        .call(this.brush.move, [
          selection[0],
          selection[0] + (maxIntervalSize / ratio)
        ])
    } else {
      onSelect({
        start,
        end
      })
    }
  }

  renderBrush() {
    const { width, height } = this.props

    this.brush.extent([[0, 0], [width, height]])

    d3.select(this.node)
      .call(this.brush)
  }

  render() {
    const { x, y } = this.props

    let translate
    if (x > 0 || y > 0) {
      translate = `translate(${x}, ${y})`
    }

    return (
      <g
        transform={translate}
        ref={node => (this.node = node)}
      />
    )
  }
}

Timeline.defaultProps = {
  x: 0,
  y: 0
}

Timeline.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  zoom: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
  }).isRequired
}

export default Timeline



// WEBPACK FOOTER //
// ./src/components/Timeline.jsx