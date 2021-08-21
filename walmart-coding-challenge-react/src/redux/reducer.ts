import { ActionType } from "./actionTypes";
import { IAppState } from "./stateStructure";
import { SetState } from "./actions";

const initialState: IAppState | null = null;



export const loginReducer = (state: IAppState | null = initialState, action: SetState) => {
    switch (action.type) {
        case ActionType.LOGIN:
            console.log("In login reducer: " + action)
            return action.payload;
        case ActionType.REGISTER:
            console.log("In register reducer: " + action)
            return action.payload;
        case ActionType.UPDATE:
            console.log("In update reducer: " + action)
            return action.payload;
        case ActionType.LOGOUT:
            console.log("In logout reducer: " + action)
            return null;
        default:
            return state;
    }
}
