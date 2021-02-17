import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        {routes.map(route => {
          if (route.label === 'CharacterDetal') {
            return false;
          }
          return (
            <li key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
