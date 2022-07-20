import React from 'react';
import Item from '../Item/Item';
import './List.css';
import { motion } from 'framer-motion';
import { list } from '../../utils/constans';

function List() {
  const MotionItem = motion(Item);
  return (
    <motion.div
      className='main__container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0 },
        display: 'none',
      }}
    >
      <ul className='list'>
        {list.map((item, i) => (
          <MotionItem
            link={item.url}
            name={item.name}
            key={i}
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0%' }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </ul>
    </motion.div>
  );
}

export default List;
