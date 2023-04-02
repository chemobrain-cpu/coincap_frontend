import React from 'react';
import styles from './Home.module.css';
import Desktopfooter from '../../../component/userscreencomp/desktopfooter';
import Tab from '../../../component/userscreencomp/tab'
import Sidebar from '../../../component/userscreencomp/sidebar';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';
import { Trade } from '../../../component/userscreencomp/Trade/Trade';



const DashboardTrade = () => {

  let showmenuHandler = () => {
    let drawer = document.querySelector('.drawerCon')
    drawer.classList.toggle('showdrawer')
  }






  return (<div className={styles.dashboard}>

    <div className={styles.sidebar}>
      <Sidebar status='Trade' />
    </div>

    <div className={styles.main}>
      {/*mobile and dashboard headers*/}
      <DashboardDrawer showmenuHandler={showmenuHandler} />
      <DashboardHeader showmenuHandler={showmenuHandler} title='Trade' />
      {/*actual home screen */}
      <Trade />


      {/* footer*/}
      <div className={styles.tabCont}>
        <Tab  status='Trade'/>
      </div>
      <div className={styles.desktopFooterCont}>
        <Desktopfooter />
      </div>
    </div >

  </div >


  )
}

export default DashboardTrade
