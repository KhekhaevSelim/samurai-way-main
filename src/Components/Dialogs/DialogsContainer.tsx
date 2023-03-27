import React from 'react';
import {Dispatch} from "redux";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {addNewMessageTextAC, DialogsPageType, newMessageTextAC} from "../../State/dialogsReducer";
import {AppRootStateType} from "../../State/Redux-Store";

type MapStatePropsType = {
    dialogsPage : DialogsPageType
    isAuth : boolean
}

type MapDispatchPropsType = {
    onChangeNewMessageText : (body : string) => void
    addMessage: () => void
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType
let mapStateToDialogProps = (state :AppRootStateType ) : MapStatePropsType => {
    return {
        dialogsPage : state.dialogsReducer,
        isAuth : state.authReducer.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        onChangeNewMessageText : (body : string) => { dispatch(newMessageTextAC(body)) },
        addMessage : () => { dispatch(addNewMessageTextAC()) }
    }
}

const DialogsContainer = connect(mapStateToDialogProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;
