import React from 'react';
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import styles from './Loader.module.css'



export const Loader = () => {

  return (
    <div className={styles.loader}>

      <Spinner size={30} color={'#1652f0'} speed={.5} />

    </div >


  )
}
