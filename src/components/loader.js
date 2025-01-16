const Shimmer = () => {
  return (<>
  {/* <h1>i am shimmering..</h1> */}
  <div className="restraunt-list">
    {Array(10).fill("").map((e, index)=>(
        <div key={index} className="shimmer-card"></div>
    ))}
  </div>
  </>)
};

export default Shimmer;
