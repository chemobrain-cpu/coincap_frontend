import React from 'react'
import styles from './dashboardNav.module.css';



const DashboardHeader = ({showmenuHandler,title}) => {

    

    return (<div className={styles.dashboardheader}>
        <div className={styles.headerleft}>

            <h1 className={styles.title}>{title}</h1>
            <h1 className={styles.logo}>Coincap</h1>



        </div>
        <div className={styles.headerright}>
            <div className={styles.headerrightinner}>
                <button>Buy & Sell</button>

                <button>Send & Recieve</button>

                <span className='material-icons'>
                    notifications_none
                </span>

                <span className='material-icons'>
                    apps
                </span>

                <div className={styles.menu}>
                    <span className='material-icons ' style={{ color: 'rgb(0,0,0)', backgroundColor: 'transparent',fontSize:'1.8rem' }} onClick={showmenuHandler}>
                        menu
                    </span>

                </div>




                <div className={styles.profileimage}>
                    <span className='material-icons' style={{ color: '#fff', backgroundColor: 'rgb(200,200,200)' }}>
                        person
                    </span>

                </div>

            </div>




        </div>
    </div>)
}




export default DashboardHeader