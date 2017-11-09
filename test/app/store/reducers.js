import {combineReducers} from 'redux'
const name = (state="123",action)=>{
    switch(action.type){
        case 'hi':
            return "hello world"
        default:
            return state    
    }
}
const rootReducer = combineReducers({
    name,
})
export default rootReducer