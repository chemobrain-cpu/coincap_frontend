import React, { useState } from 'react';
import styles from '../Home.module.css';
import { useDispatch } from "react-redux";
import {
  getDetailedCoinData,
  getCoinMarketChart,
  getCandleChartData,
  loadCoins
} from "../../../store/action/userAppStorage";

import { useParams } from 'react-router-dom';
import {VictoryLine,VictoryChart,VictoryAxis} from 'victory'





let data = [
  [1680289268326, 28396.930826425294],
  [1680292871293, 28480.679190765833],
  [1680296417486, 28449.801858037066],
  [1680300074032, 28545.696125542672],
  [1680303632077, 28614.720752692487],
  [1680307255714, 28512.59557632949],
  [1680310885571, 28461.85231762472],
  [1680314432753, 28630.791082786527],
  [1680318054545, 28616.450159987104],
  [1680321649074, 28592.13249069683],
  [1680325270853, 28614.036511384336],
  [1680328866159, 28606.087345747008],
  [1680332469771, 28516.00446026185],
  [1680336025405, 28482.773400308706],
  [1680339687239, 28489.062789309723],
  [1680343206077, 28472.541617701205],
  [1680346911417, 28497.089317751925],
  [1680350491639, 28431.090850350232],
  [1680354010504, 28466.964412373334],
  [1680357666461, 28453.623792675688],
  [1680361311338, 28369.27869767466],
  [1680364828334, 28426.160144518566],
  [1680368509686, 28370.86183763751],
  [1680372049718, 28393.676717620543],
  [1680374487000, 28375.468320467866]
]






const Chart = () => {
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [coinCandleChartData, setCoinCandleChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1");
  let dispatch = useDispatch()


  //destructuring data from navigation
  const {
    coinId,
  } = useParams();




  const fetchCoinData = async () => {
    setIsLoading(true)
    const fetchedCoinData = await dispatch(getDetailedCoinData(coinId));
    if (!fetchedCoinData.bool) {
      //throw error screen
      setIsError(true)
      setIsLoading(false)
      return
    }
    setCoin(fetchedCoinData.message);
    setIsLoading(false)

  };


  const fetchMarketCoinData = async (selectedRangeValue) => {
    setIsLoading(true)
    const fetchedCoinMarketData = await dispatch(getCoinMarketChart(
      coinId,
      selectedRangeValue
    ));
    if (!fetchedCoinMarketData.bool) {
      //throw error screen
      setIsError(true)
      setIsLoading(false)
      return
    }
    setCoinMarketData(fetchedCoinMarketData.message);
    setIsLoading(false)
  };


  const fetchCandleStickChartData = async (selectedRangeValue) => {
    setIsLoading(true)
    const fetchedSelectedCandleChartData = await dispatch(getCandleChartData(
      coinId,
      selectedRangeValue
    ));
    if (!fetchedSelectedCandleChartData.bool) {
      //throw error screen
      setIsError(true)
      setIsLoading(false)
      return
    }
    setCoinCandleChartData(fetchedSelectedCandleChartData.message);
    setIsLoading(false)
  };










  return (
    <div className={styles.chartScreen}>

      <div className={styles.timeline}>
        <div className={styles.coinChartCon}>
          <div>

          </div>

          
          <VictoryChart>
            <VictoryLine data={data.map(([timestamp, value]) => ({ y:timestamp, x:value }))}
            interpolation='natural' style={{
              data:{
                stroke:'green',
                strokeWidth:3
              }
            }}>

            </VictoryLine>

            <VictoryAxis style={{
              axis:{stroke:'none'},
              tickLabels:{fill:'transparent'},
              data:{stroke:'red'},

              }}/>
          </VictoryChart>

          

        </div>
      </div>



      <div className={styles.rightBar}>
        <div className={styles.aboutCoin}>

        </div>

        <div className={styles.marketStats}>

        </div>


      </div>

    </div>
  )
}

export default Chart