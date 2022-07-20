import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonBack.css';
import { RiArrowGoBackFill } from 'react-icons/ri';

function ButtonBack() {
  return (
    <Link className='button-back main__button-back' to='/cat-dog-fox-duck'>
      <RiArrowGoBackFill />
    </Link>
  );
}

export default ButtonBack;
