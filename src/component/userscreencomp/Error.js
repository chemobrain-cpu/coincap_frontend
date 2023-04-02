import React from 'react';
import styles from './Error.module.css';

export const Error = ({tryAgain,}) => {
  return (
    <div className={styles.tradeErrorCon}>
            <img src='../../setting.png' width='300px' height='300px'/>
            <h1>We're having connection issues</h1>
            <p>we're looking into it eight now.
                please quit the app and try again. finds are safe
            </p>
            <button onClick={tryAgain}>Try again</button>
            <button onClick={tryAgain}>check status</button>
        
        
        
        
        
        
        </div>
  )
}
