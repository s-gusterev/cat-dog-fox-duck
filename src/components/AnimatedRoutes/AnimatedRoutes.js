import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import List from '../List/List';
import Content from '../Content/Content';
import dog from '../../images/dog.jpg';
import cat from '../../images/cat.jpg';
import fox from '../../images/fox.jpg';
import duck from '../../images/duck.jpg';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<List />}></Route>
        <Route path='/dog' element={<Content img={dog} text='Гав' />}></Route>
        <Route path='/cat' element={<Content img={cat} text='Кусь' />}></Route>
        <Route path='/duck' element={<Content img={duck} text='Кря' />}></Route>
        <Route path='/fox' element={<Content img={fox} text='Тяв' />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
