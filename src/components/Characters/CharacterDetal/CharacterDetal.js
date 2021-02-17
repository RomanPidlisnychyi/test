import React, { useEffect, useState } from 'react';
import { operations } from '../../../redux';
import styles from './CharacterDetal.module.css';

export default function CharacterDetal({ props }) {
  const id = props.match.params.id;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    operations.getCharacterById(id).then(data => setCharacter(data));
  }, []);

  return character ? (
    <div>
      <img src={character.image} alt="" />
    </div>
  ) : (
    <h1>We have enithing about this character</h1>
  );
}
