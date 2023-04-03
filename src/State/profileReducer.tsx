import {render} from "react-dom";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./Redux-Store";
import {UsersACType} from "./usersReducer";
import {profileAPI, userAPI} from "../api/api";
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
    newPostText: string,
    profile : ProfileType | null,
    status : string

}
const initialState = {
    posts: [
        {id: 1, message: "how do you do?", likesCount: 12},
        {id: 2, message: "i miss you", likesCount: 9}
    ],
    newPostText: "",
    profile : null,
    status : ""
}
export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    if (action.type === "addPost") {
        let newPost = {
            message: action.newText,
            id: 5,
            likesCount: 0
        }
        state = {...state, posts : [newPost,...state.posts]}
        state.newPostText = ""
    } else if (action.type === "onChangeText") {
        state = {...state, newPostText: action.newPostText}
    }
      else if (action.type === "setUserProfile") {
          state = {...state, profile : action.profile}
        }
      else if (action.type === "setStatus") {
          state = {...state, status : action.status}
    }

    return state
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextAC>
    | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

export const addPostAC = (postText: string) => {
    return {type: "addPost", newText: postText} as const
}
export const changeTextAC = (newPostText: string) => {

    return {type: "onChangeText", newPostText: newPostText} as const
}
export const setUserProfile = (profile : ProfileType) => {

    return {type: "setUserProfile", profile} as const
}
export const setStatus = (status: string) => {

    return {type: "setStatus", status} as const
}

export const getUserProfileThunkCreator = (userId : number) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return (dispatch, getState) => {
        profileAPI.getProfile(userId).then(response => {

          dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatusThunkCreator = (userId : number) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return (dispatch, getState)=> {
        profileAPI.getStatus(userId).then(response=> {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatusThunkCreator = (status : string) : ThunkAction<void, AppRootStateType, unknown, ProfileActionsTypes> => {
    return (dispatch, getState)=> {
        profileAPI.updateStatus(status).then(response=> {
          if(response.data.resultCode === 0){}
            dispatch(setStatus(status))
        })
    }
}
//data, messages, fieldsErrors, resultCode