import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "mitshu",
    email: "mitshu@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
