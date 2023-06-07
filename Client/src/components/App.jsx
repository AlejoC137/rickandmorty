import axios from 'axios';
import { useEffect, useState } from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import Cards from './Cards/Cards.jsx';
// import All from '../data/data.js';
import Navigation from './Navigation/Navigation.jsx';
import About from './About/About';
import Detail from './Detail/Detail';
// import All from './All/All.jsx' <----- uncoment when all bugs fixed
import Login from './Login/Login.jsx'
import videoSrc from '../assets/video/Rick-and-Morty-x-Run-The-Jewels-Oh-Mama.mp4';
import Favorites from './Favoritos/Favorites';


function App() {
   const navigate = useNavigate();  

const [ access , setAccess ] = useState(false);

// const EMAIL = 'dapatinoa@unal.edu.co'
// const PASSWORD = '1035869114'
// const PASSWORD = '1'

useEffect(() => {
   !access && navigate('/');
}, [access]);


function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
   });
}


const [ characters , setCharacters ] = useState([]);

const onSearch = id  => {
axios(`http://localhost:3001/rickandmorty/character/${id}`)
.then(( data) => {
      if (data.data.name) {
         // console.log(data.data)
         setCharacters((oldChars) => [...oldChars, data.data]);
         // console.log(characters)
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}


const onClose = id => {
 setCharacters(characters.filter( char => char.id !== Number(id) ) )
}

const location = useLocation();

   return (

   <div className='App'>
      <video 
         // autoPlay 
         className={styles.vid} 
         src={videoSrc}   
         controls   />
       {location.pathname !== '/' && <Navigation onSearch={onSearch} />}
      <Routes>
         <Route path='/About' element={<About /> }/>
         <Route path='/Play' element={<Cards characters={characters}  onClose={onClose}  /> }/>
         <Route path='/detail/:id' element={<Detail /> }/>
         {/* <Route path='/All' element={<All all={'https://rickandmortyapi.com/api/character'} /> }/> */}
         <Route path='/' element={<Login login={login} /> }/>
         <Route path='/favorites' element={<Favorites onClose={onClose} />}/>
         {/* <Route path='/home' element={<Home /> }/> */}
      </Routes>     
   </div>


   );}

export default App;

