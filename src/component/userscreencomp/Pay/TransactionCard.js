import React from 'react'
import styles from './TransactionCard.module.css'


export const TransactionCard = ({data}) => {
    return (<div className={styles.transaction}>
        <div className={styles.crypto}>
            <div className={styles.cryptoImgCon}>
                <img src={`${data.img}`} />
            </div>
            <div className={styles.cryptoContent}>
                <h2> sent {data.q} to ...</h2>
                <p>4 month ago  </p>
            </div>

        </div>
        <div>
            <button>
                Details
            </button>

        </div>

    </div>)
}