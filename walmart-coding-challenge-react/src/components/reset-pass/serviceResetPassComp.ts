import axios from 'axios'
import { url } from '../../redux/service'

/**
 * @author revature.matthew.precilio
 *
 * This component displays the registration page. Once registration data is validated, the
 * user info is stored in the redux store.
 *    -Note the view will change based on the width of the page
 *
 * @returns 1 - reset sucessful, -1 - invalid username or token, -2 - same as previous pass
 */

export const axiosReset = async (username: string, password: string, token: string) => {
  const resetResult = await axios.put(`${url}/login-service/reset-pass`, {
    username: username,
    password: password,
    token: token
  })
  const resetData: number = resetResult.data
  return resetData
}
