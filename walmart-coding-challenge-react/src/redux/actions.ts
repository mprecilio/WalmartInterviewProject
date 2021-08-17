import { ActionType } from './actionTypes'
import { IAppState } from './stateStructure'


interface Login{
    type: ActionType.LOGIN
    payload: IAppState
}

interface Register{
    type: ActionType.REGISTER
    payload: IAppState
}

interface Logout{
    type: ActionType.LOGOUT
}

export type LoginActions = Login | Register | Logout