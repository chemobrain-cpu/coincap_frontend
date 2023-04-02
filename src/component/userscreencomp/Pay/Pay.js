import React, { useEffect, useState } from 'react';
import styles from '../Home.module.css';
import { Loader } from './Loader';
import { PayBox } from './Paybox';
import { TransactionHistory } from './TransactionHistory';



export const Pay = () => {
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //asynchronous request
        let timeout = setTimeout(() => {
            setIsLoading(false)

        }, 5000)

        return ()=>{
            clearTimeout(timeout)
        }
    })


    return (<>
        {isLoading && <Loader />}
        {!isLoading && <div className={styles.payScreen}>
            <div className={styles.pay}>
                <PayBox />
            </div>

            <div className={styles.rightBar}>
                <TransactionHistory />
            </div>

        </div>}
    </>



    )
}