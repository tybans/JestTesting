// import { screen, render, fireEvent } from "@testing-library/react";
// import App from "../App";
// // import { act } from "react";
// import dbClean from "../service";

// beforeAll(() => {
//   console.log("*******Before All Hook*********");
// });

// beforeEach(() => {
//   console.log("*******Before Each Hook*********");
//   dbClean()
// });

// afterAll(() => {
//   console.log("*******After All Hook*********");
// });

// afterEach(()=> {
//   console.log("______After Each________");
// })

// test("click event test1", () => {
//   console.log("1");
//   render(<App />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated document")).toBeInTheDocument();
// });

// test("click event test2", () => {
//   console.log("2");

//   render(<App />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated document")).toBeInTheDocument();
// });

// test("click event test3", () => {
//   console.log("3");

//   render(<App />);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated document")).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import App from "../App";
// import { act } from "react";

// test("Snapshot for app component", () => {
//   const container = render(<App />);
//   expect(container).toMatchSnapshot();
// });

test("get by role", () => {
  render(<App />);
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
});
