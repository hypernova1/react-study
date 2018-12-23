import React from 'react';
import styled from './TodoInput.scss';
import className from 'classnames/bind';

const cx = className.bind(styled);

const TodoInput = ({value, onChange, onInsert}) => {
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      onInsert();
    }
  }
  return (
    <div className={cx('todo-input')}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
      <div className={cx('add-button')} onClick={onInsert}>추가</div>
    </div>
  );
};

export default TodoInput;