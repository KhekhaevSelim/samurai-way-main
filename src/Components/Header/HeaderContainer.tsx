import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../State/Redux-Store";
import {authMeThunkCreator, logout} from "../../State/authReducer";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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
    logout : () => void
}

let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        login : state.authReducer.login
    }
}

export default connect(MapStateToProps, {authMeThunkCreator,logout})(HeaderContainer)
