import React from "react";
import style from './Card.module.css'

export default function Card(props) {
 
   return (
      <div className={style.container}>
        
            <img className={style.ima} src={props.image} alt='' />    
         
  
            <h2>{props.name}</h2>
            <button onClick={ () => props.onClose(props.id)}>❌</button> 
            <button onClick={props.onClick}>🫀</button>
            <button onClick={props.onClick}>🔫</button>
            <h3>{props.status} - {props.species} - {props.gender}</h3>
            <h3>{props.origin}</h3>
         <br></br>
        
         </div>
   );

}

{/* 
*/}