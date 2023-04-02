import IO from 'socket.io-client'
import axios from 'axios'
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_ADMIN = "LOGIN_ADMIN";
export const LOG_ADMIN_IN = 'LOG_ADMIN_IN'
export const LOG_USER_IN = 'LOG_USER_IN'
export const LOGIN_USER = "LOGIN_USER";

/* Admin actions*/

//pure functions to calculate the time remaining

let calculateRemainingTime = (expiryDate) => {
  //getting current time in milliseconds
  const currentTime = new Date().getMilliseconds()
  //getting expiration time in milliseconds
  const adjustExpirationTime = (expiryDate * 60 * 60 * 1000)
  const timeLeft = adjustExpirationTime - currentTime

  return timeLeft
}

let retrievedAdminStoredToken = () => {
  let tokenFromStorage = localStorage.getItem('admin_token')
  let expiryDate = localStorage.getItem('admin_expiry')
  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_expiry')
    localStorage.removeItem('admin')

    return {
      adminToken: "",
      adminExpiresIn: ""
    }
  }

  return {
    adminToken: tokenFromStorage,
    adminExpiresIn: timeLeft
  }
}

export const checkIfAdminIsLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      let response
      //check if token is expired
      let { adminToken, adminExpiresIn } = retrievedAdminStoredToken()

      if (!adminToken) {
        return
      }
      //convert expiresIN backt to hours
      adminExpiresIn = adminExpiresIn / (60 * 60 * 1000)

      localStorage.setItem('admin_token', adminToken)
      localStorage.setItem('admin_expiry', adminExpiresIn)

      let admin = JSON.parse(localStorage.getItem('admin'))

      if (!admin) {
        return
      }

      response = await fetch(`http://localhost:8080/auth/adminbytoken`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        }
      })

      if (response.status == 200) {
        let data = await response.json()
        data.response.adminToken = adminToken
        dispatch({ type: LOG_ADMIN_IN, payload: data.response })
      }

    } catch (err) {

    }
  }
}

export const adminsignup = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`http://localhost:8080/auth/adminsignup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()

        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}

export const adminlogin = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()


        //saving data to local storage
        localStorage.setItem("admin", JSON.stringify(data.response.admin))

        localStorage.setItem("admin_token", JSON.stringify(data.response.adminToken))

        localStorage.setItem("admin_expiry", JSON.stringify(data.response.adminExpiresIn))


        dispatch({ type: LOGIN_ADMIN, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const loadClients = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/users`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        }
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const loadClient = (id) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//admin operating onn admins
export const loadAdmins = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth

    try {
      const response = await fetch(`http://localhost:8080/auth/admins`, {

        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        }
      })

      if (response.status === 404) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }

      }


      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }

    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}

export const deleteAdmin = (id) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth

    try {
      const response = await fetch(`http://localhost:8080/auth/deleteadmin/${id}`, {

        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const loadAdmin = (id) => {

  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth

    try {
      const response = await fetch(`http://localhost:8080/auth/admin/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const updateClient = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/updateuser`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
export const updateAdmin = (data) => {

  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/updateadmin`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const upgradeClient = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { adminToken } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/upgradeuser`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "header": `${adminToken}`
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const emailClient = (data) => {

  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/emailuser`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

/* xxxxxxxxxx   User actions xxxxxxxxxx */


export const confirm = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/verifyemail/${data}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//checking if email exist
export const isEmailExist = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/isemailexist`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}

export const checkAdminCode = (code) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/checkadmincode/${code}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "please check your network"
      }
    }
  }

}

export const emailAdmin = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/emailadmin`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}

export const changeSecretKey = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/changesecretkey`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}

export const resetPassword = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/resetpassword/${data.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

/* utility function  loading coins */






// xxxxxxxx   web client api xxxxxxxx
let retrievedUserStoredToken = () => {
  let tokenFromStorage = localStorage.getItem('user_token')

  let expiryDate = localStorage.getItem('user_expiry')

  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {
    localStorage.removeItem('user_token')
    localStorage.removeItem('user_expiry')
    localStorage.removeItem('user')

    return {
      userToken: "",
      userExpiresIn: ""

    }
  }

  return {
    userToken: tokenFromStorage,
    userExpiresIn: timeLeft
  }
}

export const checkIfUserIsLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      let response
      //check if token is expired
      let { userToken, userExpiresIn } = retrievedUserStoredToken()

      if (!userToken) {
        return
      }
      //convert expiresIN backt to hours
      userExpiresIn = userExpiresIn / (60 * 60 * 1000)

      localStorage.setItem('user_token', userToken)
      localStorage.setItem('user_expiry', userExpiresIn)

      let user = JSON.parse(localStorage.getItem('user'))

      if (!user) {
        return
      }

      response = await fetch(`http://localhost:8080/auth/userbytoken`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })

      if (response.status == 200) {
        let data = await response.json()
        data.response.userToken = userToken
        dispatch({ type: LOG_USER_IN, payload: data.response })
      }

    } catch (err) {

    }
  }
}


