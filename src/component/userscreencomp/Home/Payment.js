import React from 'react'
import styles from './Payment.module.css'

const Payment = () => {
  return (
    <div className={styles.paymentComplete}>
      <h2 className={styles.paymentHeading}>Remaining steps</h2>

      <p className={styles.paymentText}>You’re close to finishing your account setup. Next up, add a payment method.</p>

      <div className={styles.stepContainer}>
        <div className={styles.steps}>

          <p className={styles.eachstepText}>
            <span className='material-icons'>
              done
            </span>
            Account created
          </p>

          <p className={styles.eachstepText}>
            <span className='material-icons'>
              done
            </span>
            Verify your info
          </p>

          <div className={styles.eachstepDiv}>
            <div className={styles.iconCon}>
              <span className='material-icons'>
                add_card
              </span>

            </div>

            <div className={styles.textCon}>
              <p >Add payment method</p>
              <p>Get ready to date</p>
              <p>Why is this important</p>
            </div>



          </div>

          <div className={styles.eachstepDiv}>
            <div className={styles.iconCon}>
              <span className='material-icons'>
                sync_alt
              </span>

            </div>

            <div className={styles.textCon}>
              <p >Buy your first crypto</p>
              <p>Jump start your crypto portfolio</p>
              <p>Learn more</p>
            </div>


          </div>




        </div>


        <div className={styles.action}>
          <button>Add payment method</button>
        </div>


      </div>

    </div>
  )
}

export default Payment