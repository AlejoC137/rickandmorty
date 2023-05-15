import Card from './Card';



export default function Cards(props) {
   return <div className="grid-container">
     
{/* <> */}
{
props.characters.map(
   (item,index) => 
   // <div  className="grid-item" > 
   <Card   
   key={props.characters[index].id}
   name={props.characters[index].name}
   status={props.characters[index].status}
   species={props.characters[index].species}
   gender={props.characters[index].gender}
   origin={props.characters[index].origin.name}
   image={props.characters[index].image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
/>
//  </div>
)}

{/* </> */}


   {/* <Card
   key={props.characters[0].id}
   name={props.characters[0].name}
   status={props.characters[0].status}
   species={props.characters[0].species}
   gender={props.characters[0].gender}
   origin={props.characters[0].origin.name}
   image={props.characters[0].image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
/>  */}

</div>;
}
