import React, { useState, useCallback } from 'react';
import styles from './login.module.css';
//import nav bar
import NavBar from "../../component/UserNav"
import Footer from "../../component/Footer"
import FormInput from "../../component/input-card/input"
import SubmitBtn from "../../component/Submit";
import { login } from "../../store/action/userAppStorage";
import { useDispatch } from "react-redux";
//importing modals
import LoadingModal from "../../component/Modal/LoadingModal"
import Modal from "../../component/Modal/LoginModal"
//import routers
import { useNavigate } from 'react-router-dom'

//let { admin} = useSelector(state => state.userAuth)
function LoginScreen() {
  let [userEmail, setUserEmail] = useState("")
  let [userPassword, setUserPassword] = useState("")
  let [isEmailError, setIsEmailError] = useState("")
  let [isPasswordError, setIsPasswordError] = useState("")
  let [isError, setIsError] = useState(false)
  let [isErrorInfo, setIsErrorInfo] = useState('')
  let [isLoading, setIsLoading] = useState(false)
  //initialising reduzx
  let dispatch = useDispatch()
  //initialise router
  let navigate = useNavigate()
  //loaders state
  let isFormValid = userEmail && userPassword && !isEmailError && !isPasswordError

  let navigateHandler = (url) => {
    navigate(url)

  }


  let setFormDetails = useCallback(e => {
    if (e.formName === "userEmail") {
      let formValue = e.value
      setUserEmail(formValue)
      setIsEmailError(e.error)

    } else if (e.formName === "userPassword") {
      let formValue = e.value
      setUserPassword(formValue)
      setIsPasswordError(e.error)

    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!isFormValid) {
      return
    }
    setIsLoading(true)
    //if forms are not valid,do nothing
    if (!isFormValid) {
      return
    }

    let response = await dispatch(login({ email: userEmail, password: userPassword }))
    if (!response.bool) {
      setIsLoading(false)
      setIsError(true)
      setIsErrorInfo(response.message)

    } else {
      setIsLoading(false)
      //navigate to login
      setIsLoading(false)
      setIsError(true)
      setIsErrorInfo("Continue on the mobile app to keep your assets secure")
    }
  }
  const closeModal = () => {
    setIsError(false)
  }








  return (<>
    {isError && <Modal showModal={isError} closeModal={closeModal} content={isErrorInfo} />}
    {isLoading && <LoadingModal />}

    <div className={styles.form_outercontainer}>
      <form className={styles.form_container} onSubmit={submitHandler}>
        <h1>Coincap</h1>

        <span className='material-icons'>arrow_backward</span>

        <h2>Sign in to coincap</h2>

        <p>Not your device? Use a private or incognito window to sign in.</p>

        <FormInput
          icon='edit'
          label='Email'
          type='email'
          className="formcard"
          setFormDetails={setFormDetails}
          formName="userEmail"
          placeholder='Your email address'
        />
       

        <SubmitBtn style={{ opacity: isFormValid ? 1 : 0.5 }} text='Continue' />

        <div className={styles.piracyContainer} >
         
          <p onClick={() => navigateHandler('/policy')}>Privacy Policy</p>
        </div>

      </form >

    </div>



  </>

  );
}

export default LoginScreen;