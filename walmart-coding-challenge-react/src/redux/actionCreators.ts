import { ActionType } from "./actionTypes"
import { Dispatch } from "react";
import { LoginActions } from './actions'
import { IAppState } from "./stateStructure";


export const login = (userData: IAppState)=>{
    return (dispatch: Dispatch<LoginActions>) => {
        dispatch({
            type: ActionType.LOGIN,
            payload: userData
        })
    }
}

export const register = (userData : IAppState)=>{
    return (dispatch: Dispatch<LoginActions>) => {
        dispatch({
            type: ActionType.REGISTER,
            payload: userData
        })
    }
}

export const logout = ()=>{
    return (dispatch: Dispatch<LoginActions>) => {
        dispatch({
            type: ActionType.LOGOUT
        })
    }
}
