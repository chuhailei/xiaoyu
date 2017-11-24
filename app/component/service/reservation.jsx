import React,{Component} from 'react';
import {connect} from 'react-redux'
import Title from '../../container/login/title';
import {bindActionCreators} from 'redux'
import {InputItem,Toast,List,Button,Picker,DatePicker} from 'antd-mobile';
import {reservePost} from '../../action'
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

        console.log(this.props)
        this.onChange = this.onChange.bind(this)
        this.onErrorClick = this.onErrorClick.bind(this)
        this.subFormFun = this.subFormFun.bind(this)
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
    subFormFun(){

        if(!this.state.value){
            Toast.info('请选择服务类型！');
            return false
        }
        if(!this.state.name.trim()){
            Toast.info('请输入您的姓名！');
            return false
        }
        if(this.state.phone.replace(/\s/g,'').length < 11){
            Toast.info('请输入正确的手机号！');
            return false
        }
        if(!this.state.date){
            Toast.info('请选择预约日期！');
            return false
        }
        const obj = {"typesOf":this.state.value,"name":this.state.name.trim(),"phone":this.state.phone,"date":this.state.date}

        this.props.dispatch(reservePost(obj))

    }
    render(){
        return(
            <div>
                <Title data={'请输入您的联系方式,选择你要预约的日期.提交之后请在个人中心实时查询您的预约进度'} />
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
                <div className="tx-center mg-bt15"><button className="btn btn-primary" onClick={this.subFormFun}>确认</button></div>
            </div>
        )
    }
}

export default connect()(Reserve)