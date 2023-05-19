import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";
export default function Card(props) {
 
   return (
      <div className={style.container}>
        
            <img className={style.ima} src={props.image} alt='' />    
         
            <Link to={`/detail/${props.id}`} > <h2>{props.name}</h2> </Link>
            <button onClick={ () => props.onClose(props.id)}>❌</button> 
            <button onClick={props.onClick}>🫀</button>
            <button onClick={props.onClick}>🔫</button>
            <h3>{props.status} - {props.species} - {props.gender}</h3>
            <h3>{props.origin}</h3>
         <br></br>
        
         </div>
   );

}

