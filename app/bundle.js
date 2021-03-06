import react,{Component} from 'react'

class Bundle extends Component{
    constructor(props){
        super(props)
        this.state = {
            mod : null
        }
    }
    
    componentWillMount(){
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.load !== this.props.load){
            this.load(nextProps)
        }
    }
    load(props){
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                mod:mod.default?mod.default:mod
            })
        })
    }
    render() {
        console.log(this.props)
        return this.state.mod ? this.props.children(this.state.mod):null
    }
    
}
export default Bundle