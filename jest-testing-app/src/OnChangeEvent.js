import { useState } from "react";

function OnChangeEvent() {
  const [data, setData] = useState("");
  return (
    <>
      <h1>Test OnChange event with jest</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
}


export default OnChangeEvent;
