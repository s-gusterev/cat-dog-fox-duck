import React from 'react';
import Item from '../Item/Item';
import './List.css';
import { motion } from 'framer-motion';

import { list } from '../../utils/constans';

function List() {
  return (
    <motion.ul
      className='list'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0 },
        display: 'none',
      }}
    >
      {list.map((item, index) => (
        <Item link={item.url} name={item.name} key={index} />
      ))}
    </motion.ul>
  );
}

export default List;
