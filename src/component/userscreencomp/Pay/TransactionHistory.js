import React from 'react'
import { TransactionCard } from './TransactionCard'
import styles from './TransactionHistory.module.css'


export const TransactionHistory = () => {
    let transactionData = [
        { img: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", q: 0.0005 }
        , { img: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880", q: 0.8976 },
         { img: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663", q: 0.897657 },
          { img: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850", q: 0.000897 }
        ]

    return (<div className={styles.historyContainer}>
        <div className={styles.headContainer}>
            <h2>Transaction history</h2>

        </div>
        <div className={styles.transactionContainer}>
            <p className={styles.transactionText}>
                General overview of cash and assets transaction for this account

            </p>

            <div className={styles.divisionContainer}>
                <button>
                    Assets

                </button>
                <button>
                    Cash
                </button>

            </div>
            {transactionData.map(data => <TransactionCard
            key={data.img} data={data}/>)}

        </div>


    </div>)
}