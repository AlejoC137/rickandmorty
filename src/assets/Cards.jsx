import Card from './Card.jsx';



export default function Cards(props) {
   return <div className="grid-container">
     
   
{
props.characters.map(
   (item,index) => 
   <div   key={props.characters[index].id}  > 
   <Card  className="grid-item"

     name={props.characters[index].name}
   status={props.characters[index].status}
   species={props.characters[index].species}
   gender={props.characters[index].gender}
   origin={props.characters[index].origin.name}
   image={props.characters[index].image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
/>
 </div>
)}





</div>;
}
