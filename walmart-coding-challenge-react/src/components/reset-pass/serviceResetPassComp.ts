import axios from 'axios';
import { url } from '../../redux/service';

export const axiosReset = async (username: string, password: string, token: string) => {

    const resetResult = await axios.put(`${url}/login-service/reset-pass`, {
        "username": username,
        "password": password,
        "token":token
    });
    const resetData: number = resetResult.data;
    return resetData;
}