import { fireEvent, render, screen } from "@testing-library/react";
import MultipleEleRole from "../MultipleEleRole";

test("Multiple element btn testing", () => {
  render(<MultipleEleRole />);
  const btn1 = screen.getByRole("button", { name: "test1" });
  const btn2 = screen.getByRole("button", { name: "test2" });
  const input1 = screen.getByRole("textbox", { name: "User Name" });
  const input2 = screen.getByRole("textbox", { name: "User Age" });

  //   cuestom role
  const dv1 = screen.getByRole("lorem");

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
  expect(dv1).toBeInTheDocument();
});
