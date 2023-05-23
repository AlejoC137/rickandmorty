import React, { useEffect, useState } from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";


 function Card(props) {

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


const [isFav, setIsFav] = useState(false)

const handleFavorite =()=>{
   if (isFav) {
      setIsFav(false)
      props.removeFav(props.id)
   } else {
      setIsFav(true);
      props.addFav(props);
   }
}

   return (
      <div className={style.container}>
        {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav:       (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)