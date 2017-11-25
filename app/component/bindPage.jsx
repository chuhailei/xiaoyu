import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindViceCard,bindViceCardInfo} from '../action'

class Bind extends Component{
    constructor(props){
        super(props)
 
    }
    componentWillMount(){
        const id = new URLSearchParams(this.props.location.search).get('id')
        const openid = new URLSearchParams(this.props.location.search).get('openid')
        this.props.dispatch(bindViceCardInfo(id,openid))
    }
    bindFun(){
        this.props.dispatch(bindViceCard(555,999))

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
    render(){
        const {client,sfz,phone,carNumber} = this.props.vice
        return (
            <div>
                <p>亲爱的客户{client}</p>
                <p>身份证：{sfz}</p>
                <p>手机号：{phone}</p>
                <p>申请成为您车牌号为{carNumber}的副卡</p>
                <div className="tx-center mg-bt15">
                    <button className="btn  mg-15 ">取消</button>
                    <button className="btn btn-primary" onClick = {this.bindFun.bind(this)}>确认</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        vice:state.vice
    }
}
export default connect(mapStateToProps)(Bind)
