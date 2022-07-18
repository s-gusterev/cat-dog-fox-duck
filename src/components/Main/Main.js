import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Main.css';
import List from '../List/List';
import Content from '../Content/Content';
// import Picture from '../Picture/Picture';
import dog from '../../images/dog.jpg';
import cat from '../../images/cat.jpg';
import fox from '../../images/fox.jpg';
import duck from '../../images/duck.jpg';

function Main() {
  return (
    <main className='main'>
      <Router>
        <Routes>
          <Route exact path='/' element={<List />}></Route>
          <Route path='/dog' element={<Content img={dog} />}></Route>
          <Route path='/cat' element={<Content img={cat} />}></Route>
          <Route path='/duck' element={<Content img={duck} />}></Route>
          <Route path='/fox' element={<Content img={fox} />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default Main;
