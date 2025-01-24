import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count2 !== prevState.count2) {
    }
  }

  render() {
    return (
      <>
        <h1>Profile Page Class Component</h1>
        <p>name: {this.state.userInfo.name}</p>
        <p>location: {this.state.userInfo.location}</p>
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

export default ProfileClass;
