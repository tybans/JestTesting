import logo from "./logo.svg";
import "./App.css";
import CheckText from "./CheckText";
import ONChangeEvent from "./OnChangeEvent"
import ClickBtn from "./ClickBtn";
import BeforeHooks from "./BeforeAfterHooks";
import Snapshot from "./Snapshot";
import FunctionalComp from "./FunctionalComp";
import GetByRole from "./GetByRole";
import MultipleEleRole from "./MultipleEleRole";
import GetAllByRole from "./GetAllByRole";
import GetByLabelText from "./GetByLabelText";
import PlaceholderText from "./PlaceholderText";
import UserEventLib from "./UserEventLib";
import CompProps from "./CompProps";
import FunctionalProps from "./FunctionalProps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <br />
      <CheckText />
      <br />
      <ONChangeEvent/>
      <ClickBtn/>
      <BeforeHooks/>
      <Snapshot/>
      <FunctionalComp/>
      <GetByRole/>
      <MultipleEleRole/>
      <GetAllByRole/>
      <GetByLabelText/>
      <PlaceholderText/>
      <UserEventLib/>
      <CompProps name="Taiyab Ansari"/>
      <FunctionalProps/>
    </div>
  );
}

export default App;
