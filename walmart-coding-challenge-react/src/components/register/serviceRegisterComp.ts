import axios from 'axios'
import { IAppState, IUser } from '../../redux/stateStructure'
import { url } from '../../redux/service'

/**
 * @author revature.matthew.precilio
 *
 * Handles async request to register the user.
 *
 * @returns if username is taken, returns -1
 *          if email is taken, returns -2
 */
export const axiosRegister = async (username: string, password: string, fname: string, lname: string, dob: string, address: string, email: string) => {
  const loginResult = await axios.post(`${url}/login-service/register`, {
    username: username,
    password: password,
    fname: fname,
    lname: lname,
    dob: dob,
    address: address,
    email: email
  })
  const loginData: IUser = loginResult.data
  if (loginData.userId === -1 || loginData.userId === -2) {
    const emptyList: IUser[] = []
    const appState: IAppState = {
      loggedUser: loginData,
      userList: emptyList
    }
    return appState
  }

  const usersResult = await axios.get(`${url}/user-service/get-all-users`)
  const usersData: IUser[] = usersResult.data
  const appState: IAppState = {
    loggedUser: loginData,
    userList: usersData
  }
  return appState
}

/**
 * @author revature.matthew.precilio
 *
 * Verifies that the email matches the pattern xxxx@xxxx.
 *
 * @returns True if it matches the specified pattern, else false
 */

export const emailChecker = (email: string) => {
  let isEmail = false
  if (!email) return isEmail
  if (!email.includes('.') || !email.includes('@')) return isEmail
  const emailSubStr = email.substr(email.indexOf('@'))
  if (!emailSubStr.includes('.')) return isEmail
  isEmail = true
  return isEmail
}
