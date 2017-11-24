import React,{Component} from 'react';
import Title from './title';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Schedule from './schedule.jsx'
import {Toast} from 'antd-mobile'
import {loginPost} from '../../action'
const status = {
    type:'完成',
    result:1
}
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            carVal:''
        }
        
    }
    handleChange(e){

        this.setState({
            value:e.target.value,
        })
    }
    handleCarFun(e){
        this.setState({
            carVal:e.target.value,
        })
    }
    subFun(){
        if(this.state.value.replace(/\s/g, '').length < 11){
            Toast.info('请输入正确的手机号！');
            return false
        }
        const {history} = this.props
        this.props.dispatch(loginPost({"phone":this.state.value,"carPlate":this.state.carVal},function(data){
         
            if(data.kind == 'Listing'){
                history.push('/Login/result?id=success')
            }else{
                history.push('/Login/result?id=fail')   
            }
        }))
        

    }
    render(){
        return(
            <div className="f26">
                <Title data={'请绑定您的手机号或者车牌号,已方便我们提供更好的服务'} />
                <Schedule status={status} />
                <div className="div-input"><input type="number" onChange={this.handleChange.bind(this)} value={this.state.value} className="input-sty" placeholder="请输入手机号" /></div>
                <div className="div-input"><input type="text" onChange={this.handleCarFun.bind(this)} className="input-sty" value={this.state.carVal} placeholder="请输入车牌号" /></div>
                <div className="tx-center mg-bt15">
                    <button className="btn btn-primary" onClick={this.subFun.bind(this)}>确认</button>
                </div>
            </div>
        )
    }
}
export default connect()(Login)