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
        <Route exact path="/" element={<List />}></Route>
        <Route
          path="/dog"
          element={
            <Content
              img={props.img}
              text="Гав"
              clickButtonNext={props.clickButtonNext}
              isCopy={props.isCopy}
              clickButtonCopy={props.clickButtonCopy}
              isLoading={props.isLoading}
            />
          }
        ></Route>
        <Route
          path="/cat"
          element={
            <Content
              img={props.img}
              text="Кусь"
              clickButtonNext={props.clickButtonNext}
              isCopy={props.isCopy}
              clickButtonCopy={props.clickButtonCopy}
              isLoading={props.isLoading}
            />
          }
        ></Route>
        <Route
          path="/fox"
          element={
            <Content
              img={props.img}
              text="Тяв"
              clickButtonNext={props.clickButtonNext}
              isCopy={props.isCopy}
              clickButtonCopy={props.clickButtonCopy}
              isLoading={props.isLoading}
            />
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
