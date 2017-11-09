import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../store/actions'
class Hello extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        this.props.dispatch(action.hi())
    }
    render(){
        const {name} = this.props
        return(
            <div>{name}</div>
        )
    }
}
export default connect(state=>state)(Hello)