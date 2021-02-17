import { actions } from './';
import apiURL from '../utils/apiURL';

const getCharacters = () => async (dispatch, getState) => {
  const state = getState();
  const { page } = state;
  const URL = `${apiURL}/character/?page=${page}`;
  const response = await fetch(URL);
  const data = await response.json();

  dispatch(actions.setItems(data.results));
  dispatch(actions.setPages(data.info.pages));
};

const getCharacterById = async id => {
  const URL = `${apiURL}/character/${id}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export default {
  getCharacters,
  getCharacterById,
};
