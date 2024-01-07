
import { Component } from "react";

class HeloComponent extends Component{

    render(){
        return <h2>Hello {this.props.uname}!! Your email is {this.props.email}.</h2>
    }
}
export default HeloComponent