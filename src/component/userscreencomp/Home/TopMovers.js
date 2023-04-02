import React from 'react';
import styles from './TopMovers.module.css';
import Coin from './Coin';

const TopMovers = ({coins}) => {
  return (
    <div className={styles.topMovers}>
          <div className={styles.headContainer}>
            <p>Top Movers</p>
            <p>See all</p>
          </div>

          <Coin coins={coins}/>

        </div>
  )
}

export default TopMovers