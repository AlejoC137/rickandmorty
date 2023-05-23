import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import style from './Favorites.module.css'


 function Favorites(props) {
console.log(props)
  
   return <div className={style.Cards}>
     


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