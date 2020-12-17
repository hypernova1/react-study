import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const App = (props) => {
  const { dispatch, visibleTodos, visibilityFilter } = props;
  return (
    <div>
      <AddTodo
        onAddClick={text => dispatch(action.addTodo(text))}
      />
      <TodoList
        todos={visibleTodos}
        onTodoClick={index => dispatch(action.completeTodo(index))}
      />
      <Footer
        filter={visibilityFilter}
        onFilterChange={nextFilter => dispatch(action.setVisibilityFilter(nextFilter))}
      />
    </div>
  );
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

const selectTodos = (todos, filter) => {
  switch(filter) {
    case action.VisibilityFilters.SHOW_ALL:
      return todos;
    case action.VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case action.VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

const select = (state) => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);
