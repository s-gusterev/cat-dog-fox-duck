import React from 'react';
import './ButtonNext.css';

function ButtonNext(props) {
  return (
    <button
      type='button'
      className='button-next'
      onClick={props.clickButtonNext}
    >
      {props.text}
    </button>
  );
}

export default ButtonNext;
