import { ActionType } from "./actionTypes"
import { Dispatch } from "react";
import { SetState } from './actions'
import { IAppState } from "./stateStructure";


export const login = (userData: IAppState)=>{
    return (dispatch: Dispatch<SetState>) => {
        dispatch({
            type: ActionType.LOGIN,
            payload: userData
        })
    }
}

export const register = (userData : IAppState)=>{
    return (dispatch: Dispatch<SetState>) => {
        dispatch({
            type: ActionType.REGISTER,
            payload: userData
        })
    }
}

export const update = (userData : IAppState)=>{
    return (dispatch: Dispatch<SetState>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: userData
        })
    }
}

export const logout = ()=>{
    return (dispatch: Dispatch<SetState>) => {
        dispatch({
            type: ActionType.LOGOUT
        })
    }
}
