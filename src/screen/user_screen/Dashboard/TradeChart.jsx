import React from 'react';
import styles from './Home.module.css';
import Desktopfooter from '../../../component/userscreencomp/desktopfooter';
import Sidebar from '../../../component/userscreencomp/sidebar';

import Chart from '../../../component/userscreencomp/Chart/Chart';
import BackHeader from '../../../component/userscreencomp/backHeader';



const TradeChart = () => {

  let showmenuHandler = () => {
    let drawer = document.querySelector('.drawerCon')
    drawer.classList.toggle('showdrawer')
  }


  return (<div className={styles.dashboard}>

    <div className={styles.sidebar}>
      <Sidebar status='Trade' />
    </div>

    <div className={styles.main} >
      <BackHeader title='Bitcoin'/>
      {/*actual home screen */}

      <Chart/>




      {/* footer*/}
      
      <div className={styles.desktopFooterCont}>
        <Desktopfooter />
      </div>
    </div >

  </div >


  )
}

export default TradeChart