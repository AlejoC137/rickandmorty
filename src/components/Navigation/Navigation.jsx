import React from 'react';
import styles from './Navigation.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';



function Navigation(props) {
  return (
    <div>

 
        <SearchBar onSearch={props.onSearch}  />
      
 
    </div>
  );
}

export default Navigation;