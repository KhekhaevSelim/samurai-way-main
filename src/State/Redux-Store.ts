import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import { usersReducer } from "./users/usersReducer";
import { authReducer } from "./authReducer";
import { reducer} from "redux-form"
import thunk from "redux-thunk"
import { appReducer } from "./appReducer";
let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    form : reducer,
    appReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
export default store;