import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import Hello from '../component/hello.jsx'

class Main extends Component{
    render(){
        const {store} = this.props
        return(
            <Router >
                <Provider store={store}>
                    <div>
                        <Route path="/hello" location={location} component={Hello} />
                        <Route render={({loction})=>{
                            return (
                                <div key={location.pathname} name={location.pathname}>
                                        <Link to="/hello"><p>123</p></Link>
                                    
                                    
                                </div>
                            )
                        }} />
                    </div>
                    
                </Provider>
            </Router>
        )
    }
}
export default Main