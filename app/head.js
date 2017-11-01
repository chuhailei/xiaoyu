import Test from './test';
import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {Popover,NavBar,Icon} from 'antd-mobile';

import './style/member.css';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon" />
class Head extends Component{
    constructor(){
        super()
        this.state = {
            visible: false,
            selected: '',
        }
        this.onSelect = this.onSelect.bind(this)

    }
    onSelect(opt){
        console.log(opt)
        this.setState({
            visible:false,
            selected:opt.props.value
        })
    }
    handleVisibleChange(visible){
        console.log(this)
        this.setState({
          visible,
        });
    }
    render(){
        return  (
            <div>
                <BrowserRouter>  
                <div className="head box">
                    <div className="h-left">
                        <p>layne</p>
                        <p>会员卡号：12345798456</p>
                    </div>
                    <div className="h-right">
                        <div>
                            <NavBar mode="light" rightContent={
                                <Popover mask   overlayClassName="fortest" overlayStyle={{ color: 'currentColor' }} visible={this.state.visible}
                                    overlay={[
                                    (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId" >预约维修</Item>),
                                    (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>意见反馈</Item>),
                                    (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}> <span style={{ marginRight: 5 }}>投诉</span></Item>),
                                    ]}
                                    align={{ overflow: { adjustY: 0, adjustX: 0 }, offset: [-10, 0], }}
                                    onVisibleChange={this.handleVisibleChange.bind(this)} onSelect={this.onSelect}
                                >
                                    <div style={{ width:'50px',textAlign:'right'}} >服务</div>
                                </Popover>
                                }
                            ></NavBar>
                        </div>
                    </div>

                </div>
                </BrowserRouter>
            </div>
        )    
    }
}
export default Head