import React from 'react';
import styles from './WatchList.module.css';
import { CoinSection } from '../CoinSection';



export const WatchList = ({ data }) => {
    return (
        <div className={styles.watchListContainer}>
            <div className={styles.watchListHead}>
                <h1>Prices</h1>

                <div className={styles.select}>
                    <select>
                        <option>Watchlist</option>
                        <option>Top assets</option>
                    </select>
                    <span className='material-icons'>
                        expand_more

                    </span>

                </div>


            </div>


            <div className={styles.watchList}>

                {data.map(data => <CoinSection key={data.id} coin={data} />)}

            </div>

        </div>


    )
}
