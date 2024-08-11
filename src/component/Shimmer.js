import "./Shimmer.css";
const Shim = () => {
  return (
    <>
      <div className="cards">
        {Array.from({ length: 8 }).map((el,i) => {
         return <div key={i} className="card shimmer"></div>;
        })}
      </div>
    </>
  );
};

export default Shim;
