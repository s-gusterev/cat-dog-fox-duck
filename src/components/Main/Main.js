import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css';

// import Picture from '../Picture/Picture';

import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';

function Main(props) {
  return (
    <main className="main">
      {/* <Router> */}
      <AnimatedRoutes
        img={props.img}
        clickButtonNext={props.clickButtonNext}
        isCopy={props.isCopy}
        clickButtonCopy={props.clickButtonCopy}
        isLoading={props.isLoading}
      />
      {/* </Router> */}
    </main>
  );
}

export default Main;
