// import axios from "axios";
// import { IAppState, IUser } from "./stateStructure";

// //Used for ease of exporting, these are the different functions in the file
// export const service = {
//     login
// };


//   //EXAMPLE OF A SERVICE REQUEST TO THE BACKEND
//   async function login(username: String, password: String):Promise<IAppState|null> {
//     const response = await axios.post(
//         `${url}/login-service/login` ,
//         {
//             username: username,
//             password: password
//         }
//     );
//     const axiosUserData:IUser = response.data;
//     console.log(axiosUserData);
//     if(axiosUserData.userId !== -1) {
//         const responseAllUsers = await axios.get(
//             `${url}/user-service/get-all-users`
//         );
//         const axiosAllUsersData = responseAllUsers.data;
//         const appState : IAppState = {
//             loggedUser: axiosUserData,
//             userList: axiosAllUsersData
//         }
//         return appState;
//     }
//     return null;
// }



export const url : string = "http://3.144.1.64:9001";