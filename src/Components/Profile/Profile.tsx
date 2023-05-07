import React from "react";
import p from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../State/profileReducer/profileReducer";

type ProfilePropsType = {
    profile : ProfileType | null,
    status : string,
    updateStatus : (status : string) => void
}

export const Profile = (props : ProfilePropsType) => {

    return (
        <div className={p.profile}> 
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
            {/*<MyPosts  newPostText={props.newPostText}  postData={props.postData} />*/}
        </div>
    )
}