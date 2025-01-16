import {Component} from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
// const About = () =>{
//     return(
//         <>
//         <h1>hey it about me</h1>
//         <Profile name={"urvi function"}/>
//         <ProfileClass name={"urvi class"}/>
//         </>
//     )
// }

// export default About;

class About extends Component {
    constructor(props){
        super(props);
        console.log("parent constructor");  
    } 
    componentDidMount(){
        // best place to make APi calls
        console.log("parent componentDidMount");
      }
  render() {
    console.log("parent-render")
    return (
      <>
        <h1>hey it about me</h1>
        <UserContext.Consumer>
          {({user})=> <h3 style={{color:"#75597D"}}>{user.name}- {user.email}</h3>}
        </UserContext.Consumer>
        <ProfileClass name={"urvi class prop"} />   
        {/* <Profile name={"urvi function"} /> */}
        
      </>
    );
  }
}

export default About;
