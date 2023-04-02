import React from 'react';
import styles from './TimelineCard.module.css';


export const TimelineCard = ({ data,onClick }) => {

  return (<div className={styles.timelineCards} onClick={()=>{
    onClick(data.browserUrl)
  }}>
    <div className={styles.timelineCardleft}>
      <div className={styles.timelineImg}>
        <div className={styles.heading}>
          <div className={styles.headingTextCon}>
            <span className='material-icons'>
              question_mark
            </span>
            <div className={styles.headingText}>
              <p>{data.title}</p>
              <p>{data.action}</p>
            </div>

          </div>

          <div className={styles.headingIcon}>
            <span className='material-icons'>
              more_vert
            </span>

          </div>

        </div>

        <img src={data.url} />

      </div>

      <div className={styles.timelineAbout}>

        <div className={styles.heading}>
          <div className={styles.headingTextCon}>
            <span className='material-icons'>
              question_mark
            </span>
            <div className={styles.headingText}>
              <p>{data.title}</p>
              <p>{data.action}</p>
            </div>

          </div>

          <div className={styles.headingIcon}>
            <span className='material-icons'>
              more_vert
            </span>

          </div>

        </div>

        <h1 className={styles.aboutHead}>{data.topic}</h1>
        <p className={styles.aboutText}>{data.about}</p>

        <div className={styles.aboutIconContainer}>
          <span className='material-icons'>
            favorite_outline
          </span>

          <p>
            {data.likeNo}
          </p>

          <span className='material-icons'>
            share
          </span>

        </div>









      </div>


    </div>

    <div className={styles.timelineCardright}>
      <div className={styles.heading}>
        <div className={styles.headingTextCon}>
          <span className='material-icons'>
            question_mark
          </span>
          <div className={styles.headingText}>
            <p>Coincap Learn</p>
            <p>Explainers</p>
          </div>

        </div>

        <div className={styles.headingIcon}>
          <span className='material-icons'>
            more_vert
          </span>

        </div>

      </div>


      <div className={styles.timelineAbout}>

        <h1 className={styles.aboutHead}>{data.topic}</h1>
        <p className={styles.aboutText}>{data.about}</p>

        <div className={styles.aboutIconContainer}>
          <span className='material-icons'>
            favorite_outline
          </span>

          <p>
            {data.likeNo}
          </p>

          <span className='material-icons'>
            share
          </span>

        </div>









      </div>
      <div>

      </div>
      <div>

      </div>

    </div>



  </div>


  )
}
