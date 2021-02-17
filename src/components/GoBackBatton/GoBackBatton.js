import React from 'react';

export default function GoBackBatton({ props }) {
  const state = props.location.state;
  const history = props.history;

  const handlerGoBack = () => {
    if (state && state.from) {
      console.log('1');
      return history.push(state.from);
    }

    history.push('/characters');
  };
  return (
    <button type="button" onClick={handlerGoBack}>
      Go back
    </button>
  );
}
