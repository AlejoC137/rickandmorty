import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';
import style from './All.module.css'

// const [ characters , setCharacters ] = useState([]);


// const allChars = id  => {
// axios(`https://rickandmortyapi.com/api/character`)
// .then(({ data }) => {
//          setCharacters((oldChars) => [...oldChars, data]);
//    });
// }


export default function Cards() {
   const [characters, setCharacters] = useState([]);
  
   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character`)
        .then(({ data }) => {
          setCharacters(data.results);
        });
    }, []);


    return (
      <div className={style.Cards}>
        {characters.map((character) => (
          <div key={character.id}>
            <Card className={style.Logcards }
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              // onClose={onClose}
              onClick={() => window.alert('Emulamos que hace favorito')}
              id={character.id}
            />
          </div>
        ))}
      </div>
    );
  }
