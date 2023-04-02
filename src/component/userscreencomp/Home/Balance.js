import React from 'react';
import styles from './Balance.module.css';


let actionData = [
    { icon: 'add', title: 'Buy' },
    { icon: 'remove', title: 'Sell' },
    { icon: 'arrow_upward', title: 'Send' },
    { icon: 'autorenew', title: 'Convert' },
    { icon: 'arrow_downward', title: 'Receive' }
]



export const Balance = () => {
    return (
        <div className={styles.balance}>
            <h2>My balance</h2>
            <h1>$1000.00</h1>

            <div className={styles.balanceButtons}>

                {actionData.map(data => <div className={styles.balanceButton} key={data.icon}>
                    <button><span className='material-icons'>{data.icon}</span></button>
                    <p>{data.title}</p>

                </div>)}

            </div>
        </div>


    )
}
