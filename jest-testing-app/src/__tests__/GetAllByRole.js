import { render, screen } from "@testing-library/react";
import GetAllByRole from "../GetAllByRole";

test("Testing Get All by role", () => {
  render(<GetAllByRole />);
  const btns = screen.getAllByRole("button");
  //   expect(btns[0]).toBeInTheDocument();
  //   expect(btns[1]).toBeInTheDocument();

  const options = screen.getAllByRole("option")

  for (let index = 0; index < btns.length; index++) {
    expect(btns[index]).toBeInTheDocument();
  }
  for (let index = 0; index < options.length; index++) {
    expect(options[index]).toBeInTheDocument();
  }
});
