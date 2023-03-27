import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../State/Redux-Store";
import {authMeThunkCreator, AuthUserDataType, SetUserDataAC} from "../../State/authReducer";
import { Dispatch } from "redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
      this.props.authMeThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}


export type HeaderContainerPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapStateToPropsType = {
    isAuth: boolean,
    login : string | null
}
type MapDispatchToPropsType = {
    authMeThunkCreator : () => void
}

let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        login : state.authReducer.login
    }
}

export default connect(MapStateToProps, {authMeThunkCreator})(HeaderContainer)
