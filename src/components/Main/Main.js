import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css';

// import Picture from '../Picture/Picture';

import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';

function Main() {
  return (
    <main className='main'>
      <Router>
        <AnimatedRoutes />
      </Router>
    </main>
  );
}

export default Main;
