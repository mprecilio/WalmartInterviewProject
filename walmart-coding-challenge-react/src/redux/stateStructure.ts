
export interface IAppState{
  loggedUser: IUser
  userList: IUser[]
}

export interface IUser{
  userId: number
  username: string
  fname: string
  lname: string
  dob: Date
  address: string
  profilePhoto: string
}
