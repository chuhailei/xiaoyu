import fetch from 'isomorphic-fetch'
export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const USER_POST = 'USER_POST'
import tempJson from '../temJson'
const memberInfo = {
    name:'layne',
    integral:5000,
    cardNumber:123456798,
    money:5000
}
// 请求数据
export function requestPost(status = true){
    
    return {
        type:REQUEST_POST,
        loading:status,
        data:[]
    }
}
// 请求结束
export function receivePost(data=[]){
    return {
        type:RECEIVE_POST,
        loading:false,
        data:data
    }
}

// 请求函数
export  const fetchPosts = typs =>dispatch=>{
    
    const types = typs.trim()

    let rsJson = []
    for (let value in tempJson) {
        if (value == types) {
            rsJson =  tempJson[value]           
        }
    }

    dispatch(requestPost())
    return fetch(`https://www.reddit.com/r/reactjs.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePost(rsJson)))
}

// 用户请求用信息
export const userResult = (reserveInfo) =>{
    return {
        type:USER_POST,
        rInfo:reserveInfo
    }
}
// 首页
export const userPost = token =>dispatch =>{
    return fetch('https://www.reddit.com/r/reactjs.json')
        .then(response=>response.json())
        .then(json => dispatch(userResult(memberInfo)))
}
// 预约提交
export const reservePost = obj => dispatch => {
    console.log(obj) 
    // dispatch(requestPost())
    // return fetch(`https://www.reddit.com/r/reactjs.json`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receivePost(memberInfo)))
}
// 返回提交
export const feebbackPost = obj => dispatch =>{
    console.log(obj)
}

// 登录
export const loginPost = (obj,fn) =>dispatch =>{
    console.log(obj)

    return fetch(`https://www.reddit.com/r/reactjs.json`)
      .then(response => response.json())
      .then(json => fn(json))
}