
import Login from './login/index.jsx';
import ListItem from './component/listItem';
import Result from './login/result';
import Reserve from './component/service/reservation.jsx'
import Complains from './component/service/complains.jsx'
import Head from './head';
import Record from './component/record.jsx';
import React,{Component} from 'react';
import {render} from 'react-dom';
import {Route,BrowserRouter,Link,IndexR,HashRouter} from 'react-router-dom';

const App = () => (
	<HashRouter basename="/">
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/login/index" component={Login} />
			<Route path="/record" component={Record} />
			<Route path="/login/result" component={Result} />
			<Route path="/service/reserve" component={Reserve} />
			<Route path="/service/complains" component={Complains} />
		</div>
	</HashRouter>
)               

const Home = (props) => {

	return (
		<div>	
			<Head history={props.history} />
			<ListItem />
		</div>
	)
}
render(<App/>, document.getElementById('root'))
