import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectors } from '../../../redux';
import styles from './CharactersList.module.css';

export default function CharactersList({ props }) {
  const items = useSelector(selectors.getItems);
  return (
    <ul className={styles.list}>
      {items.length > 0 &&
        items.map(({ id, image, name }) => {
          return (
            <li className={styles.item} key={id}>
              <Link
                to={{
                  pathname: `characters/${id}`,
                  state: { from: props.location },
                }}
              >
                <img src={image} />
                <span className={styles.title}>{name}</span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
