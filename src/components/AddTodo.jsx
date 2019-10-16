import React, { useRef } from 'react'
import PropTypes from 'prop-types';

const AddTodo = ({ onAddClick }) => {
  
  const inputRef = useRef();

  const handleClick = (e) => {
    onAddClick(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>등록</button>
    </div>
  )
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default AddTodo;