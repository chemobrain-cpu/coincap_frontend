import React from 'react';
import styles from './CoinFilter.module.css';


export const CoinFilter = ({searchHandler,selectHandler}) => {

    return (<div className={styles.filterContainer}>
        <div className={styles.searchinputContainer}>
            <span className='material-icons'>
                search
            </span>

            <input className={styles.searchinput} onChange={searchHandler} placeholder='Search all assets'  />
            <span className='material-icons' >
                close
            </span>

        </div>
        <div className={styles.searchselectorcontainer}>
            <select className={styles.searchselector} onChange={selectHandler}>
                <option>All assets</option>
                <option>Watchlist</option>
                <option>Tradable assets</option>
                <option>Top gainers</option>
                <option>Top losers</option>
            </select>
            <span className='material-icons'>
                arrow_drop_down
            </span>
        </div>


    </div>)
}