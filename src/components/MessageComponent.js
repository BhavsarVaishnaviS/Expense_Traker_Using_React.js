import { Component } from "react"
import HelloComponent from "./HelloComponent"
// let MessageComponent = ()=> {
//     return (
//         <div>
//             <HelloComponent 
//                 studname= "Sanket"
//                 course = "DAC" 
//             />
//         </div>
//     )
// }

class MessageComponent extends Component{

    state = {
        username: "Shruti",
        email:"sh@gmail.com"
    }
    render(){
        return <div>
        <h3>Hello Class Component!!</h3>
        <HelloComponent
            uname = {this.state.username}
            email = {this.state.email}/>
        </div>
    }
}
export default MessageComponent