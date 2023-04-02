import React, { useEffect, useState, useCallback } from 'react';
import styles from '../Home.module.css';
import { Coinlist } from './CoinList';
import { loadCoins } from '../../../store/action/userAppStorage';
import { useDispatch } from 'react-redux';
import Loader from './Loader';
import { Error } from '../Error';
import { Transaction } from './Transaction';
import { Verification } from './Verification';
import { data } from '../../../data/data';






export const Trade = () => {
    //all ajax request should be don here
    let [coins, setCoins] = useState(data)
    let [filteredCoins, setFilteredCoins] = useState(data)
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)

    let dispatch = useDispatch()


    let searchHandler = (e) => {
        setIsLoading(true)
        if (e) {
            const newData = coins.filter((item) => {
                const itemData = item.id ? item.id.toUpperCase() : ''.toUpperCase();
                const textData = e.target.value.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredCoins(newData)
            setIsLoading(false)

        } else {
            setFilteredCoins(coins)
            setIsLoading(false)

        }
    }
    let selectHandler = (e) => {
    }

    let loadData = useCallback(async () => {
        /*
        let res = await dispatch(loadCoins(1, 100))
        if (!res.bool) {
            setIsLoading(false)
            setIsError(true)
            console.log(res.message)
            return
        }
        console.log(res.message)
        setCoins((existingCoins) => [...existingCoins, ...res.message]);
        setFilteredCoins((existingCoins) => [...res.message]);
        setIsError(false)
        setIsLoading(false)
        */
    }, [loadCoins])

    useEffect(() => {
        loadData()
    }, [loadData])

    let tryAgain = () => {
        setIsLoading(false)
        setIsLoading(true)
        loadData()
    }





    return (
        <>{isError ? <Error tryAgain={tryAgain} /> : <div className={styles.tradeScreen}>
            <div className={styles.timeline}>
                {!isLoading && !isError && <Coinlist filteredCoins={filteredCoins} searchHandler={searchHandler} selectHandler={selectHandler} />}

                {isLoading && <Loader />}
            </div>

            <div className={styles.rightBar}>
                <Verification/>
                <Transaction/>

            </div>

        </div>}</>


    )
}