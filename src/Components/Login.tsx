import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const Login = () => {
    const onSubmit = (formData:LoginFormPropsType) => {
        console.log(formData)
    }
    return (
        <div>
           <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type LoginFormPropsType = {
    userName : string,
    password : string,
    rememberMe: boolean
}
const LoginForm = (props : InjectedFormProps<LoginFormPropsType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"user name"} name={"userName"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
            </div>
            <div>
                <button>log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormPropsType>({
    form : "login"
})(LoginForm)
export default Login;