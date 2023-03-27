import React, {ChangeEvent, RefObject} from "react";
import p from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";




export const MyPosts = (props : PostsPropsType) => {

    const addPost = () => {

        // props.dispatch(addPostAC(props.newPostText))
            props.addPost(props.profilePage.newPostText)
    }

    const onchangeNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value
        // props.dispatch(changeTextAC(newPostText))
props.onchangeNewPostText(newPostText)
    }
    let postRender = props.profilePage.posts.map(post => <Post key={post.id} text={post.message} likes={post.likesCount}/>)
    return (
        <div className={p.postsBlock}><h3>my posts</h3>
            <div>
                <div><textarea onChange={onchangeNewPostText} value={props.profilePage.newPostText } ></textarea></div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={p.posts}>
                {postRender}
            </div>
        </div>

    )
}