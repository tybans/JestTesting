import { render, screen } from "@testing-library/react";
import PlaceholderText from "../PlaceholderText";

// test("Testing Placeholder", () => {
//   render(<PlaceholderText />);
//   const input = screen.getByPlaceholderText("Enter Username");
//   expect(input).toBeInTheDocument();
// //   expect(input).toHaveValue("tyb");
// });

test("Testing Placeholder Multiple inputs", () => {
  render(<PlaceholderText />);
  const inputs = screen.getAllByPlaceholderText("Enter Username");
  for (let index = 0; index < inputs.length; index++) {
    expect(inputs[index]).toBeInTheDocument();
  }

  //  expect(input).toHaveValue("tyb");
});

