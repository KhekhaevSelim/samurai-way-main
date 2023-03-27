import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunk from "redux-thunk"
let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
export default store;