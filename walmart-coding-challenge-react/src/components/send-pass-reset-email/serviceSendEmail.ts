import axios from 'axios';

const instance = axios.create({
    withCredentials: true
});

export const axiosEmail = async (username: string) => {

    const emailResult = await instance.get(`http://localhost:9005/login-service/send-email/${username}`);
    const emailData: boolean = emailResult.data;

    return emailData;
}