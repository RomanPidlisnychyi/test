import { createAction } from '@reduxjs/toolkit';

const setItems = createAction('SET_ITEMS');
const setPagesIncrement = createAction('SET_PAGES_INCREMENT');
const setPagesDecrement = createAction('SET_PAGES_DECREMENT');
const setPages = createAction('SET_PAGES');
const setPerPage = createAction('SET_PAR_PAGE');
const setFilter = createAction('SET_FILTER');

export default {
  setItems,
  setPagesIncrement,
  setPagesDecrement,
  setPages,
  setPerPage,
  setFilter,
};
