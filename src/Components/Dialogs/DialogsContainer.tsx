import React, {ComponentType} from 'react';
import {compose, Dispatch} from "redux";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {addNewMessageAC, DialogsPageType} from "../../State/dialogsReducer";
import {AppRootStateType} from "../../State/Redux-Store";
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

type MapStatePropsType = {
    dialogsPage : DialogsPageType
}

type MapDispatchPropsType = {
    addMessage: (message : string) => void
}
export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType
let mapStateToDialogProps = (state :AppRootStateType ) : MapStatePropsType => {
    return {
        dialogsPage : state.dialogsReducer,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
    return {
        addMessage : (message : string) => { dispatch(addNewMessageAC(message)) }
    }
}

export default compose<ComponentType>(
    connect(mapStateToDialogProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)