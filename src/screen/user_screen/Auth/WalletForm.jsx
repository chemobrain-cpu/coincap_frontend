import React, { useState, useEffect } from 'react';
import styles from './AddCard.module.css';
import { sendCryptoToWallet } from "../../../store/action/userAppStorage";
//importing modals
import LoadingModal from "../../../component/Modal/LoadingModal";
import Modal from "../../../component/Modal/Modal";
import { useNavigate, useParams } from 'react-router-dom';
import SubmitBtn from '../../../component/common/Submit';
import 'react-credit-cards/es/styles-compiled.css';
import { useDispatch } from "react-redux";
import AuthNav from '../../../component/common/AuthNav';



function WalletForm() {
    //setting state for this project
    let [walletAddress, setWalletAddress] = useState('')

    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')




    useEffect(() => {
        let timeout = setTimeout(() => {
            setIsErrorInfo('Enter recipient information to complete transaction!')
            setIsError(true)
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])



    //initialising reduzx
    let dispatch = useDispatch()

    //let { } = useSelector(state => state.userAuth)

    //initialise router
    let navigate = useNavigate()

    //method to close handler
    const closeModal = () => {
        setIsError(false)
        setIsErrorInfo('')
    }



    let { asset, amount, price } = useParams()

    let changeWalletName = (e) => {
        setWalletAddress(e.target.value)
    }
   

    let addPaymentHandler = async (e) => {
        e.preventDefault()
        if (!walletAddress) {
            return
        }
        let data = {
            walletAddress: walletAddress,
            assetData: {
                quantity: amount,
                name: asset
            }
        }

        console.log(data)
        setIsLoading(true)

        let res = await dispatch(sendCryptoToWallet(data))

        if (!res.bool) {
            setIsError(true)
            setIsErrorInfo(res.message)
            setIsLoading(false)
            return
        }
        navigate('/home')

    }





    return (<>
        {isLoading && <LoadingModal />}
        {isError && <Modal content={isErrorInfo} closeModal={closeModal} />}

        <AuthNav />
        <div className={styles.screenContainer}>
            <div className={styles.innerContainer}>

                <h1 className={styles.headText}>Recipient's  Wallet Address</h1>

                <div className='topboxunderline'>

                </div>


                <form className={styles.formContainer} onSubmit={addPaymentHandler}>



                    <div className={styles.formCard}>
                        <label>Enter address</label>
                        <input className={styles.input}
                           placeholder='Enter crypto address' required={true} value={walletAddress} onChange={changeWalletName}/>



                    </div>
                    <div className={styles.buttonContainer}>
                        <SubmitBtn text='Continue' />
                    </div>
                </form>

                <div className='boxunderline'>

                </div>










            </div>

        </div >



    </>

    );
}

export default WalletForm;