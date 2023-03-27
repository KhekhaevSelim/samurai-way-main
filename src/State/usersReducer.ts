import {Dispatch} from "redux";
import {userAPI} from "../api/api";
import {AppRootStateType} from "./Redux-Store";
import {ThunkAction} from "redux-thunk";

export type UsersStateType = {
    users : Array<UsersType>
    pageSize : number
    totalUsersCount : number
    currentPage : number
    isFetching : boolean
    followingProgress : Array<number>
}
export type UsersType = {
    id : number ,
    "photos": {
        "small": null | string,
        "large": null | string
    }, follow : boolean, name : string, country : string, city : string, status : string
}
const initialState = {
    users : [],
    pageSize : 10,
    totalUsersCount : 50,
    currentPage: 1,
    isFetching : false,
    followingProgress : []
}
export const usersReducer = (state : UsersStateType = initialState, action : UsersACType) : UsersStateType => {
    switch(action.type) {
        case "FOLLOW" :
            return {...state, users : state.users.map(el=> el.id === action.payload.userId ? {...el, follow : action.payload.follow} : el)}
        case "UNFOLLOW":
            return {...state, users : state.users.map(el=> el.id === action.payload.userId ? {...el, follow : action.payload.follow} : el)}
        case "SET-USERS" :
            return {...state, users : [...action.payload.users]}
        case "SET-CURRENT-PAGE" :
            return {...state, currentPage : action.payload.page}
        case "SET-TOTAL-USERS-COUNT" :
            return {...state, totalUsersCount : action.payload.totalCount}
        case "IS-FETCHING" :
            return {...state, isFetching : action.payload.fetching}
        case "FOLLOWING-PROGRESS" :
            return {...state, followingProgress : action.payload.followingProgress ?
                    [...state.followingProgress, action.payload.userId]
                    :
                    state.followingProgress.filter(id=> id !== action.payload.userId)

            }
        default :
            return state
    }
}



export type UsersACType = ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> |

    ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setFetching> | ReturnType<typeof setFollowingProgress>
export const setFetching = (fetching : boolean) => {
    return {
        type : "IS-FETCHING",
        payload : {
            fetching
        }
    }as const
}
    export const setTotalUsersCount = (totalCount : number ) => {
    return {
        type : "SET-TOTAL-USERS-COUNT",
        payload : {
            totalCount
        }
    } as const
}
export const setCurrentPage = (page : number ) => {
    return {
        type : "SET-CURRENT-PAGE",
        payload : {
            page
        }
    } as const
}
export const follow = (userId : number) => {
    return {
        type : "FOLLOW",
        payload : {
            userId,
            follow : true
        }
    }as const
}
export const unFollow = (userId : number) => {
    return {
        type : "UNFOLLOW",
        payload : {
            userId,
            follow : false
        }
    }as const
}

export const setUsers = (users : Array<UsersType>) => {
    return {
        type : "SET-USERS",
        payload : {
           users
        }
    }as const
}
export const setFollowingProgress = (followingProgress : boolean, userId : number) => {
    return {
        type : "FOLLOWING-PROGRESS",
        payload : {
            followingProgress,
            userId
        }
    }as const
}

export const getUsersThunkCreator = (currentPage : number, pageSize : number ) : ThunkAction<void, AppRootStateType, unknown, UsersACType> => {
    return (dispatch , getState) => {
        dispatch(setFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items))
            dispatch(setFetching(false))
    })
}}
export const unfollowThunkCreator = (userId: number) : ThunkAction<void, AppRootStateType, unknown, UsersACType> => {
    return (dispatch , getState) => {
        dispatch(setFollowingProgress(true, userId))
        userAPI.unFollow(userId).then(response=> {
            dispatch(setFollowingProgress(false, userId))
            if(response.data.resultCode === 0){
               dispatch(unFollow(userId))
            }
        })
    }}
export const followThunkCreator = (userId: number) : ThunkAction<void, AppRootStateType, unknown, UsersACType> => {
    return (dispatch , getState) => {
        dispatch(setFollowingProgress(true, userId))
        userAPI.follow(userId).then(response=> {
            dispatch(setFollowingProgress(false, userId))
            if(response.data.resultCode === 0 ){
               dispatch(follow(userId))
            }
        })
    }}