import { render } from "@testing-library/react";
import Sum from "../Sum";

test("Example testing", () => {
  render(<Sum />);
  expect(Sum(10, 23)).toBe(33);
});

test("Example testing 2", () => {
  render(<Sum />);
  let a = 20;
  let b = 20;
  let output = 40;
  expect(Sum(a, b)).toBe(output);
});
