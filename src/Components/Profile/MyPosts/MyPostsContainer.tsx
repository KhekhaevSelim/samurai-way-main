import React from "react";

import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../State/Redux-Store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, ProfilePageType} from "../../../State/profileReducer";

type MapDispatchToPostsProps = {
    addPost : (newPostText:string) => void
}
type MapStateToPostsProps = {
    profilePage : ProfilePageType
}

export type PostsPropsType =  MapStateToPostsProps & MapDispatchToPostsProps
let mapStateToPostsProps = (state :AppRootStateType ) : MapStateToPostsProps => {
    return {
      profilePage : state.profileReducer
    }
}
let mapDispatchToPostsProps = (dispatch : Dispatch) : MapDispatchToPostsProps => {
    return {
        addPost : (newPostText : string) => { dispatch(addPostAC(newPostText)) },
    }
}

const MyPostsContainer = connect(mapStateToPostsProps,mapDispatchToPostsProps)(MyPosts)

export default MyPostsContainer;