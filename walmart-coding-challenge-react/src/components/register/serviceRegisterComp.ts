import axios from 'axios';
import { IAppState, IUser } from '../../redux/stateStructure';

const instance = axios.create({
    withCredentials: true
});

export const axiosRegister = async (username: string, password: string, fname: string, lname: string, dob: string, address: string, email: string) => {

    const loginResult = await instance.post('http://localhost:9005/login-service/register', {
        "username": username,
        "password": password,
        "fname":fname,
        "lname":lname,
        "dob":dob,
        "address":address,
        "email":email
    });
    const loginData: IUser = loginResult.data;
    if (loginData.userId === -1 || loginData.userId === -2) {
        const emptyList : IUser[] =  [];
        const appState :IAppState = {
            loggedUser : loginData,
            userList : emptyList
        }
        return appState;
    }

    const usersResult = await instance.get('http://localhost:9005/user-service/get-all-users');
    const usersData : IUser[] = usersResult.data;
    const appState :IAppState = {
        loggedUser : loginData,
        userList : usersData
    }
    return appState;
}