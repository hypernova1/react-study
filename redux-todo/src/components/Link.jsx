import React from 'react'
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  return (
    <span
      style={{ cursor:  active ? 'pointer' : 'none' }}
      onClick={onClick}
    >{children}</span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link