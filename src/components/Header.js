import { useContext, useState } from "react"; 
import {Link}  from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// SPA
// client side routing

export const Title = () =>(
    <a href="/">
      <img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRzEkztnhNsZU0gr6gerWXYmn3C362TwE2Q&s"
        className="logo"
      />
    </a>
  );



  const Header= () => {
    const[isLogin, setIsLogin] = useState(false);
    const isOnline = useOnline()
    const {user} = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)

    return (
      <div className="header">
       
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link>Card</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li>{cartItems.length}item</li>
          </ul>
        </div>

        <h1>{isOnline? '🍏': '🍎'}</h1>
        <h4 style={{color:"#75597D"}}>{user.name}</h4> 
         {isLogin==false?<button onClick={() => setIsLogin(true)}>login</button>:<button onClick={() => setIsLogin(false)}>logout</button>}
        
        
      </div>
    );
  };
  export default Header;
//   export by defaylt
