import pi from "./ProfileInfo.module.css"
import React from "react";
import {ProfileType} from "../../../State/profileReducer";
import Preloader from "../../Preloader";
type ProfileInfoProps = {
    profile : ProfileType | null
}
export const ProfileInfo = (props: ProfileInfoProps) => {

    return (
        <div>
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000"
                    alt=""/>
            </div>
            <div className={pi.UserProfileContainer}>
                <div>
                    <img src={props.profile?.photos?.small} alt="" style={{ width : "100px", height : "100px"}}/>
                     <p>{props.profile?.fullName}</p>
                </div>
               <div className={pi.about}>
                   <p>{props.profile?.aboutMe}</p>
                   <p>{props.profile?.contacts.vk}</p>
                   <p>{props.profile?.contacts.instagram}</p>
               </div>
            </div>
            <div className={pi.info}>ava + description</div>
        </div>
    )
}