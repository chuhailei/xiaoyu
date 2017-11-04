import React,{Component} from 'react';
import Title from '../../login/title';
import {InputItem,Toast,List,Button,Picker,DatePicker} from 'antd-mobile';
// 当前时间
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class Reserve extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            value:'',
            date:now,
            name:'',
            phone:''
        }
        this.onChange = this.onChange.bind(this)
        this.onErrorClick = this.onErrorClick.bind(this)
    }
    componentWillMount(){
      
    }
    onErrorClick (){
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
    }
    onChange(e){  
          this.setState({
          value:e
         });
    }
    // 姓名
    handleName(e){
        this.setState({
            name:e
        })
    }
    // 手机号
    handlePhone(e){
        this.setState({
            phone:e
        })
    }
    render(){
        return(
            <div>
                <Title data={'非常抱歉,影响到了您的不满,请填写您的投诉信息,我们会尽快的解决,并通过您留下的联系方式回电'} />
                <List>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.value} onChange={this.onChange.bind(this)}  className="forss">
                        <List.Item arrow="horizontal">服务类型</List.Item>
                    </Picker>
                    <InputItem type="text"  placeholder="请输入您的姓名"   onChange={this.handleName.bind(this)}  value={this.state.name} >姓名</InputItem>
                    <InputItem type="phone"  placeholder="手机号" onChange={this.handlePhone.bind(this)} value={this.state.phone}>手机号</InputItem>
                    
                </List>
                <List className="date-picker-list">
                    <DatePicker value={this.state.date}  onChange={date => this.setState({ date })}  >
                        <List.Item arrow="horizontal">预约日期</List.Item>
                    </DatePicker>
                </List>
                <div className="tx-center mg-bt15"><button className="btn btn-primary">确认</button></div>

            </div>
        )
    }
}
export default Reserve