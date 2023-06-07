import Card from '../Card/Card.jsx';
import style from './Cards.module.css'


export default function Cards(props) {

  
   return <div className={style.Cards}>
     
{
props.characters.map(
   (item,index) => 
   <div   key={props.characters[index].id}  > 
   <Card 

   name={props.characters[index].name}
   status={props.characters[index].status}
   species={props.characters[index].species}
   gender={props.characters[index].gender}
   origin={props.characters[index].origin.name}
   image={props.characters[index].image}
   // onClose={props.character[index].onClose}
   onClose={props.onClose}
   onClick={() => window.alert('Emulamos que hace favorito')}
   id={props.characters[index].id}
/>
 </div>
)}





</div>;
}
