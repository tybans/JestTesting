import { screen, render, fireEvent } from "@testing-library/react";
import Funcomp from "../Funcomp";

test("functional component testing1", () => {
  render(<Funcomp />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
