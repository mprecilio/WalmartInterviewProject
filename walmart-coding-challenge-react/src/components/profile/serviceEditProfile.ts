import axios from 'axios';
import { IAppState, IUser } from '../../redux/stateStructure';

const instance = axios.create({
    withCredentials: true
});

export const axiosUpdateInfo = async (state: IAppState|null, fname: string, lname: string, dob: string, address:string, profilePhoto:string) => {
    
    
    const loginResult = await instance.put('http://localhost:9005/user-service/update-user-info', {
        "username":state?.loggedUser.username,
        "fname": fname,
        "lname": lname,
        "dob": dob,
        "address": address,
        "profilePhoto":profilePhoto
    });
    const updatedUser: IUser = loginResult.data;
    if (updatedUser.userId === -1) return null;

    const newState : IAppState = Object.assign({}, state, { loggedUser: updatedUser });
    return newState;
}