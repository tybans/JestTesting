import { useState } from "react";

function Funcomp() {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("hello");
  };

  // Other method, this method should be outside
  // const handleOtherMethod = () =>{
  //     console.log("hi");
  //     return " hi....."
  // }
  return (
    <div className="container">
      <h1>Functional component Method Testing</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      {/* <button onClick={handleOtherMethod}>Print</button> */}
      <h2>{data}</h2>
    </div>
  );
}

export default Funcomp;
