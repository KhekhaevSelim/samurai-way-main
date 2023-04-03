import React, {ChangeEvent} from 'react';
import d from "./Dialogs.module.css"
import { DialogsPropsType } from './DialogsContainer';
import {Message} from "./Message/Message";
import {User} from "./Users/Users";
import {Redirect} from "react-router-dom";


// type DialogsPropsType = {
// //     messagesData : Array<MessageDataType>
// //     usersData : Array<UsersDataType>
// //     // dispatch : (action :ActionsTypes ) => void
// //     newMessage : string
// //     onChangeNewMessageText: (body : string) => void
// //     addMessage : (newMessage : string) => void
// //
// // }
// // type MessageDataType = {id: number, message: string }
// // type UsersDataType = {id: number, name: string}
const Dialogs = (props:DialogsPropsType) => {
   const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
       props.onChangeNewMessageText(body)
   // props.dispatch(newMessageTextAC(e.currentTarget.value))
   }
    const addMessage = (newMessage : string) => {
       props.addMessage()
// props.dispatch(addNewMessageTextAC(props.newMessage))
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
                <div>
                <textarea className={d.textArea} value={props.dialogsPage.newMessageText} onChange={onChangeNewMessageText}></textarea>
                <button className={d.addBtn} onClick={()=>addMessage(props.dialogsPage.newMessageText)}>add</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;