import React from 'react';
import './ButtonCopy.css';
import { MdOutlineCopyAll } from 'react-icons/md';

function ButtonCopy(props) {
  return (
    <button
      type='button'
      className='button-copy'
      onClick={props.clickButtonCopy}
    >
      <MdOutlineCopyAll />
    </button>
  );
}

export default ButtonCopy;
