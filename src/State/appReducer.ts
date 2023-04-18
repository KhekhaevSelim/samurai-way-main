import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./Redux-Store";
import {AnyAction} from "redux";
import { authMeThunkCreator } from "./authReducer";

const initialState = {
    initialized : false
}
export const appReducer = (state : initialStateType = initialState, action : AppActionsType ) : initialStateType => {
    switch (action.type) {
        case "SET-INITAILIZED":
            return  {
                ...state,
                initialized : true
            }
        default :
            return state
    }
}

// AC
export const initialazedAC = () => {
    return {
        type : "SET-INITAILIZED"
    }as const
}

// TC
// export const initializeTC = () : ThunkAction<void, AppRootStateType, unknown, AnyAction> => (dispatch) => {
//     dispatch(authMeThunkCreator())
//
// }

// TYPES
type initialStateType = {
    initialized : boolean
}
export type AppActionsType = ReturnType<typeof initialazedAC>