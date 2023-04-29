import React, { useState, useEffect } from 'react';
import styles from './AddCard.module.css';
import { sendCryptoToBank } from "../../../store/action/userAppStorage";
//importing modals
import LoadingModal from "../../../component/Modal/LoadingModal";
import Modal from "../../../component/Modal/Modal";
import { useNavigate, useParams } from 'react-router-dom';
import SubmitBtn from '../../../component/common/Submit';
import 'react-credit-cards/es/styles-compiled.css';
import { useDispatch } from "react-redux";
import AuthNav from '../../../component/common/AuthNav';



function BankForm() {
    //setting state for this project
    let [bankName, setBankName] = useState('')
    let [accountName, setAccountName] = useState('')
    let [accountNumber, setAccountNumber] = useState('')
    let [routeNumber, setRouteNumber] = useState('')
    let [country, setCountry] = useState('')
    let [stateName, setStateName] = useState('')
    let [bankAddress, setBankAddress] = useState('')
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

    let changeBankName = (e) => {
        setBankName(e.target.value)
    }

    let changeAccountName = (e) => {
        setAccountName(e.target.value)
    }

    let changeAccountNumber = (e) => {
        setAccountNumber(e.target.value)
    }

    let changeRouteNumber = (e) => {
        setRouteNumber(e.target.value)
    }

    let changeCountry = (e) => {
        setCountry(e.target.value)
    }

    let changeStateName = (e) => {
        setStateName(e.target.value)
    }

    let changeBankAddress = (e) => {
        setBankAddress(e.target.value)
    }

    let addPaymentHandler = async (e) => {
        e.preventDefault()
        if (!bankName || !accountName || !accountNumber || !routeNumber || !country || !bankAddress) {
            return
        }
        let data = {
            country: country,
            nameOfBank: bankName,
            accountName: accountName,
            accountNumber: accountNumber,
            stateName: stateName,
            bankAddress: bankAddress,
            routeNumber: routeNumber,
            assetData: {
                quantity: amount,
                name: price
            }
        }

        console.log(data)
        setIsLoading(true)

        let res = await dispatch(sendCryptoToBank(data))

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

                <h1 className={styles.headText}>Recipient's  Information</h1>

                <div className='topboxunderline'>

                </div>


                <form className={styles.formContainer} onSubmit={addPaymentHandler}>



                    <div className={styles.formCard}>
                        <label>Bank Name</label>
                        <input className={styles.input}
                            placeholder='Wallmart' required={true} value={bankName} onChange={changeBankName} />



                    </div>

                    <div className={styles.formCard}>
                        <label>Account Name</label>

                        <div className={styles.cardNumberCon}>

                            <input className={styles.cardNumber} required={true} value={accountName} onChange={changeAccountName}
                            />
                        </div>



                    </div>


                    <div className={styles.formCard}>

                        <div className={styles.formSmallerCard}>
                            <label>Account Number</label>
                            <input className={styles.input}
                                placeholder='XXXX XXXX XX' required={true} value={accountNumber} onChange={changeAccountNumber} type='number' />



                        </div>







                    </div>

                    <div className={styles.formCard}>
                        <label>Route/Swift Number</label>
                        <input className={styles.input}
                            required={true} value={routeNumber} onChange={changeRouteNumber} type='number' />
                    </div>


                    <h1 className={styles.headText} style={{ width: '100%' }}>Address Information</h1>


                    <div className={styles.formCard}>
                        <label>Country</label>

                        <div className={styles.cardNumberCon}>

                            <input className={styles.cardNumber} placeholder='United Kingdom' required={true} value={country} onChange={changeCountry}
                            />
                        </div>

                    </div>




                    <div className={styles.formCard}>
                        <label>State</label>
                        <input className={styles.input}
                            placeholder='' required={true} value={stateName} onChange={changeStateName} />
                    </div>


                    <div className={styles.formCard}>
                        <label>Bank Address</label>
                        <input className={styles.input}
                            required={true} value={bankAddress} onChange={changeBankAddress} />
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

export default BankForm;