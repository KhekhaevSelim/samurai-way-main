import React, {ComponentType} from 'react';
import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {addNewMessageTextAC, DialogsPageType, newMessageTextAC} from "../../State/dialogsReducer";
import {AppRootStateType} from "../../State/Redux-Store";
import { withAuthRedirect } from '../../HOC/WithAuthRedirect';

type MapStatePropsType = {
    dialogsPage : DialogsPageType
}

type MapDispatchPropsType = {
    onChangeNewMessageText : (body : string) => void
    addMessage: () => void
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType
let mapStateToDialogProps = (state :AppRootStateType ) : MapStatePropsType => {
    return {
        dialogsPage : state.dialogsReducer,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        onChangeNewMessageText : (body : string) => { dispatch(newMessageTextAC(body)) },
        addMessage : () => { dispatch(addNewMessageTextAC()) }
    }
}

export default compose<ComponentType>(
    connect(mapStateToDialogProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)