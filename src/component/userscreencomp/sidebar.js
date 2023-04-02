import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './sidebar.module.css';




const Sidebar = ({status}) => {
    let navigate = useNavigate()

    let navigateHandler = (data)=>{
        navigate(data)
    }

    const linkData = [
        {
            icon: 'home',
            title: 'Home',
            link:'/home'
        },
        {
            icon: 'access_time',
            title: 'My asssets',
            link:'/assets'
        },
        {
            icon: 'trending_up',
            title: 'Trade',
            link:'/trade'
        },
        {
            icon: 'toll',
            title: 'Pay',
            link:'/pay'
        },
        {
            icon: 'notifications',
            title: 'Notification',
            link:'/notification'
        }
    ]

    return (<div className={styles.sidebar}>
        <div className={styles.topSection}>
            <h1>coincap</h1>
            <div className={styles.logoContainer}>
                <img src='../../../icon.png' />

            </div>
        </div>

        <div className={styles.middleSection}>
            <ul>
                {linkData.map(data => <li onClick={()=>navigateHandler(data.link)}
                    key={data.title} style={{backgroundColor:status===`${data.title}`?'rgb(244, 244, 244)':'' }}><span className='material-icons' style={{color:status===`${data.title}`?'#1652f0':'' }}>{data.icon}</span><p style={{color:status===`${data.title}`?'#1652f0':'' }}>{data.title}</p>
                    <div >
                        {data.title}
                    </div>

                </li>)}

            </ul>
        </div>

        <div className={styles.bottomSection}>
            <div className={styles.imgCon}>
                <img src='../../../coinbase_gift.png' />
            </div>
            <div className={styles.textCon}>
                <h1>Get $10</h1>
                <p>Invite friends</p>

            </div>
        </div>


    </div>


    )
}

export default Sidebar