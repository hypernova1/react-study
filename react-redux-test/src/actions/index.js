import * as types from './ActionType';

export const increment = (index) => ({
  type: types.INCREMENT,
  index
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index
});

export const setColor = ({index, color}) => ({
  type: types.SET_COLOR,
  color,
  index
});

export const create = (color) => ({
  type: types.CREATE,
  color
});

export const remove = () => ({
  type: types.REMOVE
})