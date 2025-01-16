import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "mitsu",
        email: "mitsu@gmail.com",
      }})

      UserContext.displayName= "UserContext"
    


export default UserContext;