import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from '../../redux';
import styles from './ButtonControl.module.css';

export default function ButtonControl() {
  const dispatch = useDispatch();

  const pageNumber = useSelector(selectors.getPage);
  const pagesCount = useSelector(selectors.getPages);
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => dispatch(actions.setPagesDecrement())}
        disabled={pageNumber === 1}
      >
        Prev
      </button>
      <span className={styles.pageCount}>{pageNumber}</span>
      <button
        type="button"
        onClick={() => dispatch(actions.setPagesIncrement())}
        disabled={pageNumber === pagesCount}
      >
        Next
      </button>
    </div>
  );
}
