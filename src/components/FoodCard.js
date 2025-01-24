import { IMG_CDN_URL } from "../constant";

const FoodCard = ({ name, category, imageId, description, price }) => {
  return (
    <div className="card">
      <img
        alt="reasturant"
        src={IMG_CDN_URL + imageId}
        className="reasturant-image"
      />
      <div className="reasturant-details">
        <h2>{name}</h2>
        <h3>{category}</h3>
        <h4>{description}</h4>
        <h4>Rupees:{price / 100}</h4>
      </div>
    </div>
  );
};

export default FoodCard;
