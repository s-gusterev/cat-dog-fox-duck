import React from 'react';
import './ButtonNext.css';

function ButtonNext(props) {
  return (
    <button type='button' className='button-next'>
      {props.text}
    </button>
  );
}

export default ButtonNext;
