import React from "react";
import '../styles/Card.css'

export default function Card(props) {
   return (
      <div>
         <img src={props.image} alt='' />
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <button onClick={props.onClose}>X</button>
      </div>
   );
}

