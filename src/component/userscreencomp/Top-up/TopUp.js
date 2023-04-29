import React, { useState } from 'react';
import styles from '../Home.module.css';
import { TopUpForm } from './TopUpForm';



export const TopUpAccount = () => {
  let [email, setEmail] = useState("")

  let changeEmail = (e) => {
    setEmail(e.target.value)

  }


  return (
    <><div className={styles.formScreen} >
      <div className={styles.timeline} >

        <TopUpForm />
      </div>

    </div>
    </>
  )
}
