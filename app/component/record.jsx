import React,{Component} from 'react';
import '../style/member.css'
const data = [
    {'name':'预约保养','date':'2017-05-09','consumeption':100},
    {'name':'预约保养','date':'2017-05-09','consumeption':100},
    {'name':'预约保养','date':'2017-05-09','consumeption':100},
    {'name':'预约保养','date':'2017-05-09','consumeption':100}
]
class Record extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        const dataList = data.map((item,key)=>(
            <div className="box-start step-li" key={key}>
                <div className="step-left">
                    <span></span>
                </div>
                <div className="step-right">
                    <div>{item.name}</div>
                    <div>日期：{item.date}</div>
                </div>
            </div>
                
        ))
        return(
                <div className="step-wrap f26">
                    <div className="sub-title f26">{new URLSearchParams(this.props.location.search).get('types')} 记录</div>
                    {dataList}
                </div>
        )
    }
}

export default Record
