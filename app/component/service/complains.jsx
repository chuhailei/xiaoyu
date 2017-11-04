import React,{Component} from 'react';
import Title from '../../login/title';
import {InputItem,Toast,List,Button,Picker,TextareaItem} from 'antd-mobile';

class Complains extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            value:[]
        }
        this.onChange = this.onChange.bind(this)
        this.onErrorClick = this.onErrorClick.bind(this)
    }
    onErrorClick (){
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onPickerChange(){
         
      }  
      onChange(e){  
          console.log(e[0])
        // if (value.replace(/\s/g, '').length < 11) {
        //   this.setState({
        //     hasError: true,
        //   });
        // } else {
        //   this.setState({
        //     hasError: false,
        //   });
        // }
        this.setState({
          value:e
        });
    }
    render(){
        return(
            <div>
                <Title data={'请输入您的联系方式,选择你要预约的日期.提交之后请在个人中心实时查询您的预约进度'} />
                <List>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.value} onChange={this.onChange.bind(this)}  className="forss">
                        <List.Item arrow="horizontal">投诉类型</List.Item>
                    </Picker>
                    <InputItem type="text"  placeholder="手机号" value="">联系电话</InputItem>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.value} onChange={this.onChange.bind(this)}  className="forss">
                        <List.Item arrow="horizontal">投诉对象</List.Item>
                    </Picker>
                    <Picker data={[{label:'一般维修',value:'一百维修'},{label:'er般维修',value:'er百维修'}]} cols={1} value={this.state.value} onChange={this.onChange.bind(this)}  className="forss">
                        <List.Item arrow="horizontal">投诉性质</List.Item>
                    </Picker>
                    <TextareaItem  rows={5} placeholder='输入反馈意见' />
                </List>

                <div>
                    <Button size="small" type="primary">投诉</Button>
                </div>
            </div>
        )
    }
}
export default Complains