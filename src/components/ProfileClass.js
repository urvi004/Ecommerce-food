import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // Create state
    this.state = {
        count: 0,
        count2: 10,
        userInfo:{
            name:"Dummy name",
            location:"Dummy location",
        }
    };
    console.log("child-constructor");
  }

  async componentDidMount(){
    // best place to make APi calls
     const data = await fetch('https://api.github.com/users/akshaymarch7');
     const json = await data.json();
     console.log(json);
     this.setState({
        userInfo:json,
    });

    console.log("child-componentDidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count){

    }
    if(this.state.count2 !== prevState.count2){
        
    }
     console.log("child-componentDidUpdate")
  }

  componentWillUnmount(){
     console.log("child-componentWillUnmount")
  }  


  render() {
    console.log(('child-render class'))
    return (
      <>
        <h1>Profile Page Class Component</h1>
        {/* <h2>Name: {this.props.name}</h2> */}
        <p>name: {this.state.userInfo.name}</p>
        <p>location: {this.state.userInfo.location}</p>
        {/* WE DO NOT MUTATE STATE DIRECTLY */}
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: 11,
            })
          }
        >
          Click me
        </button>
      </>
    );
  }
}

// in async operation
/**
 * 
 * parent constructor 
 * parent render
 * child constructor
 * child render
 * 
 * DOM is updated
 * Parent componentDidMount
 * 
 * json is logged in console 
 * child componentDidMount
 * chid render (its rerendered)
 * 
 * 
 * 
 * */ 

/**
 * 
 * child constructor
 * child render
 * componentDidMount
 * 
 * API call
 * setState
 * render
 * componentDidupdate
 * 
 * **/ 

export default ProfileClass;
