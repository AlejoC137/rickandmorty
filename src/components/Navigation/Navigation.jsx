import React from 'react';
import styles from './Navigation.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';


function Navigation(props) {
  return (
    <div 
    className={styles.navDiv}
    > 
      <button className={styles.button} >
        <Link to='/about'> About </Link>
      </button>
      <button className={styles.button}>
        <Link to='/login'> Login </Link>
      </button>
      <button className={styles.button}>
        <Link to='/'> Home </Link>
      </button>
      <button className={styles.button}>
        <Link to='/all'> All </Link>
      </button>
      <SearchBar  onSearch={props.onSearch}  />
    </div>
  );
}

export default Navigation;