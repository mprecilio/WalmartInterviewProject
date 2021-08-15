import axios from 'axios';
import { IAppState, IUser } from '../../redux/stateStructure';

const instance = axios.create({
    withCredentials: true
});

export const axiosLogin = async (username: string, password: string) => {

    const loginResult = await instance.post('http://localhost:9005/login-service/login', {
        "username": username,
        "password": password
    });
    const loginData: IUser = loginResult.data;
    if (loginData.userId === -1) return null;

    const usersResult = await instance.get('http://localhost:9005/user-service/get-all-users');
    const usersData : IUser[] = usersResult.data;
    const appState :IAppState = {
        loggedUser : loginData,
        userList : usersData
    }
    return appState;
}