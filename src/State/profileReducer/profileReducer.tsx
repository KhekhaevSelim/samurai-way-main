import {render} from "react-dom";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../Redux-Store";
import {UsersACType} from "../users/usersReducer";
import {profileAPI, userAPI} from "../../api/api";
export type ProfileType = {
    aboutMe : string,
    contacts : {
        vk : string,
        instagram : string,
        gitHub : string
    },
    lookingForAJob : boolean,
    fullName : string,
    userId : number,
    photos : {
        small : string,
        large : string
    }
}
export type PostType = { id: number, message: string, likesCount: number }
export type ProfilePageType = {
    posts: Array<PostType>
    profile : ProfileType | null,
    status : string

}
const initialState = {
    posts: [
        {id: 1, message: "how do you do?", likesCount: 12},
        {id: 2, message: "i miss you", likesCount: 9}
    ],
    profile : null,
    status : ""
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    if (action.type === "addPost") {
      const newPostText = {id : 3, message : action.newText, likesCount: 2}
        return {...state, posts : [newPostText,...state.posts]}
    }
      else if (action.type === "setUserProfile") {
          state = {...state, profile : action.profile}
        }
      else if (action.type === "setStatus") {
          state = {...state, status : action.status}
    }

    return state
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

export const addPostAC = (postText: string) => {
    return {type: "addPost", newText: postText} as const
}
export const setUserProfile = (profile : ProfileType) => {

    return {type: "setUserProfile", profile} as const
}
export const setStatus = (status: string) => {

    return {type: "setStatus", status} as const
}

export const getUserProfileThunkCreator = (userId : number) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return async (dispatch, getState) => {
       let response = await profileAPI.getProfile(userId)
          dispatch(setUserProfile(response.data))
}}
export const getStatusThunkCreator = (userId : number) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return async (dispatch, getState)=> {
       let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}
export const updateStatusThunkCreator = (status : string) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return async (dispatch, getState)=> {
       let response = await profileAPI.updateStatus(status)
          if(response.data.resultCode === 0){}
            dispatch(setStatus(status))
    }
}
//data, messages, fieldsErrors, resultCode