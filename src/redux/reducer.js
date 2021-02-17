import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './actions';

const items = createReducer([], {
  [actions.setItems]: (_, { payload }) => payload,
});

const page = createReducer(1, {
  [actions.setPagesIncrement]: (state, { payload }) => state + 1,
  [actions.setPagesDecrement]: (state, { payload }) => state - 1,
});

const pages = createReducer(null, {
  [actions.setPages]: (_, { payload }) => payload,
});

const perPage = createReducer(null, {
  [actions.setPerPage]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [actions.setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  page,
  pages,
  perPage,
  filter,
});
