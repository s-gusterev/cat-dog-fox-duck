import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = React.forwardRef((props, ref) => {
  return (
    <li className="item">
      <Link className="item__link" to={props.link} ref={ref}>
        {props.name}
      </Link>
    </li>
  );
});

export default Item;
