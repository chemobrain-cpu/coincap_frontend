import React, { useState} from 'react';
import styles from './formContainer.module.css';

export const TopUpForm = () => {
    //setting state for this project
    let [walletAddress, setWalletAddress] = useState('')
    let changeWalletName = (e) => {
        setWalletAddress(e.target.value)
    }

    let submitHandler = () => {
        return
    }



    return (
        <div className={styles.walletFormContainer} >

            <div className={styles.formHead}>
                <div className={styles.form}>
                    <label>Enter amount in $ dollars to top up and ensure your billing address is correct for funding to be successfull</label>
                    <input placeholder='Enter amount' required={true} value={walletAddress} onChange={changeWalletName} type='number' />
                </div>

                <div className={styles.buttonCon}>
                    <button onClick={submitHandler}>Top up</button>
                </div>

            </div>
            


            



        </div>
    )
}
