import React, {Component, ComponentType} from "react";
import {connect} from "react-redux";
import {
    follow, followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage, setFetching,
    setFollowingProgress,
    setTotalUsersCount,
    setUsers,
    unFollow, unfollowThunkCreator, UsersACType,
    UsersType
} from "../../State/users/usersReducer";
import {compose, Dispatch} from "redux";
import {AppRootStateType} from "../../State/Redux-Store";
import axios from "axios";
import Users from "./Users";
import { userAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {
    getCurrentPage, getFollowingProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers
} from "../../State/users/usersSelector";


class UsersAPIcomponent extends Component <UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    setCurrentPage = (page: number) => {
        this.props.getUsersThunkCreator(page,this.props.pageSize)
    }


    render() {

        return (
            <Users
                isFetching={this.props.isFetching}
                users={this.props.users}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     follow={this.props.follow}
                     totalUsersCount={this.props.totalUsersCount}
                     unFollow={this.props.unFollow}
                     setCurrentPage={(page)=>this.setCurrentPage(page)}
                   followingProgress={this.props.followingProgress}
                   setFollowingProgress={this.props.setFollowingProgress}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}
                     portionSize={this.props.portionSize}

            />
        );
    }
}

type MapStateType = {
    users : Array<UsersType>
    pageSize : number
    totalUsersCount : number
    currentPage : number
    isFetching : boolean
    followingProgress : Array<number>
    portionSize : number
}
type MapDispatchType = {
    follow : (userId : number) => void
    unFollow : (userId: number) => void
    setUsers : (users : Array<UsersType>) => void
    setCurrentPage : (page : number) => void
    setTotalUsersCount : ( totalCount : number ) => void
    setFetching : (fetching : boolean) => void
    setFollowingProgress : (followingProgress: boolean, userId : number) => void
    getUsersThunkCreator : ( currentPage : number, pageSize : number  ) => void
    unfollowThunkCreator : (userId: number) => void
    followThunkCreator : (userId: number) => void
}

export type UsersPropsType = MapStateType & MapDispatchType
const mapStateToUsers = (state : AppRootStateType) : MapStateType => {
    return {
        users :  getUsers(state),
        pageSize : getPageSize(state),
        totalUsersCount : getTotalUsersCount(state),
        currentPage : getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingProgress : getFollowingProgress(state),
        portionSize : getPortionSize(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToUsers, {
        follow,
        unFollow,
        setUsers ,
        setCurrentPage ,
        setTotalUsersCount,
        setFetching,
        setFollowingProgress,
        getUsersThunkCreator,
        unfollowThunkCreator,
        followThunkCreator

    }),
    withAuthRedirect
)(UsersAPIcomponent)
