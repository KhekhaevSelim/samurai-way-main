import React from "react";
import p from "./Post.module.css"

type postPropsType = {
    text: string,
    likes: number
}
export const Post = (props:postPropsType) => {
    return (

                    <div className={p.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlN3t6jSZRh1yCgUUPPoXD0blY8by9_JMk_bGC_orS&s" alt=""/>
                        {props.text}
                        <div>
                            <span>like</span> {props.likes}
                        </div>
                    </div>

    )
}