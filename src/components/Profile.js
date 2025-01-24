import { useState, useEffect } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("calling setInterval");
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Profile Page Function Component</h1>
      <h2>Name: {name}</h2>
      <p>Count1: {count}</p>
      <p>Count2: {count2}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Click Me 1
      </button>
    </>
  );
};

export default Profile;
