import React, {Component} from 'react';
import config from './config.json';
import './common.css'

class App extends Component {

  render(){
    return (
      <div className="reds">{config.say}</div>
    )
  }
}
export default App
