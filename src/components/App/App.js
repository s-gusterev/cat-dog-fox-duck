import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';

import { apiCat, apiDog, apiFox } from '../../utils/api';

function App() {
  const [image, setImage] = useState('');
  let location = useLocation();

  useEffect(() => {
    getPicture();
    if (location.pathname === '/cat-dog-fox-duck/') {
      return setImage('');
    }

    return () => {
      setImage('');
    };
  }, [location]);

  console.log(image);

  function getPicture() {
    if (location.pathname === '/cat-dog-fox-duck/cat') {
      apiCat.getImage().then((res) => {
        console.log('qqqq');
        return setImage(res.file);
      });
    }

    if (location.pathname === '/cat-dog-fox-duck/dog') {
      apiDog.getImage().then((res) => {
        console.log('qqqq');
        return setImage(res.message);
      });
    }

    if (location.pathname === '/cat-dog-fox-duck/fox') {
      apiFox.getImage().then((res) => {
        console.log('qqqq');
        return setImage(res.image);
      });
    }
  }

  return <Main img={image} clickButtonNext={getPicture} />;
}

export default App;
