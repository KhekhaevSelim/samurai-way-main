import React from "react";
import { NavLink } from "react-router-dom";
import h from "./Header.module.css"

type HeaderPropsType = {
    isAuth: boolean
    login : string | null
    logout : () => void
}
export const Header = (props : HeaderPropsType) => {
    return (
        <header className={h.header}>
            <img src="https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg" alt=""/>
            <div className={h.loginBlock}>
                {props.isAuth ?
               <div>{props.login} <button onClick={props.logout}>logout</button></div>
                :
                    <NavLink to="/login">
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}
