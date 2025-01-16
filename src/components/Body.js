// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING

import { restList } from "../constant";
import RestrauntCard from "./RestrauntCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./loader";
import { Link } from "react-router-dom";
import { Filter } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useBody from "../utils/useBody";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
  const [allRestraunt, filteredRestraunt, setFiltredResturant] = useBody();

  const { user, setUser } = useContext(UserContext);

  console.log("render()");

  // online/offline
  if (!isOnline) {
    return <h1>You are offline</h1>;
  }
  console.log(!isOnline);
  // not render component (Early return)
  if (!allRestraunt) return null;

  // Conditional rendering
  return allRestraunt.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          text="text"
          placeholder="search"
          className="search-input"
          //   value={serchTxt}   //one way data binding value will not change serchTxt val
          value={searchText}
          //   onChange={(e) =>console.log(e.target.value)}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <text>{count}</text> */}
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = Filter(allRestraunt, searchText);
            setFiltredResturant(data);
          }}
        >
          Search- {searchText}
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="rest-list">
        {filteredRestraunt?.length == 0 ? (
          <h1>No restureant found</h1>
        ) : (
          filteredRestraunt.map((restraunt) => {
            return (
              <Link
                to={"/resturant/" + restraunt.info.id}
                key={restraunt.info.id}
              >
                <RestrauntCard {...restraunt.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
