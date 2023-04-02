import React from 'react';
import styles from './Verification.module.css';


export const Verification = () => {

    return (
        <div className={styles.verificationContainer}>
            <div className={styles.tab}>
                <ul>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Convert</li>
                </ul>
            </div>

            <div className={styles.content}>
                <div className={styles.warning}>
                    <span className='material-icons'>
                        warning
                    </span>

                </div>

                <h2>Identity Verification Required</h2>
                <p>Before making your first purchase, please verify your identity. Identity verification helps us ensure the safety and security of your Coinbase account.</p>

                <button>
                    Submit ID
                </button>

            </div>


        </div>






    )
}