import React from 'react';
import Item from '../Item/Item';
import './List.css';

import { list } from '../../utils/constans';

function List() {
  return (
    <ul className='list'>
      {list.map((item, index) => (
        <Item link={item.url} name={item.name} key={index} />
      ))}
    </ul>
  );
}

export default List;
