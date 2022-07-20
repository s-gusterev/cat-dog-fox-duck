import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import List from '../List/List';
import Content from '../Content/Content';
// import dog from '../../images/dog.jpg';
// import cat from '../../images/cat.jpg';
// import fox from '../../images/fox.jpg';
// import duck from '../../images/duck.jpg';
const { AnimatePresence } = require('framer-motion');
//import { AnimatePresence } from 'framer-motion/dist/es/index';

function AnimatedRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/cat-dog-fox-duck' element={<List />}></Route>
        <Route
          path='/cat-dog-fox-duck/dog'
          element={
            <Content
              img={props.img}
              text='Гав'
              clickButtonNext={props.clickButtonNext}
            />
          }
        ></Route>
        <Route
          path='/cat-dog-fox-duck/cat'
          element={
            <Content
              img={props.img}
              text='Кусь'
              clickButtonNext={props.clickButtonNext}
            />
          }
        ></Route>
        <Route
          path='/cat-dog-fox-duck/duck'
          element={
            <Content
              img={props.img}
              text='Кря'
              clickButtonNext={props.clickButtonNext}
            />
          }
        ></Route>
        <Route
          path='/cat-dog-fox-duck/fox'
          element={
            <Content
              img={props.img}
              text='Тяв'
              clickButtonNext={props.clickButtonNext}
            />
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
