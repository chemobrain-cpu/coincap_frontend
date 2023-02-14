import React  from 'react';
import styles from './Fallback.module.css';
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css"

function FallBackComponent() {
    return (<div className={styles.fallbackComponent}>
    <Spinner size={30} color="#1652f0" />
  </div>
    )
}

export default FallBackComponent;