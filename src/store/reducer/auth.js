import *as actions from '../action/actionTypes';

const initailState ={
    currentUser:null,
    loading:false,
    error:null,
    authPath:false,
    authCheck:false
    
}

const authStart =(state,action)=>{
    return{
        ...state,
        loading:true,
    }
}
const authSuccess =(state,action)=>{
    return{
        ...state,
        currentUser:action.currentUser,
        loading:false,
        error:null,
        authPath:action.authPath
    }
}
const authFail =(state,action)=>{
    return{
        ...state,
        error:action.error,
        loading:false
    }
}
const authCheck =(state,action)=>{
    return{
        ...state,
        authCheck:action.payload
    }
}



const reducer =(state = initailState,action)=>{
    switch (action.type) {
        case actions.AUTH_START:return authStart(state,action)
        case actions.AUTH_SUCCESS:return authSuccess(state,action)
        case actions.AUTH_FAIL:return authFail(state,action)
        case actions.AUTH_CHECK:return authCheck(state,action)
        default:
            return state
    }
}

export default reducer