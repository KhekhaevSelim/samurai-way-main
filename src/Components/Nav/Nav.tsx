import React from "react";
import n from "./Nav.module.css"
import {NavLink} from "react-router-dom";
export const Nav = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}><NavLink to={"/profile/"} activeClassName={n.active}>profile</NavLink></div>
            <div className={n.item}><NavLink to={"/dialogs"} activeClassName={n.active}>message</NavLink></div>
            <div className={n.item}><NavLink to={"/news"} activeClassName={n.active}>news</NavLink></div>
            <div className={n.item}><NavLink to={"/music"} activeClassName={n.active}>music</NavLink></div>
            <div className={n.item}><NavLink to={"/setting"} activeClassName={n.active}>setting</NavLink></div>
            <div className={n.item}><NavLink to={"/users"} activeClassName={n.active}>find users</NavLink></div>
        </nav>
    )
}