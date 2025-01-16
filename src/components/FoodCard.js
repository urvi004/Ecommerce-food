import {IMG_CDN_URL} from '../constant';


const FoodCard = ({name ,category, imageId, description, price}) =>{
//   const {user} = useContext(UserContext)
    return (
      <div className="card">
        <img
          alt="reasturant"
          src={IMG_CDN_URL+imageId }
          className="reasturant-image"
        />
        <div className="reasturant-details">
          <h2>{name}</h2>
          <h3>{category}</h3>
          <h4>{description}</h4>
          <h4>Rupees:{price/100}</h4>
          {/* <h4 style={{color:"#75597D"}}>{user.name}- {user.email}</h4> */}
      
        </div>
      </div>
    );
  }

  
  export default FoodCard;