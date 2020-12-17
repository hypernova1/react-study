import { combineReducers } from 'redux';
import * as actions  from './actions';

const { SHOW_ALL } = actions.VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default: return state;
  };
};

const todos = (state = [], action) => {
  switch(action.type) {
    case actions.ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: false
        }
      ];
    case actions.COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], { completed: true }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter, todos
});

export default todoApp;