export const checkEmail = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/checkemail/${data}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}

//login handler for user on web
export const loginUser = (dataObj) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://localhost:8080/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj)
      })
      if (response.status === 404) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: 'signup'
        }
      }
      if (response.status === 403) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: `signin/${dataObj.email}`
        }
      }
      if (response.status === 300) {

        let data = await response.json()

        return {
          bool: false,
          message: data.response,
          url: `signin/${dataObj.email}`
        }
      }
      if (response.status === 201) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: `verification/${dataObj.email}`
        }
      }
      if (response.status === 202) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: `phonesignup/${dataObj.email}`
        }
      }
      if (response.status === 200) {

        let data = await response.json()

        //saving data to local storage
        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.token))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.expiresIn))

        dispatch({ type: LOGIN_USER, payload: data.response })


        return {
          bool: true,
          message: data.response,
        }

      }
    } catch (err) {
      return {
        bool: false,
        message: err.message,
        url: 'Login'

      }
    }

  }
}
//signup handler for user on web
export const signupUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://localhost:8080/auth/emailsignup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/signup'
        }
      }

      if (response.status === 301) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/signin'
        }
      }

      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }

    }
    catch (err) {
      return {
        bool: false,
        message: err.message
      }
    }
  }
}

//checking if user has verified their email
export const verifiedEmail = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://localhost:8080/auth/confirmuserverification', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: err.message
      }
    }
  }
}

//cancel registeration by user during auth
export const cancelRegisteration = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://localhost:8080/auth/cancelregisteration', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: err.message
      }
    }
  }
}

//phone signup for web client
export const phoneSignup = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://localhost:8080/auth/phone', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: err.message
      }
    }
  }
}


export const phoneVerification = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://localhost:8080/auth/confirmphone', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        //saving data to local storage
        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.token))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.expiresIn))

        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: err.message
      }
    }
  }
}

export const addPaymentMethod = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let response = await fetch(`http://localhost:8080/auth/paymentmethod`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 400) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {

        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch the credentials to redux store to update user
        //dispatch({ type: PAYMENT_METHOD, payload: data.response })

        return {
          bool: true,
          message: data.response
        }
      }

    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: 'network error'
      }
    }

  }
}

export const loadCoins = (pageNumber, no) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      /*
      const options = {
        method: 'GET',
        url: 'http://coingecko.p.rapidapi.com/coins/markets',
        params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
        headers: {
          'X-RapidAPI-Key': '5aad220007msh5169f9b5aa16b14p188ab0jsnecf8563cd59d',
          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
      };
      */
      const response = await axios.get(`htps://api.coigecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${no ? no : 6}&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)


      /*
      http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${no ? no : 6}&page=${pageNumber}&sparkline=false&price_change_percentage=24h`,{
        headers: {
          'X-RapidAPI-Key': '5aad220007msh5169f9b5aa16b14p188ab0jsnecf8563cd59d',
          'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
      }
     
     
     
     
     
     */

      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      return {
        bool: false,
        message: err
      }

    }

  }
}

export const getDetailedCoinData = (coinId) => {

  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch

    try {
      const response = await axios.get(`http://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`)
      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}
export const getCoinMarketChart = (coinId, selectedRange) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await axios.get(`http://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`)

      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      return {
        bool: false,
        message: err
      }

    }

  }
}
export const getCandleChartData = (coinId, days = 1) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch

    try {
      const response = await axios.get(`http://api.coingecko.com/api/v3/coins/${coinId.toLowerCase()}/ohlc?vs_currency=usd&days=${days}`)


      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}



