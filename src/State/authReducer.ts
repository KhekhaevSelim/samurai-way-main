import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./Redux-Store";
import {UsersACType} from "./usersReducer";
import {authAPI} from "../api/api";


export type AuthUserDataType = {
    userId : null | string
    email : null | string
    login : null | string
    isAuth : boolean

}
export const authUserData = {
    userId : null ,
    email : null ,
    login : null,
    isAuth : false
}
export const authReducer = ( state : AuthUserDataType = authUserData, action : SetUserDataAC) : AuthUserDataType => {
    switch (action.type){
        case "SET-USER-DATA" :
            return {
                ...state,
                ...action.userData,
                isAuth : true
            }
        default :
            return state
    }
}

export type SetUserDataAC = ReturnType<typeof SetUserDataAC>
export const SetUserDataAC = ( userData : AuthUserDataType ) => {
    return {
        type : "SET-USER-DATA",
        userData
    }as const
}

export const authMeThunkCreator = () : ThunkAction<void, AppRootStateType, unknown,SetUserDataAC > =>{
    return (dispatch,getState) => {
        authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetUserDataAC(response.data.data))
                }

            }
        )
    }
}