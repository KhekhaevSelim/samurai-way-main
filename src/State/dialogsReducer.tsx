
export type DialogsPageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
    newMessageText : string
}
export type MessagesType = { id: number, message: string }
export type UsersType = { id: number, name: string }
const initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are yo"}
    ],
    users: [
        {id: 1, name: "Saleh"},
        {id: 2, name: "Maret"}
    ],
    newMessageText : ""
}

export const dialogsReducer = (state : DialogsPageType = initialState, action : dialogsACtype ) : DialogsPageType => {
    if(action.type === "newMessageText") {
        state = {...state, newMessageText : action.newMessageText}
    } else if (action.type ==="addNewMessageText") {
        let newMessage = {
            id : 3,
            message: state.newMessageText
        }
        state = {...state, messages : [...state.messages, newMessage]}
        state.newMessageText = ""

    }
    return state
}
type dialogsACtype = ReturnType<typeof newMessageTextAC> | ReturnType<typeof addNewMessageTextAC>

export const newMessageTextAC = (newMessageText: string) => {
    return {type: "newMessageText", newMessageText : newMessageText}as const
}
export const addNewMessageTextAC = () => {
    return {type: "addNewMessageText"}as const
}