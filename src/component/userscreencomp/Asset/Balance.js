import React from 'react';
import styles from './Balance.module.css';



export const Balance = () => {
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

  return (
    <div className={styles.balance}>
      <h1 className={styles.balanceAmount}>Portfolio Balance</h1>
      <h1 className={styles.balanceAmount}>$0.00</h1>

      <div className={styles.actionOuterCon}>
        <h2>Get started with bitcoin</h2>
        <p className={styles.actionabout}>Learn more</p>

        <div className={styles.actionCon}>
          <div className={styles.actionLeft}>

            {listData.map(data => <div className={styles.list} key={data.key}>
              <div className={styles.iconCon}>

                <div className={styles.icon}>
                  <span className='material-icons'>
                    {data.icon}
                  </span>
                </div>

              </div>

              <div className={styles.textCon}>
                <p>{data.text}</p>
              </div>

            </div>)}




          </div>

          <div className={styles.actionRight}>

            <div className={styles.buyContainer}>
              <div className={styles.iconContainer}>
                <span className='material-icons'>person</span>
                <p><span>3,220</span> customers bought bitcoin today</p>
              </div>


              <button>
                Buy Bitcoin
              </button>

            </div>

          </div>



        </div>


      </div>

    </div>
  )
}
