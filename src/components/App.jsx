import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Cards from './Cards/Cards.jsx';
// import characters from '../data/data.js';
import Navigation from './Navigation/Navigation.jsx';
import { number } from 'mathjs';



function App() {
   
const [ characters , setCharacters ] = useState([]);


const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

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
         <Navigation onSearch={onSearch} />
         <Cards 
         characters={characters}
         onClose={onClose}
         />
      </div>
   );}

export default App;
