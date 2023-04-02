import React from 'react';
import styles from './Timeline.module.css';
import { TimelineCard } from './TimelineCard';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';




export const Timeline = ({ timeline }) => {
  let navigate = useNavigate()

  let navigateHandler = (data) => {
    navigate(data)
  }


  return (<div className={styles.timelineCon}>
    {timeline.map(data => <TimelineCard key={data.about} data={data} onClick={navigateHandler} />)}

    <div className={styles.loaderCon}>

      <div className={styles.imgLoader}>
        <div className={styles.imgTop}>
          <Skeleton style={{
            height: '15px',
            width: '50%',
          }} />
          <Skeleton style={{
            height: '25px',
            width: '80%',
          }} />

        </div>


        <div className={styles.img}>
          <Skeleton style={{
            height: '100%',
            width: '100%',
          }} />
        </div>


        <div className={styles.imgBottom}>


          
          <Skeleton style={{
            height: '20px',
            width: '90%',
          }} />

          <Skeleton style={{
            height: '20px',
            width: '100%',
          }} />

        </div>



      </div>

      <div className={styles.idLoader}>
        <div>
          <Skeleton style={{
            height: '25px',
            width: '70%',
          }} />

        </div>


        <div>


          <Skeleton style={{
            height: '15px',
            width: '70%',
          }} />
          <Skeleton style={{
            height: '20px',
            width: '90%',
          }} />

          <Skeleton style={{
            height: '70px',
            width: '100%',
          }} />

        </div>

        <div>
          <Skeleton style={{
            height: '20px',
            width: '40%',
          }} />

        </div>



      </div>
    </div>


  </div>


  )
}
