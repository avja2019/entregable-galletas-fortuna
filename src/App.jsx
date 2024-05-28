
import './App.css';
import ShowPhrase from './components/ShowPhrase';
import ShowButton from './components/ShowButton';
import arr from './utils/phrases.json';
import ramdonArr from './services/ramdonArr';
import { useState } from 'react';
import imagesArr from './utils/images.json'


function App() {

  const quite = ramdonArr(arr);
  const [ramdonPhrase, setRandonFhrase] = useState(quite)
  const photo = ramdonArr(imagesArr)
  const [image, setImage] = useState(photo)

  const appStyles = {
    backgroundImage: `url(../fortuna-2/fondo${image}.png)`
  }

  return (
    <div className='app' style={appStyles}>
      <h1 className='app__title'>Galletas de la fortuna</h1>
      <ShowButton
        setRandonFhrase = {setRandonFhrase}
        setImage = {setImage}
      />
      <ShowPhrase
       ramdonPhrase = {ramdonPhrase}
      />
    </div>
  )
}

export default App
