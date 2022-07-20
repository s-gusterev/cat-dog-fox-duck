import React from 'react';
import './ButtonCopy.css';
import { MdOutlineCopyAll } from 'react-icons/md';

function ButtonCopy() {
  return (
    <button type='button' className='button-copy'>
      <MdOutlineCopyAll />
    </button>
  );
}

export default ButtonCopy;
