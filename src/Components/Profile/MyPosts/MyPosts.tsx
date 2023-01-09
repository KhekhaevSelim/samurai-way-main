import React from "react";
import p from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
            <div>my posts
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <div className={p.posts}>
                    <Post text="how do you do?"/>
                    <Post text="i miss you"/>
                </div>
            </div>

    )
}