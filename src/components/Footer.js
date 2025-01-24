import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
    return <>
    <div className="footer">
    <h2>This wonderful application is developed by <span style={{color:"#75597D"}}>{user.name} </span></h2>
    <h3>you can contact her on <span style={{color:"#75597D"}}>{user.email} </span></h3>
    <p>If you are lucky you will get the response 🤷🏼</p>

    </div>
    </>;
  };

  export default Footer;