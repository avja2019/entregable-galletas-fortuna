import React from 'react';
import arr from '../utils/phrases.json';
import ramdonArr from '../services/ramdonArr';
import imagesArr from '../utils/images.json'

const ShowButton = ({setRandonFhrase,setImage}) => {

  console.log(typeof setRandonFhrase);

  const handleClick = () => {

    const quote = ramdonArr(arr)
    setRandonFhrase(quote);
    const photo = ramdonArr(imagesArr);
    setImage(photo);
  }

  return (
    <button onClick={handleClick} className='app__btn'>
      Probar mi suerte
    </button>
  )
}

export default ShowButton
