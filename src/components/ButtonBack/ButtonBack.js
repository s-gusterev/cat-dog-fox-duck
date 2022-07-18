import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonBack.css';

function ButtonBack() {
  return (
    <Link className='button-back main__button-back' to='/'>
      Назад
    </Link>
  );
}

export default ButtonBack;
