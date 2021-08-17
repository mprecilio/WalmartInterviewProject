import axios from "axios";
import { IAppState, IUser } from "./stateStructure";

//Used for ease of exporting, these are the different functions in the file
export const service = {
    login
};

//Allowing use to send our credentials / cookies
const instance = axios.create({
    withCredentials: true
  });


  //EXAMPLE OF A SERVICE REQUEST TO THE BACKEND
  async function login(username: String, password: String):Promise<IAppState|null> {
    const response = await instance.post(
        "http://localhost:9005/login-service/login" ,
        {
            username: username,
            password: password
        }
    );
    const axiosUserData:IUser = response.data;
    console.log(axiosUserData);
    if(axiosUserData.userId !== -1) {
        const responseAllUsers = await instance.get(
            "http://localhost:9005/user-service/get-all-users"
        );
        const axiosAllUsersData = responseAllUsers.data;
        const appState : IAppState = {
            loggedUser: axiosUserData,
            userList: axiosAllUsersData
        }
        return appState;
    }
    return null;
}


// export const userServiceUrl:string = `http://localhost:9082`
export const userServiceUrl:string = `http://localhost:9005`
export const postServiceUrl:string = `http://localhost:9008`