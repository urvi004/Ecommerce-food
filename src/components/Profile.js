import { useState, useEffect } from "react";
import axios from 'axios';

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  //   we can have multiple useEffect to render diffrent  according to diffrent state change
  useEffect(() => {
    // API call
    // console.log("useEffect() for count")
    const timer = setInterval(() =>{
     console.log("calling setInterval")
    },10000)

    return () => {
      // cleanup function
      clearInterval(timer);
      console.log("cleanup function")
    }
  },[]);

//   useEffect(() => {
//     // API cal
//     console.log("useEffect() forn count2")
//   },[count2]);

  // useEffect(() => {
      // Try2()
      // Try()
  // },[]);

  // async function Try2(){
  //   const response = await fetch('https://api.github.com/users/urvi04')
  //   const data =  await response.json();
  //   console.log(data, "fetch")
  // }

  // async function Try(){
  //   const response = await axios.get('https://api.github.com/users/urvi04')
  //   const data =  response.data
  //   console.log(data, "axiosp")
  // }

  console.log("render func")
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
      {/* <button
        onClick={() => {
        //   setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Click Me 2
      </button> */}
    </>
  );
};

export default Profile;
