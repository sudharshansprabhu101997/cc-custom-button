import React from 'react'
import PropTypes from 'prop-types'
import './button.module.css'

export function Button(props) {
  const { className, disabled, label, type } = props
  return (
    <button
      className={`btn ${className}`}
      type={type === 'submit' ? 'submit' : 'submit'}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}

Button.defaultProps = {
  className: 'btn',
  disabled: false,
  type: 'button'
}
