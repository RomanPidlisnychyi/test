import React from 'react';
import GoBackBatton from '../components/GoBackBatton/GoBackBatton';
import { CharacterDetal } from '../components/Characters';

export default function CharacterDetalView(props) {
  return (
    <>
      <GoBackBatton props={props} />
      <CharacterDetal props={props} />
    </>
  );
}
