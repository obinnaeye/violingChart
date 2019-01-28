import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked)
  }

  return (
    <input
      type="checkbox"
      checked={value}
      onChange={handleChange}
    />
  )
}

CheckBox.defaultProps = {
  onChange: () => {},
  value: false
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool
}

export default CheckBox



// WEBPACK FOOTER //
// ./src/components/CheckBox.jsx