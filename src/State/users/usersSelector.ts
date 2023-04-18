import {AppRootStateType} from "../Redux-Store";

export const getUsers = (state : AppRootStateType) => {
    return state.usersReducer.users
}

export const getPageSize = (state : AppRootStateType) => {
    return state.usersReducer.pageSize
}
export const getTotalUsersCount = (state : AppRootStateType) => {
    return state.usersReducer.totalUsersCount
}
export const getCurrentPage = (state : AppRootStateType) => {
    return state.usersReducer.currentPage
}
export const getIsFetching = (state : AppRootStateType) => {
    return state.usersReducer.isFetching
}
export const getFollowingProgress = (state : AppRootStateType) => {
    return state.usersReducer.followingProgress
}





