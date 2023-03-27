import React from 'react';
import d from "./../Dialogs.module.css"

type MessagePropsType = {
    text: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={d.message}>{props.text}</div>
    )
}

