import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from './Detail.module.css'


function Detail (props){

    const [ character , setCharacter ] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return (
        <div className={style.div}>\
         <br></br>
           <h1>Nombre: {character.name}</h1> 
           <h1>Estado: {character.status}</h1> 
           <h1>Especie: {character.species}</h1> 
           <h1>Genero: {character.gender}</h1> 
           <h1>Lugar: {character.location && character.location.name}</h1> 
           <h1>Origen: {character.origin && character.origin.name}</h1> 
           <img className={style.detIMG} src={character.image} alt="" />
           {/* <br></br> */}
        </div>
    );
    
};


export default Detail;