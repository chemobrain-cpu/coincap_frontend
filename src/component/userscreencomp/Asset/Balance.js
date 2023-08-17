import React,{useCallback, useEffect,useState} from 'react';
import styles from './Balance.module.css';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export const Balance = () => {
  let { user,color,assetList } = useSelector(state => state.userAuth)
  let [isBTC,setIsBTC] = useState('')
  let navigate = useNavigate()

  let listData = [{
    key: 'favorite',
    icon: 'favorite',
    text: 'why are you here'
  },
  {
    key: 'asset',
    icon: 'access_time',
    text: 'Trade 24hours a day'
  },
  {
    key: 'arrow_forward',
    icon: 'double_arrow',
    text: 'Get started with as little as $1'
  }

  ]

  let buyHandler  =()=>{
    navigate('/assets/buy')
  }

  let fetchBitcoin = useCallback(()=>{
    let arr = []

    for (let mem of assetList) {
      for (let val of user.personalAssets) {
          if (mem.id.toLowerCase() == val.id.toLowerCase()) {
              let new_coin = {...mem}
              new_coin.price =  val.quantity * mem.current_price
              new_coin.current_price = val.quantity * mem.current_price
              new_coin.quantity = val.quantity

              arr.push(new_coin)
          }
      }
  }

  let btc = arr.find(data=>data.id === 'bitcoin')

  if(!btc){
    return
  }

  setIsBTC(btc)

  },[])


  useEffect(()=>{
    fetchBitcoin()

  },[])



  return (
    <div className={styles.balance} style={{backgroundColor:color.background}}>

      {isBTC&&<h1 className={styles.balanceAmount} style={{color:color.importantText}}>Portfolio Balance</h1>}

      {isBTC && <h2 className={styles.balanceAmountText} style={{color:color.importantText}}>{isBTC.quantity.toFixed(3)}{isBTC.symbol}(${Number(isBTC.current_price).toFixed(2)})</h2>}


      <div className={styles.actionOuterCon}>
        <h2 style={{color:color.normalText}}>Get started with bitcoin</h2>
        <p className={styles.actionabout}>Learn more</p>

        <div className={styles.actionCon}>
          <div className={styles.actionLeft}>

            {listData.map(data => <div className={styles.list} key={data.key}>
              <div className={styles.iconCon}>

                <div className={styles.icon} style={{backgroundColor:color.fadeButtonColor}}>
                  <span className='material-icons' style={{color:color.importantText}}>
                    {data.icon}
                  </span>
                </div>

              </div>

              <div className={styles.textCon}>
                <p style={{color:color.importantText}}>{data.text}</p>
              </div>

            </div>)}




          </div>

          <div className={styles.actionRight} style={{backgroundColor:color.background}}>
            <div className={styles.buyContainer} style={{backgroundColor:color.background,border:`1px solid ${color.normalText}`}}>
              <div className={styles.iconContainer} style={{backgroundColor:color.background}}>
                <span className='material-icons' style={{color:color.importantText}}>person</span>
                <p  style={{color:color.normalText}}><span>3,220</span> customers bought bitcoin today</p>
              </div>


              <button onClick={buyHandler}>
                Buy Bitcoin
              </button>

            </div>

          </div>



        </div>


      </div>

    </div>
  )
}
