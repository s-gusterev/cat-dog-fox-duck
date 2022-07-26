import React from 'react';
import Item from '../Item/Item';
import './List.css';
const { motion, AnimatePresence } = require('framer-motion');
// import { motion } from 'framer-motion/dist/es/index';
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
        <AnimatePresence initial={false}>
          {list.map((item, i) => (
            <MotionItem
              link={item.url}
              name={item.name}
              key={i}
              initial={{ translateX: '100%' }}
              animate={{ translateX: '0%' }}
              exit={{ translateX: '100%' }}
              transition={{ duration: 0.3, delay: i * 0.3 }}
            />
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}

export default List;
