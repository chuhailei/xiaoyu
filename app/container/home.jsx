import React,{Component} from 'react'
import Head from '../component/head'
import ListItem from '../component/listItem'
import * as action from '../action' 
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
class Home extends Component{
	constructor(props){
		super(props)

	}
	componentWillMount(){
		this.props.action.userPost('token')
	}
	
	render(){
		return(
			<div>
				<Head history={this.props.history} user = {this.props.state.userInfo}/>
				<ListItem />
			</div>
		)
	}
}
function mapStateToProps (state){
    return {state}
}
function mapDispatchToProps(dispacth){
	return {
		action:bindActionCreators(action,dispacth)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
