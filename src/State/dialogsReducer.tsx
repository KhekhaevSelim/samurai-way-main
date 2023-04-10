
export type DialogsPageType = {
    messages: Array<MessagesType>
    users: Array<UsersType>
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
    ]
}

export const dialogsReducer = (state : DialogsPageType = initialState, action : dialogsACtype ) : DialogsPageType => {
   switch (action.type){
       case "addNewMessageText" :
           const newMessage = { id : 2, message : action.message }
           return {...state, messages : [...state.messages, newMessage] }
       default :
           return state
   }
}


// ACTION CREATORS
export const addNewMessageAC = (message : string) => {
    return {type: "addNewMessageText", message}as const
}

//TYPES
type dialogsACtype = ReturnType<typeof addNewMessageAC>