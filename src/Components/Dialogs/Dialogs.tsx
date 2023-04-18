import React, {ChangeEvent} from 'react';
import d from "./Dialogs.module.css"
import { DialogsPropsType } from './DialogsContainer';
import {Message} from "./Message/Message";
import {User} from "./Users/Users";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../../utils/fromControl/FormsControl";
import {maxLenCreator, maxLength30, required} from "../../utils/validators/validators";

const Dialogs = (props:DialogsPropsType) => {
    const addMessage = (formData : AddMessageFormPropsType) => {
    props.addMessage(formData.message)
    }
    let userRender = props.dialogsPage.users.map(user=> <User key={user.id} name={user.name} id={user.id}/>)

    let messageRender = props.dialogsPage.messages.map(message => <Message text={message.message}/>)
    return (
        <div className={d.dialogs}>
            <div className={d.users}>
                {userRender}
            </div>
            <div className={d.messages}>
                {messageRender}
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};

//
type AddMessageFormPropsType = {
    message : string
}
const maxLength50 = maxLenCreator(50)
const AddMessageForm = (props : InjectedFormProps<AddMessageFormPropsType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={d.textArea} component={TextArea}
                   validate={[required,maxLength50]}
                   name="message" placeholder="message"></Field>
            <button>add</button>
        </form>
    )
}
const AddMessageReduxForm = reduxForm<AddMessageFormPropsType>({
    form : "message"
})(AddMessageForm)


export default Dialogs;
