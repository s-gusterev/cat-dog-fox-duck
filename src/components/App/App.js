import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';

import { apiCat, apiDog, apiFox } from '../../utils/api';

function App() {
  const [image, setImage] = useState('');
  const [isCopy, setIsCopy] = useState(false);
  let location = useLocation();

  useEffect(() => {
    getPicture();
    if (location.pathname === '/') {
      return setImage('');
    }

    return () => {
      setImage('');
    };
  }, [location]);

  function getPicture() {
    if (location.pathname === '/cat') {
      apiCat.getImage().then((res) => {
        return setImage(res.file);
      });
    }

    if (location.pathname === '/dog') {
      apiDog.getImage().then((res) => {
        return setImage(res.message);
      });
    }

    if (location.pathname === '/fox') {
      apiFox.getImage().then((res) => {
        return setImage(res.image);
      });
    }
  }

  function copyLink() {
    navigator.clipboard
      .writeText(image)
      .then(() => {
        return setIsCopy(true);
      })
      .catch((err) => {
        console.log('Ошибка', err);
      });
  }

  useEffect(() => {
    if (isCopy) {
      const timeout = setTimeout(() => {
        setIsCopy(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isCopy]);

  return (
    <Main
      img={image}
      clickButtonNext={getPicture}
      isCopy={isCopy}
      clickButtonCopy={copyLink}
    />
  );
}

export default App;
