import './styles/App.css';
import Cards from './assets/Cards.jsx';
import SearchBar from './assets/SearchBar.jsx';
import characters from './data/data.js';


function App() {
   return (
      <div className='App'>
         <nav className='navbar'>
            <div>
               <a href='/'>Rick and Morty App</a>
            </div>
         </nav>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );}

export default App;
