import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, value, onSelect }) => {
  const renderOptions = () => (
    options.map(optionValue => (
      <option
        key={optionValue}
        value={optionValue}
      >
        {optionValue}
      </option>
    ))
  )

  const handleChange = event => onSelect(event.target.value)

  return (
    <select
      value={value}
      onChange={handleChange}
    >
      {renderOptions()}
    </select>
  )
}

Select.defaultProps = {
  onSelect: () => {},
  options: []
}

Select.propTypes = {
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string.isRequired
}

export default Select



// WEBPACK FOOTER //
// ./src/components/Select.jsx