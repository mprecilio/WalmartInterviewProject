import axios from 'axios'
import { url } from '../../redux/service'

/**
 * @author revature.matthew.precilio
 *
 * Handles async call to send pass reset email. Returns false if username does
 * not exist.
 *
 * @returns False if username does not exist. else true.
 */

export const axiosEmail = async (username: string) => {
  const emailResult = await axios.get(`${url}/login-service/send-email/${username}`)
  const emailData: boolean = emailResult.data

  return emailData
}
