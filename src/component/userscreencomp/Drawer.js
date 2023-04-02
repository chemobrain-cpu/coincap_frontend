import React from 'react'
import styles from './Drawer.module.css';




const DashboardDrawer = ({showmenuHandler}) => {

    

    return (<div className='drawerCon'>

    <div className={styles.drawer}>
      <div className={styles.cancel} onClick={showmenuHandler}>
        
        <span className='material-icons'>
          close
        </span>
      </div>


      <ul className={styles.drawerMenuCon}>
        <li className={styles.drawerMenu}><span className='material-icons'>percent</span>Earn</li>
        <li className={styles.drawerMenu}><span className='material-icons'>notifications</span>Notifications</li>
        <li className={styles.drawerMenu}><span className='material-icons'>person_add</span>Invite friends</li>
        <li className={styles.drawerMenu}><span className='material-icons'>redeem</span>Send a gift</li>



      </ul>

      <div className={styles.boxunderline}>
      </div>

      <ul className={styles.drawerMenuCon}>
        <li className={styles.drawerMenu}>Earn</li>
        <li className={styles.drawerMenu}>Notifications</li>
        <li className={styles.drawerMenu}>Invite friends</li>
       
      </ul>

      <div className={styles.boxunderline}>
      </div>

      <ul className={styles.drawerMenuCon}>
        <li className={styles.drawerMenu}>Reports</li>
        <li className={styles.drawerMenu}>Get support</li>
        <li className={styles.drawerMenu}>Signout</li>
       
      </ul>



    </div>
  </div>)
}

export default DashboardDrawer