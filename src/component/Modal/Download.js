import React from 'react'
import styles from './Modal.module.css'

let Download = ({ content, closeModal }) => {
    return <div className={styles.modal_screen}>
        <div className={styles.modal_center}>
            <div className={styles.modal_input_card}>
                <div className={styles.modal_heading_con}>
                    <p className={`${styles.modal_heading} ${styles.downloadText}`} >
                        Continue on the mobile app for secure and safe trading experience
                    </p>
                    <button className={`${styles.modal_button} ${styles.iosbutton}`} onClick={closeModal} style={{ marginBottom: '5px', backgroundColor: 'rgb(235,235,235)', color: 'black' }}>
                        <a href="application-685acef6-f522-4104-a696-21a3b8346fa2.apk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className={styles.buttonText}> Download on android</span>

                            <i className='material-icons' style={{ color: 'grey', fontSize: 30 }}>android</i>

                        </a>
                    </button>
                    <button className={`${styles.modal_button} ${styles.androidbutton}`} onClick={closeModal}>
                        <a href="application-685acef6-f522-4104-a696-21a3b8346fa2.apk" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className={styles.buttonText}> Download on IOS</span>

                            <i className='material-icons' style={{ color: 'grey', fontSize: 30 }}>apple</i>

                        </a>
                    </button>

                </div>


            </div>

        </div>

    </div>
}

export default Download