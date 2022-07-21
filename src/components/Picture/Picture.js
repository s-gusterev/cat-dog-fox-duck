import React from 'react';
import './Picture.css';

function Picture(props) {
  return (
    <div className='picture'>
      <img className='picture__item' src={props.img} alt='' loading='lazy' />
    </div>
  );
}

export default Picture;
