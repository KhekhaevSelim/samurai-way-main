import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./Redux-Store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AnyAction} from "redux";
import {initialazedAC} from "./appReducer";


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
                ...action.payload
            }
        default :
            return state
    }
}

export type SetUserDataAC = ReturnType<typeof SetUserDataAC>
export const SetUserDataAC = ( userId : string | null, email : string | null, login : string | null, isAuth : boolean  ) => {
    return {
        type : "SET-USER-DATA",
        payload : {
            userId, email, login,isAuth
        }
    }as const
}

export const authMeThunkCreator = () : ThunkAction<void, AppRootStateType, unknown,AnyAction > => {
    return (dispatch, getState) => {
        return authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(SetUserDataAC(id, email, login, true))
                }
            }
        ).then(()=> {
            dispatch(initialazedAC())
        })
    }
}
export const login = (email: string, password: string, rememberMe : boolean) : ThunkAction<void, AppRootStateType, unknown,AnyAction > =>{
    return (dispatch,getState) => {
        authAPI.login(email,password,rememberMe).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMeThunkCreator())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                    dispatch(stopSubmit("login", {_error : message}))
                }

            }
        )
    }
}
export const logout = () : ThunkAction<void, AppRootStateType, unknown,SetUserDataAC > =>{
    return (dispatch,getState) => {
        authAPI.logout().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetUserDataAC(null, null, null,false))
                }

            }
        )
    }
}