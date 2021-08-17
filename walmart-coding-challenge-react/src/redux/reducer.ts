import { combineReducers } from "redux";
import { ActionType } from "./actionTypes";
import { IAppState } from "./stateStructure";
import { LoginActions } from "./actions";

const initialState: IAppState|null = null;



export const loginReducer = (state: IAppState|null = initialState, action: LoginActions)=>{
    switch(action.type){
        case ActionType.LOGIN:
            console.log("In login reducer: " + action)
            return action.payload;
        case ActionType.REGISTER:
            console.log("In register reducer: " + action)
            return action.payload;
        case ActionType.LOGOUT:
            console.log("In logout reducer: " + action)
            return null;
        default:
            return state;
    }
}

//THIS IS A COMBINATION OF ALL REDUCERS IN YOUR SYSTEM, we'll only have one for our example
const rootReducer = combineReducers({
    login : loginReducer,
    // update: updateReducer
})


export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
