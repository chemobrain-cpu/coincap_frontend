import React from 'react';
import styles from './Home.module.css';
import Desktopfooter from '../../../component/userscreencomp/desktopfooter';
import Tab from '../../../component/userscreencomp/tab'
import Sidebar from '../../../component/userscreencomp/sidebar';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';

import { Pay } from './../../../component/userscreencomp/Pay/Pay';



const DashboardPay = () => {

  let showmenuHandler = () => {
    let drawer = document.querySelector('.drawerCon')
    drawer.classList.toggle('showdrawer')
  }






  return (<div className={styles.dashboard}>

    <div className={styles.sidebar}>
      <Sidebar status='Pay' />
    </div>

    <div className={styles.main}>
      {/*mobile and dashboard headers*/}
      <DashboardDrawer showmenuHandler={showmenuHandler} />
      <DashboardHeader showmenuHandler={showmenuHandler} title='Pay'/>
      {/*actual home screen */}
      <Pay />


      {/* footer*/}
      <div className={styles.tabCont}>
        <Tab  status='Pay'/>
      </div>
      <div className={styles.desktopFooterCont}>
        <Desktopfooter />
      </div>
    </div >

  </div >


  )
}

export default DashboardPay
