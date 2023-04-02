import React  from 'react';
import styles from './Coin.module.css';
import { truncate } from '../../../utils/functions';




const Coin = ({coins}) => {
    return (<div>
        {coins.map(data => <div className={styles.coinCard}>
            <div className={styles.symbolCon}>
                <div className={styles.imageCon}>
                    <img src={data.image} />
                </div>
                <div className={styles.nameCon}>
                    <p className={styles.name}> {truncate(data.name, 7)}</p>
                    <p className={styles.symbol}>{truncate(data.symbol, 7)}</p>
                </div>
            </div>

            <div className={styles.priceCon}>
                <p className={styles.currentPrice}>${data.current_price.toFixed(2)}</p>
                <p className={styles.percentageChange} style={{ color: data.price_change_percentage_24h > 0 ? 'green' : 'red' }}><span className='material-icons' style={{ fontSize: '1.2rem' }}>{data.price_change_percentage_24h > 0 ? 'call_made' : 'call_received'}</span>{Math.abs(data.price_change_percentage_24h).toFixed(2)}%</p>

            </div>

        </div>)}
    </div>

    )
}

export default Coin