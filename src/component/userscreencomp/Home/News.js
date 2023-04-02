import React from 'react';
import styles from './News.module.css'

const News = () => {
  return (
    <div className={styles.news}>
          <div className={styles.iconCon}>
            <div className={styles.arrowCon}>
              <span className='material-icons'>
                arrow_back
              </span>

              <span className='material-icons'>
                arrow_forward
              </span>

            </div>
            <div className={styles.cancelCon}>
              <span className='material-icons'>
                close
              </span>

            </div>

          </div>

          <div className={styles.infoCon}>
            <div className={styles.infoTextCon}>
              <p className={styles.head}>Crypto gifts</p>
              <p className={styles.text}>Give crypto to your friends and family</p>

              <p className={styles.actionText}>Send gift <span className='material-icons'>
                arrow_forward
              </span></p>

            </div>
            <div className={styles.infoImgCon}>
              <img src='../../pay.png' />

            </div>

          </div>



        </div>
  )
}

export default News