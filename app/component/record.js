import React,{Component} from 'react';
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile';
import '../style/member.css'
const Step = Steps.Step;
const data = [
    {'name':'预约保养','date':'2017-05-09','consumeption':100},
    {'name':'预约保养','date':'2017-05-09','consumeption':100},
    {'name':'预约保养','date':'2017-05-09','consumeption':100},
    {'name':'预约保养','date':'2017-05-09','consumeption':100}
]
class Record extends Component{
    constructor(match){
        super(match)
        console.log(match)
        this.match = match.match.params.types
    }
    render(){
        console.log(this.match)
        const dataList = data.map((item)=>(
                <Step status="process" title={item.name} size="small" description={item.date} />
        ))
        return(
            <div>
                <WingBlank size="small" >
                    <div className="sub-title">{this.match} 记录</div>
                    <WhiteSpace size="small" />
                    <Steps>{dataList}</Steps>
                </WingBlank>
          </div>
        )
    }
}
// function Record({match}){

//     return(
//         <div>{match.params.id}记录</div>
//     )
// }
export default Record
