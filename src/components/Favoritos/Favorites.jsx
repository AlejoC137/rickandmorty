import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card.jsx';
import style from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions.js';
import { useState } from 'react';


 function Favorites(props) {
// console.log(props)
  
const [ aux, setAux] = useState(false)

const dispatch = useDispatch()

const handleOrder = (event) => {
    dispatch(orderCards(event.target.value)),
    aux ? setAux(false) : setAux(true)
}

const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
}


   return <div className={style.Cards}>
     <div>
            <select 
            name='order'
            onChange={handleOrder}
            >
                <option value='A'>Ascendente</option>
                <option value='D'>Desendente</option>
            </select>

            
            <select 
            name='filter'
            onChange={handleFilter}
            >
                <option value='All'>Todos</option>
                <option value='Male'>Masculino</option>
                <option value='Female'>Femenino</option>
                <option value='Genderles'>Sin Genero</option>
                <option value='unknown'>Desconocido </option>
            </select>

     </div>


{
props.myFavorites.map(
   (item,index) => 
   <div   key={props.myFavorites[index].id}  > 
   <Card 

   name={props.myFavorites[index].name}
   status={props.myFavorites[index].status}
   species={props.myFavorites[index].species}
   gender={props.myFavorites[index].gender}
   origin={props.myFavorites[index].origin.name}
   image={props.myFavorites[index].image}
   // onClose={props.character[index].onClose}
   onClose={props.onClose}
   onClick={() => window.alert('Emulamos que hace favorito')}
   id={props.myFavorites[index].id}
/>
 </div>
)}





</div>;
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps,null )(Favorites)