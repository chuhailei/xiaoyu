
import {REQUEST_POST,RECEIVE_POST,RECEIVE_RESERVE,USER_POST} from '../action'
import {combineReducers} from 'redux'

const json = [{
    date:"2017-11-9",
    name:"youzi",
    type:"预约维修"
}]

const recordReducer = (state = {loading:true,data: []},action) => {
    
    switch(action.type){
        case REQUEST_POST:
            return Object.assign({},state)
        case RECEIVE_POST:
            return {loading:action.loading,data:action.data}
        default: 
            return state
    }
}
// 用户信息
const userInfo = (state = {},action) =>{
    switch(action.type){
        case USER_POST:
            return action.rInfo
        default:
        return state    
    }
}

const rootReducer = combineReducers({recordReducer,userInfo})

export default rootReducer