import { useState } from "react";

function FunctionalComp() {
    const [data, setData] = useState("")
    const handleData = () => {
        setData("Hello")
    }
  return (
    <>
      <h1>Functional Component method Testing</h1>
      <button data-testid="btn1" onClick={handleData}>Update</button>
      <h2>{data}</h2>
    </>
  );
}

export default FunctionalComp;
