import React, {ComponentType, Suspense} from 'react';
import './App.css';
import {Nav} from "./Components/Nav/Nav";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login";
import {compose} from 'redux';
import {connect, Provider} from "react-redux";
import {authMeThunkCreator} from "./State/authReducer";
import store, {AppRootStateType} from "./State/Redux-Store";
import Preloader from "./Components/Preloader";

const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"))

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.authMeThunkCreator()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader isFetching={true}/>
        } else {
            return (
                <BrowserRouter>
                    <div className={"app-wrapper"}>
                        <HeaderContainer/>
                        <Nav/>
                        <div className={"app-wrapper-content"}>
                            <Route path={"/login"} render={() => <Login/>}/>

                            <Route path={"/profile/:userId?"} render={() => {
                                return (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <ProfileContainer/>
                                    </Suspense>
                                )
                            }}/>
                            <Route path={"/dialogs"} render={() => {
                                return (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <DialogsContainer/>
                                    </Suspense>
                                )}}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/setting"} render={() => <Setting/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                    </div>
                </div>
        </BrowserRouter>
        )
            ;
        }}}

        const MapStateToProps = (state : AppRootStateType) : MapStateToPropsType => {
            return {
                initialized: state.appReducer.initialized
            }
        }
        let AppContainer = compose
            <ComponentType>(
                connect(MapStateToProps, {authMeThunkCreator})
                )(App)
                const MainApp = () => {
                    return  <Provider store={store} >
                    <AppContainer/>
                    </Provider>
                }
                export default MainApp;
                // TYPES
                type MapStateToPropsType = {
                    initialized : boolean
                }
                type MapDispatchToPropsType = {
                    authMeThunkCreator : () => void
                }
                export type AppPropsType = MapDispatchToPropsType & MapStateToPropsType
