import React, {Component, ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../State/profileReducer/profileReducer";
import {AppRootStateType} from "../../State/Redux-Store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends Component <WithRouterComponentType> {
    componentDidMount() {
        let userId : number = +this.props.match.params.userId
        if(!userId){
            userId = 28058
        }
        console.log(userId)
       this.props.getUserProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }
    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusThunkCreator}/>
        );
    }
}
type PathParamsType = {
    userId : string
}
type WithRouterComponentType = RouteComponentProps<PathParamsType> & ProfileContainerProps
type MapStateToPropsType = {
    profile : ProfileType | null
    status : string
}
type MapDispatchToPropsType = {
    getUserProfileThunkCreator : (userId : number) => void
    getStatusThunkCreator : (userId : number) => void
    updateStatusThunkCreator : (status : string) => void
}

type ProfileContainerProps = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state : AppRootStateType) : MapStateToPropsType => {
    return {
        profile : state.profileReducer.profile,
        status : state.profileReducer.status
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfileThunkCreator,getStatusThunkCreator,updateStatusThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
