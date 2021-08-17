import axios from 'axios';

const instance = axios.create({
    withCredentials: true
});

export const axiosReset = async (username: string, password: string, token: string) => {

    const resetResult = await instance.put('http://localhost:9005/login-service/reset-pass', {
        "username": username,
        "password": password,
        "token":token
    });
    const resetData: number = resetResult.data;
    return resetData;
}