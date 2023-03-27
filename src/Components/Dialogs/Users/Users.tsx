import React from 'react';
import {NavLink} from 'react-router-dom';
import d from "./../Dialogs.module.css"

type UserPropsType = {
    name: string
    id: number

}
export const User = (props: UserPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={d.user}>
            <NavLink to={path} activeClassName={d.active}>{props.name}</NavLink>
        </div>
    )
}