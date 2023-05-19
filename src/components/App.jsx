import axios from 'axios';
import { useEffect, useState } from 'react';
import { number } from 'mathjs';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
   const navigate = useNavigate();  
const [ access , setAccess ] = useState(false);
const EMAIL = 'dapatinoa@unal.edu.co'
const PASSWORD = '1035869114'

useEffect(() => {
   !access && navigate('/');
}, [access]);


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/all');
      }
   }


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
         <Route path='/All' element={<All all={'https://rickandmortyapi.com/api/character'} /> }/>
         <Route path='/' element={<Login login={login} /> }/>
         {/* <Route path='/home' element={<Home /> }/> */}
      </Routes>     
   </div>


   );}

export default App;

