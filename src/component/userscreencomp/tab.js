import React from 'react';
import styles from './tab.module.css';
import { useNavigate } from 'react-router-dom';



const TabFooter = ({status}) => {
  let navigate = useNavigate()

  let tabData = [
    {
      icon: 'home',
      tabText: 'Home',
      link:'/home'
    },
    {
      icon: 'access_time',
      tabText: 'Assets',
      link:'/assets'
    },
    {
      icon: 'trending_up',
      tabText: 'Trade',
      link:'/trade'
    },
    {
      icon: 'toll',
      tabText: 'Pay',
      link:'/pay'
    }
  ]

  let handleNavigate = (data) => {
    navigate(data)
  }



  return (
    <div className={styles.mobilefooter}>
      {tabData.map(data =>
        <div className={styles.tab} onClick={()=>handleNavigate(data.link)}>
          <span className='material-icons' style={{color:status===`${data.tabText}`?'#1652f0':'' }}>{data.icon}</span>
          <h3 style={{color:status===`${data.tabText}`?'#1652f0':'' }}>{data.tabText}</h3>
        </div>

      )}



    </div>
  )
}

export default TabFooter