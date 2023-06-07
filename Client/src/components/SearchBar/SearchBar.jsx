import { useState } from "react";
import styles from './SearchBar.module.css'


export default function SearchBar(props) {

const [ id , setId ] = useState( " " );

const handleChange = event => {
   const value = event.target.value;
   setId( value );
   console.log('id: ' , id )
}

   return (
      <div>
         <input 
         type='text'
         name='search'
         id='search' 
         onChange={handleChange}
         />
         <button className={styles.SearchBar } onClick={() => props.onSearch(id)} >Agregar</button>
      </div>
   );
}
