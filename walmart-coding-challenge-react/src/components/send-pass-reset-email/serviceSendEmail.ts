import axios from 'axios'
import { url } from '../../redux/service'

export const axiosEmail = async (username: string) => {
  const emailResult = await axios.get(`${url}/login-service/send-email/${username}`)
  const emailData: boolean = emailResult.data

  return emailData
}
