import { useState } from 'react';
import './App.css';

function App() {
// const [data, setData] = useState("")
// const [data, setData] = useState('')
  return (
    <div className="App">
      <p>First React Test Case</p>

      {/* <input type='text' value={data} onChange={(e) => setData(e.target.value)}></input> */}
      {/* <input type='text' placeholder='Enter UserName' name='username' id='userId' readOnly value={"Taiyab"}></input> */}
      {/* <button onClick={()=>setData("updated document")}>Update Data</button>
      <h1>{data}</h1> */}

      <input type='text'></input>
    


      {/* <img title='animal' src='https://images.unsplash.com/photo-1715590876582-18e4844864a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> */}
    </div>
  );
}

export default App;
