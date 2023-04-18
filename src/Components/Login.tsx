import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../utils/fromControl/FormsControl";
import {required} from "../utils/validators/validators";
import {login} from "../State/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../State/Redux-Store";
import style from "../../src/Components/Profile/Profile.module.css"

const Login = (props : LoginPropsType) => {
    const onSubmit = (formData:LoginFormPropsType) => {
    props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <div>
           <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type LoginFormPropsType = {
    email : string,
    password : string,
    rememberMe: boolean
}
const LoginForm = (props : InjectedFormProps<LoginFormPropsType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/>
            </div>
            {props.error && <div className={style.SummaryErrorValidatorLogin}>{props.error}</div>}
            <div>
                <button>log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormPropsType>({
    form : "login"
})(LoginForm)

type MapStateToPropsType = {
    isAuth : boolean
}
const MapStateToProps = (state : AppRootStateType) : MapStateToPropsType => {
    return  {
        isAuth : state.authReducer.isAuth
    }
}
export type MapDispatchToPropsType = {
    login : (email: string, password: string, rememberMe : boolean) => void
}
type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType
export default connect(MapStateToProps,{login})(Login);