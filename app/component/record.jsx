import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../action/index'
import {bindActionCreators} from 'redux'
import '../style/member.css'
import { ActivityIndicator} from 'antd-mobile';
class Record extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){     
  
        this.props.action.fetchPosts(new URLSearchParams(this.props.location.search).get('id'))
    }
    componentWillUpdate(){
        
    }
    render(){

        const recordReducer = this.props.state.recordReducer.data;
        
        const dataList = recordReducer.map((item,key)=>(
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
                    <div className="sub-title f26">{new URLSearchParams(this.props.location.search).get('name')} 记录</div>
                    {dataList}
                    <ActivityIndicator toast  text="Loading..."   animating={ this.props.state.recordReducer.loading}  />
                </div>
        )
    }
}

function mapStateToProps(state){
    return {
        state
    }
}
function mapDispatchToProps(dispatch){
    return {
        action:bindActionCreators(action,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Record)
