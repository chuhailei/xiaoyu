import React,{Component} from 'react';
import Title from '../../container/login/title';
import {InputItem,Toast,List,Button,Picker,TextareaItem} from 'antd-mobile';
import {feebbackPost} from '../../action'
import {connect} from 'react-redux'
class Complains extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            typesOf:[],
            phone:'',
            dx:[],
            xz:[],
            opinion:''
        }
        
    }
    onErrorClick (){
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }

    onTypesOfFun(e){  
        this.setState({
            typesOf:e
        });
    }
    handlePhoneFun(e){
        this.setState({
            phone:e
        });

    }
    handleDx(e){
        this.setState({
            dx:e
        })
    }
    handleXz(e){
        this.setState({
            xz:e
        })
    }
    handleOptinion(e){

        this.setState({
            opinion:e
        })
    }
    subFormFun(e){
     
        if(this.state.typesOf.length == 0){
            Toast.info('请选择投诉类型！');
            return false
        }
        if(this.state.phone.replace(/\s/g,'').length < 11){
            Toast.info('请输入正确的手机号！');
            return false
        }
        if(this.state.dx.length == 0){
            Toast.info('请选择投诉对象！');
            return false
        }
        if(this.state.xz.length == 0){
            Toast.info('请选择投诉性质！');
            return false
        }
        const obj = {"typesOf":this.state.typesOf,"dx":this.state.dx,"phone":this.state.phone,"xz":this.state.xz,"opinion":this.state.opinion}
        
        this.props.dispatch(feebbackPost(obj))
    }
    render(){
        return(
            <div>
                <Title data={'非常抱歉,影响到了您的不满,请填写您的投诉信息,我们会尽快的解决,并通过您留下的联系方式回电'} />
                <List>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.typesOf} onChange={this.onTypesOfFun.bind(this)}  className="forss">
                        <List.Item arrow="horizontal">投诉类型</List.Item>
                    </Picker>
                    <InputItem type="phone"  placeholder="手机号"  onChange={this.handlePhoneFun.bind(this)} value={this.state.phone}>联系电话</InputItem>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.dx} onChange={this.handleDx.bind(this)} className="forss">
                        <List.Item arrow="horizontal">投诉对象</List.Item>
                    </Picker>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.xz} onChange={this.handleXz.bind(this)}  className="forss">
                        <List.Item arrow="horizontal">投诉性质</List.Item>
                    </Picker>
                    <TextareaItem  rows={5} placeholder='输入反馈意见' value={this.state.opinion} onChange={this.handleOptinion.bind(this)} />
                </List>
                <div className="tx-center mg-bt15"><button className="btn btn-primary" onClick={this.subFormFun.bind(this)}>确认</button></div>
            </div>
        )
    }
}
export default connect()(Complains)