import React from 'react'
import styles from './desktopFooter.module.css'

const Desktopfooter = () => {
    return (
        <div className={styles.desktopfooter}>
            <div className={styles.footermenu}>
                <ul>
                    <li>Home</li>
                    <li>Careers</li>
                    <li>Legal & Privacy</li>
                </ul>
                <p>© 2023 Coinbase</p>

            </div>

            <div className={styles.footerhelp}>
                <select>
                    <option>
                        English
                    </option>
                </select>

                <button>
                    Need help?
                </button>

            </div>

        </div>
    )
}

export  default Desktopfooter