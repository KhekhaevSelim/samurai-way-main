import React from "react";
import p from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={p.profile}>
            <img
                src="https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000"
                alt=""/>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}