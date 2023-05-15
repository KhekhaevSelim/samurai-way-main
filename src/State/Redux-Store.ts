import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profileReducer/profileReducer";
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
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
export default store;