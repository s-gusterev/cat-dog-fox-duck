import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dog from '../../images/dog.jpg';
import cat from '../../images/cat.jpg';
import fox from '../../images/fox.jpg';

import './App.css';
import Main from '../Main/Main';

import { apiCat, apiDog, apiFox } from '../../utils/api';

function App() {
  const [image, setImage] = useState('');
  const [isCopy, setIsCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let location = useLocation();

  useEffect(() => {
    getPicture();
    if (location.pathname === '/') {
      document.title = 'Фотки  котиков, собачек и лисичек';
      return setImage('');
    }
    if (location.pathname === '/cat') {
      document.title = 'Фотографии котов, котиков и котят';
    }
    if (location.pathname === '/dog') {
      document.title = 'Фотографии   собак, песиков и щенят';
    }
    if (location.pathname === '/fox') {
      document.title = 'Фотографии  лис, лисичек и лисят';
    }
    return () => {
      setImage('');
    };
  }, [location]);

  function getPicture() {
    setIsLoading(true);
    if (location.pathname === '/cat') {
      apiCat
        .getImage()
        .then((res) => {
          setImage(res[0].url);
        })
        .catch(() => {
          setImage(cat);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (location.pathname === '/dog') {
      apiDog
        .getImage()
        .then((res) => {
          setImage(res.message);
        })
        .catch(() => {
          setImage(dog);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (location.pathname === '/fox') {
      apiFox
        .getImage()
        .then((res) => {
          setImage(res.image);
        })
        .catch(() => {
          setImage(fox);
        })
        .finally(() => {
          setIsLoading(false);
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
      isLoading={isLoading}
    />
  );
}

export default App;
