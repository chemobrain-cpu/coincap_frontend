import React from 'react';
import styles from './Reoccuring.module.css';



export const Reoccuring = () => {
    return (
        <div className={styles.reoccuringBuyCon}>
            <div className={styles.heading}>
                <div className={styles.headingLeft}>
                    <h1>Recurring buys</h1>
                </div>

                <div className={styles.headingRight}>
                    <p>Add new</p>

                </div>

            </div>
            <div className={styles.learnContainer}>
                <div className={styles.imgContainer}>
                    <img src='../../graphics8.png' />
                </div>

                <div className={styles.textContainer}>
                    <h3>Learn aboout recurring buys</h3>
                    <p>Invest daily or weekly or month...</p>

                </div>

                <div className={styles.iconContainer}>
                    <span className='material-icons'>
                        navigate_next

                    </span>

                </div>

            </div>


        </div>


    )
}
