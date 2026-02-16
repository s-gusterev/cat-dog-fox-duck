import React from 'react';
import './Picture.css';
const { motion, AnimatePresence } = require('framer-motion');

function Picture(props) {
  return (
    <div className="picture">
      <AnimatePresence mode="wait">
        <motion.img
          className="picture__item"
          src={props.img}
          alt=""
          loading="lazy"
          key={props.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
    </div>
  );
}

export default Picture;
