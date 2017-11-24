
import React,{Component} from 'react'
import {Provider} from 'react-redux'
import Loadable from 'react-loadable'
import {HashRouter as Router,Route,Redirect} from 'react-router-dom'

const Home = Loadable({
    loader: ()=>import('../container/home.jsx'),
    loading(){
        return <div>Loading...</div>
    }
})
const Record = Loadable({
    loader: ()=>import('../component/record.jsx'),
    loading(){
        return <div>Loading...</div>
    }
})

const Login = Loadable({
    loader: ()=>import('../container/login/index.jsx'),
    loading(){
        return <div>Loading...</div>
    }
})

const Result = Loadable({
    loader: ()=>import('../container/login/result.js'),
    loading(){
        return <div>Loading...</div>
    }
})

const Reserve = Loadable({
    loader: ()=>import('../component/service/reservation.jsx'),
    loading(){
        return <div>Loading...</div>
    }
})
const Complains = Loadable({
    loader: ()=>import('../component/service/complains.jsx'),
    loading(){
        return <div>Loading...</div>
    }
})

class App extends  Component{
    constructor(props){
        super(props)
    }

    render(){
        const store = this.props.store;
        return (
            <Router>
                <Provider store={store}>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/login/index" component={Login} />
                        <Route path="/record" component={Record} />
                        <Route path="/login/result" component={Result} />
                        <Route path="/service/reserve" component={Reserve} />
                        <Route path="/service/complains" component={Complains} />
                    </div>
                </Provider>
            </Router>
        )
    }
}
export default App