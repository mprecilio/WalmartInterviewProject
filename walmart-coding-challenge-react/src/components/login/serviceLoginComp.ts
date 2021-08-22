import axios from 'axios'
import { IAppState, IUser } from '../../redux/stateStructure'
import { url } from '../../redux/service'

export const axiosLogin = async (username: string, password: string) => {
  const loginResult = await axios.post(`${url}/login-service/login`, {
    username: username,
    password: password
  })
  const loginData: IUser = loginResult.data
  if (loginData.userId === -1) return null

  const usersResult = await axios.get(`${url}/user-service/get-all-users`)
  const usersData: IUser[] = usersResult.data
  const appState: IAppState = {
    loggedUser: loginData,
    userList: usersData
  }
  return appState
}
