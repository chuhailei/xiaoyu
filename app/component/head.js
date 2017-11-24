
import React,{Component} from 'react';
import '../style/member.css';
import '../style/iconfont.css';
import vipBg from '../images/vip_bg.png'
import head from '../images/head.png'
class Head extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        const divContent = () => {
            if(Object.keys(this.props.user).length > 0){
                return (
                    <div className="head f26">
                        <div><img src={vipBg} width="100%"/></div>
                        <div className="box head-info">
                            <div className="h-left">
                                <div><img src={head} width="50"/></div>
                                <div></div>
                            </div>
                            <div className="h-right">
                                <div>{this.props.user.cardNumber}</div>
                                <div></div>
                            </div>
                        </div>
                        
                    </div>
                )
            }else{
                return 
            }
        }
        return  (
            <div>
                {divContent()}
                <div className="box hnew-box">
                    <div className="hnew-box-left"><i className="anticon icon-copyright"></i> {this.props.user.integral}</div>
                    <div><i className="anticon icon-pay-circle1"></i> {this.props.user.money}</div>
                </div>
            </div>
        )    
    }
}
export default Head