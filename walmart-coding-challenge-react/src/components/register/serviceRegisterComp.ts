import axios from 'axios';
import { IAppState, IUser } from '../../redux/stateStructure';
import { url } from '../../redux/service';

export const axiosRegister = async (username: string, password: string, fname: string, lname: string, dob: string, address: string, email: string) => {

    const loginResult = await axios.post(`${url}/login-service/register`, {
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

    const usersResult = await axios.get(`${url}/user-service/get-all-users`);
    const usersData : IUser[] = usersResult.data;
    const appState :IAppState = {
        loggedUser : loginData,
        userList : usersData
    }
    return appState;
}