import { render, screen } from "@testing-library/react";
import GetByRole from "../GetByRole";

test("Test Get By Role", () => {
  render(<GetByRole />);
  const inptbx = screen.getByRole("textbox");
  expect(inptbx).toBeInTheDocument();
  expect(inptbx).toHaveValue("Hello");
  expect(inptbx).toBeDisabled();
});
