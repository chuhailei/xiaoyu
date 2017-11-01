import React,{Component} from 'react';
import Title from './title';
import {Button} from 'antd-mobile';
import {Link} from 'react-router-dom'

export default function Result({match,location}){
    const title = new URLSearchParams(location.search).get('id') == 'success'?'绑定成功,即将跳转到我们的服务页面':'绑定失败,没有查到会员信息';
    console.log(location)
    return(
        <div>
            <Title data={title}/>
            <div></div>
        </div>
    )
}