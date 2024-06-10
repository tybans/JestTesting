import { render, screen } from "@testing-library/react";
import GetByLabelText from "../GetByLabelText";

// test("Get By Label Text testing 1", () => {
//   render(<GetByLabelText />);
//   const input = screen.getByLabelText("User name");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("tyb");
// });


// test("Get By Label Text testing 2", () => {
//   render(<GetByLabelText />);
//   const checkbox = screen.getByLabelText("Skills");
//   expect(checkbox).toBeInTheDocument();
//   expect(checkbox).toBeChecked();
// });

// Get All By Label Text

test("Get All By Label Text testing ", () => {
  render(<GetByLabelText />);
  const inputs = screen.getAllByLabelText("User");
  for (let index = 0; index < inputs.length; index++) {
    expect(inputs[index]).toBeInTheDocument();
    expect(inputs[index]).toHaveValue("tybans");
  }
});

test("Get All By Label Text checkbox testing ", () => {
  render(<GetByLabelText />);
  const checkbox = screen.getAllByLabelText("Skills");
  for (let index = 0; index < checkbox.length; index++) {
    expect(checkbox[index]).toBeInTheDocument();
    expect(checkbox[index]).toBeChecked();
  }
});

