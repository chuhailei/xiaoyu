import React,{Component} from 'react';
import Title from './title';
import Schedule from './schedule.jsx'
import {Link} from 'react-router-dom'

export default function Result({match,location}){

    const title = new URLSearchParams(location.search).get('id') == 'success'?'绑定成功,即将跳转到我们的服务页面':'绑定失败,没有查到会员信息';
    const type = new URLSearchParams(location.search).get('id') == 'success'?'成功':'失败';
    const btnText = new URLSearchParams(location.search).get('id') == 'success'?'跳转':'返回';
    const url = new URLSearchParams(location.search).get('id') == 'success'?'/':'/login/index';
    const status = {
        type:type,
        result:2
    }
    return(
        <div className="f26">
            <Title data={title}/>
            <Schedule status = {status}/>
            <Link to={url}><div className="tx-center mg-bt15"><button className="btn btn-primary">{btnText}</button></div></Link>
        </div>
    )
}