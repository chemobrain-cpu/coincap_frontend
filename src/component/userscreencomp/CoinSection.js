import React from 'react';
import styles from './CoinSection.module.css';
import millify from 'millify';
import { truncate } from '../../utils/functions';

export const CoinSection = ({coin}) => {

    return (<ul className={styles.bodylistCon}>
        <li className={styles.listName}>
            <div className={styles.cryptoImg}>
                <img src={`${coin.image}`}/>
            </div>

            <div className={styles.cryptoNameCon}>
                <p className={styles.cryptoName}>{truncate(coin.name,5)}</p>
                <p className={styles.cryptoSymbol}>{truncate(coin.symbol,3)}</p>
            </div>

        </li>


        <li className={styles.listPrice}>
            <p>${coin.current_price}</p>
            <p style={{color:coin.price_change_percentage_24h < 0 ?'red':'green'}}> <span className='material-icons' style={{fontSize:'1.1rem'}}>{coin.price_change_percentage_24h > 0 ? 'call_made' : 'call_received'}</span>{Math.abs(coin.price_change_percentage_24h)?.toFixed(3)}%</p>
        </li>

        <li className={styles.listChange}>
        <p style={{color:coin.price_change_percentage_24h < 0 ?'red':'green'}}><span className='material-icons' style={{fontSize:'1.1rem'}}>{coin.price_change_percentage_24h > 0 ? 'call_made' : 'call_received'}</span>{Math.abs(coin.price_change_percentage_24h)?.toFixed(3)}%</p>
        </li>
        <li className={styles.listMarket}>{millify(coin.market_cap)}</li>
        <li className={styles.listBuy}>
        {coin.price_change_percentage_24h > 0 && <button>Buy</button>}
        
        </li>
        <li className={styles.listWatch}>
            <span className='material-icons'>
                star
            </span>
        </li>
    </ul>)
}