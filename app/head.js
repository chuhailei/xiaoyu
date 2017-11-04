
import React,{Component} from 'react';
 
import './style/member.css';

class Head extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return  (
            <div>
                <div className="head box f26">
                    <div className="h-left">
                        <p>layne</p>
                        <p>会员卡号：12345798456</p>
                    </div>
                    <div className="h-right">
                        <p>积分：5000</p>
                        <p>储值余额：500</p>
                    </div>
                </div>
            
            </div>
        )    
    }
}
export default Head