import React, {ChangeEvent, ComponentType, RefObject} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import {BrowserRouter, Route, Router, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login";
import {compose} from 'redux';
import {connect} from "react-redux";
import {authMeThunkCreator, logout} from "./State/authReducer";
import {AppRootStateType} from "./State/Redux-Store";
import Preloader from "./Components/Preloader";


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.authMeThunkCreator()
    }
    render() {
        console.log(this.props.initialized)
      if(!this.props.initialized){
          return <Preloader isFetching={true}/>
      } else {
        return (
            <BrowserRouter>
                <div className={"app-wrapper"}>
                    <HeaderContainer/>
                    <Nav/>
                    <div className={"app-wrapper-content"}>
                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/setting"} render={() => <Setting/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }}
}

const MapStateToProps = (state : AppRootStateType) : MapStateToPropsType => {
    return  {
        initialized : state.appReducer.initialized
    }
}
export default compose<ComponentType>(
    connect(MapStateToProps, {authMeThunkCreator})
)(App)

// TYPES
type MapStateToPropsType = {
    initialized : boolean
}
type MapDispatchToPropsType = {
    authMeThunkCreator : () => void
}
export type AppPropsType = MapDispatchToPropsType & MapStateToPropsType