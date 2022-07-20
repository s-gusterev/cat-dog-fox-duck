import React from 'react';
import Picture from '../Picture/Picture';
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonCopy from '../ButtonCopy/ButtonCopy';
import Notification from '../Notification/Notification';
//import { Route, Routes, Router } from 'react-router-dom';
import { motion } from 'framer-motion';

function Content(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0 },
        display: 'none',
      }}
    >
      <ButtonBack />
      <Picture img={props.img}></Picture>
      <ButtonNext text={props.text} />
      <ButtonCopy />
      <Notification />
    </motion.div>
  );
}

export default Content;
