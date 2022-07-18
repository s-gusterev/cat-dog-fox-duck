import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item(props) {
  return (
    <li className='item'>
      <Link className='item__link' to={props.link}>
        {props.name}
      </Link>
    </li>
  );
}

export default Item;
