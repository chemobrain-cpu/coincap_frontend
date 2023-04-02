import React from 'react';
import styles from './Coinlist.module.css';
import { CoinSection } from '../CoinSection';
import { CoinHead } from './CoinHead';
import { CoinFilter } from './CoinFilter';
import FlatList from 'flatlist-react';


export const Coinlist = ({ filteredCoins, searchHandler, selectHandler }) => {

    let renderItem = (coin, ids) => {
        return <CoinSection key={ids} coin={coin} />
    }
    let emptyRender = () => {
        return (<div className={styles.emptyScreen}>
            
            <h2>No crypto found</h2>
        </div>)
    }


    return (
        <div className={styles.coinContainer}>
            <CoinFilter searchHandler={searchHandler} selectHandler={selectHandler}  />

            <div className={styles.tableContainer}>
                <div className={styles.tableHead}>
                    <CoinHead />
                </div>

                <div className={styles.tableBody}>

                    <FlatList
                        list={filteredCoins}
                        renderItem={renderItem}
                        renderWhenEmpty={emptyRender}
                    />

                </div>


            </div>

        </div >

    )
}