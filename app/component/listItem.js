import React,{Component} from 'react';
import {Icon} from "antd-mobile";
import ListData from "../config.json";
import Record from './record';
import {Link} from "react-router-dom";

console.log(Record)
export default class ListItem extends Component{
    
     render(){
        let List = ListData.list.map((item,key)=>(
            <Link to={"/record/"+item.id} key={key}><div className="box list">
                <div className="">{item.title}</div>
                <div className=""><Icon type="right" /></div>
            </div></Link>
         ))
            return(
                <div>
                    {List}
                </div>
                
        )
     }
    
}