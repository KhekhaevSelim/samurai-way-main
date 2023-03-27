import React from "react";
import p from "./Profile.module.css"
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../State/profileReducer";

type ProfilePropsType = {
    profile : ProfileType | null,
    // setUserProfile : (profile : ProfileType) => void

}

export const Profile = (props : ProfilePropsType) => {

    return (
        <div className={p.profile}> 
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
            {/*<MyPosts  newPostText={props.newPostText}  postData={props.postData} />*/}
        </div>
    )
}