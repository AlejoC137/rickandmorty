import axios from 'axios';
import { useState } from 'react';
import { number } from 'mathjs';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Cards from './Cards/Cards.jsx';
// import All from '../data/data.js';
import Navigation from './Navigation/Navigation.jsx';
import About from './About/About';
import Detail from './Detail/Detail';
import All from './All/All.jsx'
import Login from './Login/Login.jsx'
import videoSrc from '../assets/video/Rick-and-Morty-x-Run-The-Jewels-Oh-Mama.mp4';


function App() {
   
const [ characters , setCharacters ] = useState([]);


const onSearch = id  => {
axios(`https://rickandmortyapi.com/api/character/${id}`)
.then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}


const onClose = id => {
 setCharacters(characters.filter( char => char.id !== Number(id) ) )
}


   return (

   <div className='App'>
      <video autoPlay className={styles.vid} src={videoSrc} controls   />
      <Navigation onSearch={onSearch} />
      <Routes>
         <Route path='/About' element={<About /> }/>
         <Route path='/' element={<Cards characters={characters}  onClose={onClose}  /> }/>
         <Route path='/detail/:id' element={<Detail /> }/>
         <Route path='/All' element={<All all={'https://rickandmortyapi.com/api/character'} /> }/>
         <Route path='/login' element={<Login /> }/>
      </Routes>     
   </div>


   );}

export default App;
