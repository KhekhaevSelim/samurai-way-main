import {connect} from "react-redux";
import {AppRootStateType} from "../State/Redux-Store";
import {ComponentType} from "react";
import {Redirect} from "react-router-dom";

type MapStateToPropsType = {
    isAuth : boolean
}
let MapStateToProps = ( state : AppRootStateType) : MapStateToPropsType => {
    return {
        isAuth : state.authReducer.isAuth
    }
}
export function withAuthRedirect <T>(Component : ComponentType<T>)  {
    const RedirectComponent = (props : MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }
    
    let ConnectedRedirectComponent = connect(MapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}