import { render, screen } from "@testing-library/react";
import CompProps from "../CompProps";

test("props testing", () => {
  const name = "Ansari";
  render(<CompProps name={name} />);
  const user = screen.getByText(`My Name is ${name}`);
  expect(user).toBeInTheDocument();
});
