import { useEffect, useState } from "react";
import { DESKTOP_WEB_LISTING } from "../constant";


const useBody = () => {
    const [filteredRestraunt, setFiltredResturant] = useState([]);
    const [allRestraunt, setAllResturant] = useState([]);

    useEffect((rest) =>{
        getRestraunt();
      },[]);

      async function getRestraunt(){
        const data = await fetch(DESKTOP_WEB_LISTING);
        const json = await data.json();
        console.log(json)
        setFiltredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setAllResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      }
   
      return [allRestraunt, filteredRestraunt, setFiltredResturant];

}

export default useBody;