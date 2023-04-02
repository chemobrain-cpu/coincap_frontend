import React from 'react';
import styles from './Home.module.css';
import Desktopfooter from '../../../component/userscreencomp/desktopfooter';
import Tab from '../../../component/userscreencomp/tab'
import Sidebar from '../../../component/userscreencomp/sidebar';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';
import { AssetComponent } from '../../../component/userscreencomp/Asset/Asset';



const DashboardAsset = () => {

  let showmenuHandler = () => {
    let drawer = document.querySelector('.drawerCon')
    drawer.classList.toggle('showdrawer')
  }

  return (<div className={styles.dashboard}>
    <div className={styles.sidebar}>
      <Sidebar status='My asssets' />
    </div>

    <div className={styles.main}>
      {/*mobile and dashboard headers*/}
      <DashboardDrawer showmenuHandler={showmenuHandler} />
      <DashboardHeader showmenuHandler={showmenuHandler}  title='Assets'/>

      {/*actual home screen */}
      <AssetComponent />

      {/* footer*/}
      <div className={styles.tabCont}>
        <Tab  status='Assets'/>
      </div>
      <div className={styles.desktopFooterCont}>
        <Desktopfooter />
      </div>
    </div >

  </div >


  )
}

export default DashboardAsset
