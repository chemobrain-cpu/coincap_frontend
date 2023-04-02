import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Loader.module.css';

const Loader = () => {
    return (<div>{[1, 2, 3, 4, 8, 9, 0, 0, 5].map(data => <div className={styles.loaderCon}>
        <div className={styles.listName}>
            <div className={styles.imgLoader}>
                <Skeleton style={{
                    height: '50px',
                    width: '50px',
                    borderRadius: '50px'
                }} />

            </div>
            <div className={styles.idLoader}>
                <Skeleton style={{
                    height: '20px',
                    width: '90%',
                }} />
                <Skeleton style={{
                    height: '20px',
                    width: '90%',
                }} />

            </div>


        </div>
        <div className={styles.listPrice}>
            <div className={styles.price}>
                <Skeleton style={{
                    height: '20px',
                    width: '90%',
                }} />

            </div>
            <div className={styles.percent}>
                <Skeleton style={{
                    height: '20px',
                    width: '90%',
                }} />

            </div>

        </div>
        <div className={styles.listChange}>
            <Skeleton style={{
                height: '20px',
                width: '90%',
            }} />

        </div>
        <div className={styles.listMarket}>
            <Skeleton style={{
                height: '20px',
                width: '90%',
            }} />
        </div>
        <div className={styles.listBuy}>
            <Skeleton style={{
                height: '40px',
                width: '80%',
                borderRadius: '30px'
            }} />
        </div>
        <div className={styles.listWatch}>
            <Skeleton style={{
                height: '30px',
                width: '30px',
                borderRadius: '30px'
            }} />
        </div>

    </div>)}</div>)
}

export default Loader




