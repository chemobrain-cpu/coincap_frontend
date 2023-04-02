import React from 'react';
import styles from './MyAssets.module.css';



export const MyAssets = () => {
    return (<div className={styles.assets}>
        <div className={styles.headingCon}>
            <h1>My assets</h1>
        </div>

        <div className={styles.cryptoAssetCon}>
            <img src='../../graphics9.png' />
            <h2>Get started with crypto</h2>
            <p>Your crypto assets will appear here.</p>
            <button>
                Explore asset
            </button>
        </div>


    </div>)
}
