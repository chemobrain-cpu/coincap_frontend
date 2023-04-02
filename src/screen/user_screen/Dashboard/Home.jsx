import React from 'react';
import styles from './Home.module.css';
import Desktopfooter from '../../../component/userscreencomp/desktopfooter';
import Tab from '../../../component/userscreencomp/tab'
import Sidebar from '../../../component/userscreencomp/sidebar';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';

import { HomeComponent } from '../../../component/userscreencomp/Home/Home';



const DashboardHome = () => {



  let showmenuHandler = () => {
    let drawer = document.querySelector('.drawerCon')
    drawer.classList.toggle('showdrawer')
  }






  return (<div className={styles.dashboard}>

    <div className={styles.sidebar}>
      <Sidebar status='Home' />
    </div>

    <div className={styles.main}>
      {/*mobile and dashboard headers*/}
      <DashboardDrawer showmenuHandler={showmenuHandler} />
      <DashboardHeader showmenuHandler={showmenuHandler} title='Home' />





      {/*actual home screen */}
      <HomeComponent />





      {/* footer*/}
      <div className={styles.tabCont}>
        <Tab  status='Home'/>
      </div>
      <div className={styles.desktopFooterCont}>
        <Desktopfooter />
      </div>
    </div >

  </div >


  )
}

export default DashboardHome
