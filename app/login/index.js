import React,{Component} from 'react';
import Title from './title';
import {InputItem,Toast,List,Button} from 'antd-mobile';
import {Link} from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            value:''
        }
        this.onChange = this.onChange.bind(this)
        this.onErrorClick = this.onErrorClick.bind(this)
    }
    onErrorClick (){
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onChange(value){  
          console.log(this)
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
    }
    render(){
        return(
            <div>
                <Title data={'请绑定您的手机号或者车牌号,已方便我们提供更好的服务'} />
                <List>
                    <InputItem type="phone"  placeholder="请输入你的手机号" error={this.state.hasError}    onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机号码</InputItem>
                    <InputItem type="text"  placeholder="请输入你的车牌号码" value={this.state.value}>车牌号码</InputItem>
                </List>

                    <div>
                        <Link to="/login/result?id=success&name=minooo"><button>确认</button></Link>
                    </div>

            </div>
        )
    }
}
export default Login