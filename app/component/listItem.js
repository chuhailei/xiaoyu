import React,{Component} from 'react';
import {Icon} from "antd-mobile";
import ListData from "../config.json";

import {Link} from "react-router-dom";

export default class ListItem extends Component{
    
     render(){
        let List = ListData.list.map((item,key)=>(
            <Link to={"/record?types="+item.id} key={key}><div className="box list">
                <div className="">{item.title}</div>
                <div className=""><Icon type="right" /></div>
            </div></Link>
            
         ))
            return(
                <div className="f26 mg-bt15">
                    {List}
                    <Link to="/service/reserve">
                        <div className="box list">
                            <div className="">预约</div>
                            <div className=""><Icon type="right" /></div>
                        </div>
                    </Link>
                    <Link to="/service/complains">
                        <div className="box list">
                            <div className="">意见反馈</div>
                            <div className=""><Icon type="right" /></div>
                        </div>
                    </Link>
                </div>
                
        )
     }
    
}