import { fireEvent, render, screen } from "@testing-library/react";
import BeforeHooks from "../BeforeAfterHooks";

beforeAll(() => {
  console.log("****************Before All Hook****************");
});

beforeEach(() => {
  console.log("**************Before Each Hook****************");
});

afterAll(() => {
  console.log("___________________After All Hook_________________");
});

afterEach(() => {
  console.log("________________After Each Hook__________________");
});

test("Testing Before Hooks with jest 1", () => {
  console.log(1);
  render(<BeforeHooks />);
  let clickable = screen.getByRole("button");
  fireEvent.click(clickable);
  expect(screen.getByText("OnClick Function Working")).toBeInTheDocument();
});

test("Testing Before Hooks with jest 2", () => {
  console.log(2);
  render(<BeforeHooks />);
  let clickable = screen.getByRole("button");
  fireEvent.click(clickable);
  expect(screen.getByText("OnClick Function Working")).toBeInTheDocument();
});

test("Testing Before Hooks with jest 3", () => {
  console.log(3);
  render(<BeforeHooks />);
  let clickable = screen.getByRole("button");
  fireEvent.click(clickable);
  expect(screen.getByText("OnClick Function Working")).toBeInTheDocument();
});
