import React from 'react'
import PropTypes from 'prop-types';

const Footer = (props) => {
  const renderFilter = (filter, name) => {
    if(filter === props.filter) {
      return name;
    }

    return (
      <button
        onClick={e => {
          e.preventDefault();
          props.onFilterChange(filter)
        }}
        >{name}</button>
    )
  }
  
  return (
    <p>
      Show: {' '}
      {renderFilter('SHOW_ALL', 'ALL')}
      {' '}
      {renderFilter('SHOW_COMPLETED', 'Completed')}
      {' '}
      {renderFilter('SHOW_ACTIVE', 'Active')}
    </p>
  )

}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

export default Footer;