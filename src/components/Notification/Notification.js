import React from 'react';
import './Notification.css';
const { motion } = require('framer-motion');

function Notification(props) {
  const isCopy = props.isCopy;
  return (
    isCopy && (
      <motion.div
        className={`notification`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{
          opacity: 0,
          transition: { duration: 1.5 },
        }}
      >
        Ссылка скопирована
      </motion.div>
    )
  );

  // <div className='notification notification_visible'>Ссылка скопирована</div>
}

export default Notification;
