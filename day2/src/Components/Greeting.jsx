import React from 'react'
import styles from './Greeting.module.css';


export default function Greeting(){
    console.log(styles)
    return <>
    <h1>Greeting ,heloo</h1>
    <h3 className={styles.App}>hola</h3>
    </>
  }
  
