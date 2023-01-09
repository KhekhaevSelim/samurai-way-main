import React from "react";
import n from "./Nav.module.css"
export const Nav = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}><a>profile</a></div>
            <div className={n.item}><a>message</a></div>
            <div className={n.item}><a>news</a></div>
            <div className={n.item}><a>music</a></div>
            <div className={n.item}><a>setting</a></div>
        </nav>
    )
}