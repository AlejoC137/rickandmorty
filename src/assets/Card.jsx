import React from "react";
import style from '../styles/Card.module.css'

export default function Card(props) {
   return (
      <div className={style.card}>
      <div className={style.container}>
       <br/>
         <img className={style.ima} src={props.image} alt='' />
         <div className={style.overlay}>
         <h2>{props.name}</h2>
          </div>
       </div>
         <button>🫀</button>
         <button onClick={props.onClose}>❌</button> 
       <h3>{props.status} - {props.species} - {props.gender}</h3>
<h3>{props.origin}</h3>
       <br/>
       </div>
   );

}

{/* 
*/}