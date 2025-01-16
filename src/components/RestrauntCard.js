import { useContext } from 'react';
import {restList} from '../constant';
import UserContext from '../utils/UserContext';

const RestrauntCard = ({name ,cuisines, cloudinaryImageId, avgRating}) =>{
  const {user} = useContext(UserContext)
    return (
      <div className="card">
        <img
          alt="reasturant"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }
          className="reasturant-image"
        />
        <div className="reasturant-details">
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{avgRating} Star</h4>
          <h4 style={{color:"#75597D"}}>{user.name}- {user.email}</h4>
      
        </div>
      </div>
    );
  }

  
  export default RestrauntCard;