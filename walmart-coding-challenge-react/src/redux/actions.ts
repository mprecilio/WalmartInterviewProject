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

interface Update{
    type: ActionType.UPDATE
    payload: IAppState
}

interface Logout{
    type: ActionType.LOGOUT
}

export type SetState = Login | Register | Logout | Update