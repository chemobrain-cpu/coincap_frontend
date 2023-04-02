import React, { useEffect, useCallback, useState } from 'react';
import styles from '../Home.module.css';
import { Timeline } from './Timeline';
import News from './News';
import TopMovers from './TopMovers';
import { Balance } from './Balance';
import { WatchList } from './WatchList';
import { useDispatch } from "react-redux";
import { loadCoins } from "../../../store/action/userAppStorage";
import 'react-loading-skeleton/dist/skeleton.css';
import {Loader} from './Loader';
import { data, timelineData } from '../../../data/data';



export const HomeComponent = () => {
  let [coins, setCoins] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  //initialising reduzx
  let dispatch = useDispatch()

  /*
  useEffect(() => {
    loadingCoins()
  }, [loadCoins])

  */

  let loadingCoins = useCallback(async () => {
    setIsLoading(false)
    let res = await dispatch(loadCoins(20))
    if (!res.bool) {
      console.log(res.message)
      setIsLoading(false)
      return
    }
    //alert('sucessful')
    setCoins(res.message)
    console.log(res.message)
    setIsLoading(false)
  }, [])


  return (<>
    {!isLoading?<div className={styles.homeScreen}>

      <div className={styles.timeline}>

        <Balance />

        <WatchList data={data} />

        <Timeline timeline={timelineData} />


      </div>



      <div className={styles.rightBar}>

        <News />
        <TopMovers coins={data} />
      </div>

    </div>:<Loader/>}


  </>)




}
