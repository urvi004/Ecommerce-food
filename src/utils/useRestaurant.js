import { useState , useEffect} from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurants]= useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
       const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8548662&lng=75.8242966&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
       const json = await data.json();
    //    console.log(json.data.cards)
       setRestaurants(json.data.cards);
   }

   

   return restaurant;
}

export default useRestaurant;