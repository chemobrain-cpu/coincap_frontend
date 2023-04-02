import React from 'react'
import styles from './Paybox.module.css'


export const PayBox = ()=>{
    return (
        <div className={styles.payBox}>
            <div className={styles.content}>
                <div className={styles.contentContainer}>
                    <h2>Cypto gifts</h2>
                    <p>Give crypto to your friends and family</p>

                </div>
                <div className={styles.imgContainer}>
                    <img src='../../pay.png' />

                </div>

            </div>


            <div className={styles.actionContainer}>
                <button>Recieve</button>
                <button>Send</button>

            </div>



        


    </div>)
}