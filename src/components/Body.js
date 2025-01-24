import RestrauntCard from "./RestrauntCard";
import { useContext, useState } from "react";
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

  if (!isOnline) {
    return <h1>You are offline</h1>;
  }

  if (!allRestraunt) return null;
  return allRestraunt.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          text="text"
          placeholder="search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
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
