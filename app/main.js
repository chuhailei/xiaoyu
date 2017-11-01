
import Login from './login/index';
import ListItem from './component/listItem';
import Result from './login/result';
import Head from './head';
import Record from './component/record';
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Route,BrowserRouter,Link,IndexR} from 'react-router-dom';
import {Button} from 'antd-mobile';

const App = () => (
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/login/index" component={Login} />
			<Route path="/record/:types" component={Record} />
			<Route path="/login/result" component={Result} />
		</div>
	</BrowserRouter>
)               

const Home = (props) => {console.log(props, 'home'); return <div>			
<Link to="/">home</Link>
<Link to="/login/index">about</Link><Head /><ListItem /></div>}
render(<App/>, document.getElementById('root'))
