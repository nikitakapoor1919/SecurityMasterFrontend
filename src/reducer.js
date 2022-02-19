import { combineReducers } from "redux";

const initLoginState={loading:false,error:null }
const loginReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN_STARTED':
            return {
                error:null,
                loading:true
                }
        case 'LOGIN_FAILED':
            return {
                error:'Username and password mismatch',
                loading:false
            }
        case 'LOGOUT_COMPLETED':
                return initLoginState;
        default: return state || initLoginState;

    }
}

// const initInboxState = {loading:false,emails:null }
// const inboxReducer = (state,action)=>{
//     switch(action.type){
//         case 'INBOX_LOAD_STARTED':
//             return {
//                 loading:true,
//                 emails:null
//             }
//         case 'INBOX_LOAD_COMPLETED':
//             return {
//                 loading:false,
//                 emails:action.payload
//             }
//         case 'LOGOUT_COMPLETED':
//             return initInboxState;
//         default: return state || initInboxState;

//     }
// }

const initAppState = { loggedIn: false }
const appReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN_COMPLETED':
            return { loggedIn:true,}
        case 'LOGOUT_COMPLETED':
            return {loggedIn:false}
        default: return state || initAppState;

    }
}

const rootReducer= combineReducers({
    app:appReducer,
    loginForm:loginReducer,
    // inbox:inboxReducer
})
export default rootReducer;


