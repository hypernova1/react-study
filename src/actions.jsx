export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const addTodo = (text) => {
  return { type: ADD_TODO, text }
};

export const completeTodo = (index) => {
  return { type: COMPLETE_TODO, index }
};

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
};