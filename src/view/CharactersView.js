import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, operations } from '../redux';
import { CharactersList } from '../components/Characters';
import ButtonControl from '../components/ButtonControl/ButtonControl';

export default function Characters(props) {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectors.getPage);

  useEffect(() => {
    dispatch(operations.getCharacters());
  }, [dispatch, pageNumber]);

  return (
    <>
      <CharactersList props={props} />
      <ButtonControl />
    </>
  );
}
