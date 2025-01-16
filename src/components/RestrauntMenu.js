// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8548662&lng=75.8242966&restaurantId=734976&catalog_qa=undefined&submitAction=ENTER

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "../components/loader";
import useRestaurant from '../utils/useRestaurant';
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
    // how to read a dynamic url param
    const { resId } = useParams();
    const restaurant = useRestaurant(resId)

    const dispatch = useDispatch() 

     const addFoodItem = (item) => {
        dispatch(addItem(item)) //payload:{grapes}
     }

    const menuInfo = restaurant && restaurant[restaurant.length - 1].groupedCard.cardGroupMap.REGULAR.cards;
    const restaurantInfo = restaurant && restaurant[2].card.card.info;
    console.log(restaurantInfo);

    return (!restaurant)?<Shimmer/>:(
    <div className="restMenu">

      <div>
       <h1>Restraunt id:  {resId}</h1>
      <h2>Restraunt Name: {restaurantInfo.name}</h2>
      <img src={IMG_CDN_URL+ restaurantInfo.cloudinaryImageId} alt="img"/>
      <h3>{restaurantInfo.areaName}</h3>
      <h3>{restaurantInfo.city}</h3>
      <h3>{restaurantInfo.avgRating}</h3>
      <h3>{restaurantInfo.costForTwoMessage}</h3>
      {/* <button onClick={() => handleAddItem()}>Add Item</button> */}
       </div>
       <div>
        {menuInfo.map((category)=>{
            console.log(category)
            if(category.card.card["@type"].includes(".NestedItemCategory")){
                return (
                    <>
                    <h1>{category.card.card.title}</h1>
                    <ul>
                    {category.card.card.categories.map((subCat)=>{
                        return(
                            <>
                            {subCat.itemCards.map((item)=>{
                                    return(
                                        <>
                                        <li>{item.card.info.name} <button>Add</button></li>
                                        </>
                                    )
                            })}
                            </>
                        )
                    })}
                    </ul>
                    </>
                )
            } else if(category.card.card["@type"].includes(".ItemCategory")){
                return (
                    <>
                    <h1>{category.card.card.title}</h1>
                    <ul>
                    {category.card.card.itemCards.map((item)=>{
                            return(
                                <>
                                <li>
                                 {item.card.info.name}
                                 <button onClick={()=>addFoodItem(item.card.info)} style={{background:"lightpink", padding:2, margin: 5,}}>Add</button>
                                 </li>
                                </>
                            )
                    })}
                    </ul>
                    </>
                )
            }
        })}
       </div>
      
      </div>
      );
  
};

export default RestrauntMenu;