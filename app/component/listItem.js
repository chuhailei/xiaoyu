import React,{Component} from 'react';
import {Icon} from "antd-mobile";
import ListData from "../config.json";

import {Link} from "react-router-dom";
import '../style/iconfont.css';

export default class ListItem extends Component{
    
     render(){
        let List = ListData.list.map((item,key)=>(
            <Link to={"/record?id="+item.id+"&name="+item.name} key={key}><div className="box list">
                <div className="record-li"><i className="anticon icon-filetext1"></i>{item.title}</div>
                <div><Icon type="right" /></div>
            </div></Link>
            
         ))
            return(
                <div className="f26 mg-bt15">
                    {List}
                    <Link to="/service/reserve">
                        <div className="box list">
                            <div className="record-li"><i className="anticon icon-clockcircleo"></i>预约</div>
                            <div><Icon type="right" /></div>
                        </div>
                    </Link>
                    <Link to="/service/complains">
                        <div className="box list">
                            <div className="record-li"><i className="anticon icon-meh"></i>意见反馈</div>
                            <div><Icon type="right" /></div>
                        </div>
                    </Link>
                </div>
                
        )
     }
    
}