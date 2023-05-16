import './styles/App.css';
import Cards from './assets/Cards.jsx';
import SearchBar from './assets/SearchBar.jsx';
import characters from './data/data.js';
import Navigation from './assets/Navigation';

function App() {
   return (
      <div className='App'>
      <br/>
      <Navigation />
      <br/>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <br/>
      <Cards characters={characters} />
      </div>
   );}

export default App;
