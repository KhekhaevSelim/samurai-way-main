import React from "react";
import p from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLenCreator, maxLength30, required} from "../../../utils/validators/validators";
import {TextArea} from "../../../utils/fromControl/FormsControl";




export const MyPosts = (props : PostsPropsType) => {
    const addPost = (formData: AddPostFormPropsType) => {
       props.addPost(formData.newPost)
    }
    let postRender = props.profilePage.posts.map(post => <Post key={post.id} text={post.message} likes={post.likesCount}/>)
    return (
        <div className={p.postsBlock}><h3>my posts</h3>
            <AddPostFormRedux onSubmit={addPost}/>
            <div className={p.posts}>
                {postRender}
            </div>
        </div>)}

const AddPostForm = (props : InjectedFormProps<AddPostFormPropsType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div> <Field component={TextArea} name={"newPost"} placeholder={"newPost"}
             validate={[required, maxLength30]}
            /> </div>
            <button>add post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm<AddPostFormPropsType>({
    form : "newPost"
})(AddPostForm)

//TYPES
type AddPostFormPropsType = {
    newPost : string
}
