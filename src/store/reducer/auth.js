import *as actions from '../action/actionTypes';

const initailState ={
    currentUser:null,
    loading:false,
    error:null,
    authPath:false
    
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



const reducer =(state = initailState,action)=>{
    switch (action.type) {
        case actions.AUTH_START:return authStart(state,action)
        case actions.AUTH_SUCCESS:return authSuccess(state,action)
        case actions.AUTH_FAIL:return authFail(state,action)
        default:
            return state
    }
}

export default reducer