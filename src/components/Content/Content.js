import React from 'react';
import Picture from '../Picture/Picture';
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonNext from '../ButtonNext/ButtonNext';
import ButtonCopy from '../ButtonCopy/ButtonCopy';
import Notification from '../Notification/Notification';
//import { Route, Routes, Router } from 'react-router-dom';

function Content(props) {
  return (
    <React.Fragment>
      <ButtonBack />
      <Picture img={props.img}></Picture>
      <ButtonNext />
      <ButtonCopy />
      <Notification />
    </React.Fragment>
  );
}

export default Content;
