import React from 'react';
import styles from './Transaction.module.css';


export const Transaction = () => {

    return (
        <div className={styles.transactionContainer}>
            <div className={styles.transactionHead}>
                <h2>Recent transactions</h2>

            </div>
            <div className={styles.transactionContent}>

                <p>click here to view your teansaction history</p>

                <button>view</button>
            </div>



        </div>






    )
}