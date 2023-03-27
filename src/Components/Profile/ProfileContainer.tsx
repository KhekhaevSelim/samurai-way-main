import React, {Component} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, ProfileType, setUserProfile} from "../../State/profileReducer";
import {AppRootStateType} from "../../State/Redux-Store";
import axios from "axios";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

class ProfileContainer extends Component <WithRouterComponentType> {
    componentDidMount() {
        let userId : number = +this.props.match.params.userId
        if(!userId){
            userId = 1
        }
       this.props.getUserProfileThunkCreator(userId)
    }
    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props}  profile={this.props.profile} />
        );
    }
}
type PathParamsType = {
    userId : string
}
type WithRouterComponentType = RouteComponentProps<PathParamsType> & ProfileContainerProps
type MapStateToPropsType = {
    profile : ProfileType | null
    isAuth : boolean
}
type MapDispatchToPropsType = {
    getUserProfileThunkCreator : (userId : number) => void
}

type ProfileContainerProps = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state : AppRootStateType) : MapStateToPropsType => {
    return {
        profile : state.profileReducer.profile,
        isAuth : state.authReducer.isAuth
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithRouterProfileContainer)
