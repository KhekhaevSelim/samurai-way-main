import React, {ChangeEvent, RefObject} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import {BrowserRouter, Route, Router} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login";


const App = () => {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/login"} render={()=><Login/>}/>
                    <Route path={"/profile/:userId?"} render={()=> <ProfileContainer />}/>
                    <Route path={"/dialogs"} render={()=> <DialogsContainer/>}/>
                    <Route path={"/news"} render={()=> <News/>}/>
                    <Route path={"/music"} render={()=> <Music/>}/>
                    <Route path={"/setting"} render={()=> <Setting/>}/>
                    <Route path={"/users"} render={()=> <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
