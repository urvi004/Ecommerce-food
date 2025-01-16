import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodCard from "./FoodCard";

 const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch() 
    
    const clearAll = () => {
        dispatch(clearCart())
    }

     return (
        <div>
          <h1>Cart Page - {cartItems.length}</h1>
          <button onClick={()=> clearAll()}>clear all</button>
          <div style={{display:"flex"}}>
          {cartItems.map((item)=> (
            <FoodCard key={item.id} {...item}/>
          ))}
          </div>
          
        </div>
     )
 }

 export default Cart;