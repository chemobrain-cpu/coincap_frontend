import React from 'react';
import styles from '../Home.module.css';
import { Reoccuring } from './Reoccuring';
import { Balance } from './Balance';
import { MyAssets } from './MyAssets';



export const AssetComponent = () => {

  return (
    <div className={styles.assetScreen}>

      <div className={styles.timeline}>
        <Balance/>

        <MyAssets/>

        <div className={styles.reoccuringMobile}>
          <Reoccuring />
        </div>

      </div>



      <div className={styles.rightBars}>


      <div className={styles.reoccuringDesktop}>
          <Reoccuring />
        </div>

      </div>

    </div >


  )
}
