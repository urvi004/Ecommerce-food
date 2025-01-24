import { Component } from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>hey it about me</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h3 style={{ color: "#75597D" }}>
              {user.name}- {user.email}
            </h3>
          )}
        </UserContext.Consumer>
        <ProfileClass name={"class prop"} />
      </>
    );
  }
}

export default About;
