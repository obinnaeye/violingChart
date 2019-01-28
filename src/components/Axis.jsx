import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { GRID_SIZE, FONT_SIZE, SCALE } from '../constants/configuration'

import '../stylesheets/src/stylesheets/axis.scss'

class Axis extends React.Component {
  constructor(props) {
    super()

    const { orientation } = props

    this.vertical = (orientation === 'left' || orientation === 'right')
    this.horizontal = (orientation === 'top' || orientation === 'bottom')
  }

  transform(position, even) {
    if (this.vertical) {
      return `translate(0, ${position + 0.5})`
    }

    return `translate(${position + 0.5}, ${even ? -12 * SCALE : 0})`
  }

  position(number) {
    const { scale } = this.props

    return scale(number)
  }

  last(tick) {
    const { scale } = this.props

    const domain = scale.domain()
    const domainEnd = domain[domain.length - 1]
    return domainEnd <= tick
  }

  renderTick(tick, index) {
    const { orientation, format, gridlines, toggle } = this.props
    const halfGridSize = GRID_SIZE / 2.0
    const even = toggle && index % 2 === 0

    let dy
    if (orientation === 'top') {
      dy = '0em'
    } else if (orientation === 'bottom') {
      dy = '2.0em'
    } else {
      dy = '0.32em'
    }

    const yOffset = even ? 12 * SCALE : 0

    const momentTick = moment(tick)

    return (
      <g
        className="tick"
        transform={this.transform(this.position(tick), even)}
      >
        <line
          stroke="black"
          y1={this.horizontal ? yOffset : null}
          y2={this.horizontal ? (orientation === 'top' ? -4 : 4) : null}
          x2={this.vertical ? -6 : null}
        />
        <text
          fill="black"
          y={this.horizontal ? -7 : null}
          x={this.vertical ? -9 : null}
          dy={dy}
          fontSize={FONT_SIZE}
        >
          {`${momentTick.format(format)}`}
        </text>
        {gridlines !== null &&
          <line
            stroke="rgba(0, 0, 0, 0.2)"
            y1={this.horizontal ? yOffset : null}
            y2={this.horizontal ? gridlines + halfGridSize + yOffset + 7 : null}
            x2={this.vertical ? gridlines + halfGridSize + 7 : null}
          />
        }
        {gridlines !== null && this.horizontal && momentTick.weekday() >= 5 && !this.last(tick) &&
          <rect
            fill="rgba(0, 0, 0, 0.2)"
            y={yOffset}
            height={gridlines - 7}
            width={GRID_SIZE}
          />
        }
      </g>

    )
  }

  render() {
    const {
      x,
      y,
      title,
      onClick,
      color,
      height,
      scale,
      interval,
      orientation,
      clamp
    } = this.props

    const range = scale.range()
    const range0 = +range[0] + 0.5
    const range1 = +range[range.length - 1] + 0.5

    let translate
    if (x > 0 || y > 0) {
      translate = `translate(${x}, ${y})`
    }

    let pathD
    if (this.vertical) {
      pathD = `M${-6},${range0}H0.5V${range1}H{-6}`
    } else {
      pathD = `M${range0},${6}V0.5H${range1}V${6}`
    }

    let textAnchor
    if (orientation === 'right') {
      textAnchor = 'start'
    } else if (orientation === 'left') {
      textAnchor = 'end'
    } else {
      textAnchor = 'middle'
    }

    let ticks = []
    if (clamp) {
      ticks.push(scale.domain()[0])
    }
    ticks.push(...scale.ticks(interval, 1))

    const renderTicks = () => ticks.map((tick, index) => (
      this.renderTick(tick, index)
    ))
    const width = 30 * SCALE
    const extraHeight = title ? 10 * SCALE : 0

    return (
      <g transform={translate} className="axis">
        {color &&
          <rect
            y={-extraHeight}
            x={-width}
            fill={color}
            width={width}
            height={height + GRID_SIZE + extraHeight}
          />
        }
        {title &&
          <text
            fill="black"
            x={-width}
            fontSize={FONT_SIZE}
          >
            {title}
          </text>
        }
        <g
          fill="none"
          textAnchor={textAnchor}
        >
          <path
            className="domain"
            stroke="black"
            d={pathD}
          />
          {renderTicks()}
        </g>
        <g
          ref={node => (this.node = node)}
        />
        {onClick &&
          <rect
            className="background"
            y={-extraHeight}
            x={-width}
            fill="rgba(0, 0, 0, 0)"
            width={width}
            height={height + GRID_SIZE + extraHeight}
            onClick={onClick}
          />
        }
      </g>
    )
  }
}

Axis.defaultProps = {
  x: 0,
  y: 0,
  title: null,
  onClick: null,
  color: null,
  height: null,
  gridlines: null,
  toggle: false,
  clamp: false
}

Axis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  height: PropTypes.number,
  scale: PropTypes.func.isRequired,
  orientation: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  interval: PropTypes.func.isRequired,
  format: PropTypes.string.isRequired,
  gridlines: PropTypes.number,
  toggle: PropTypes.boolean,
  clamp: PropTypes.boolean
}

export default Axis



// WEBPACK FOOTER //
// ./src/components/Axis.jsx