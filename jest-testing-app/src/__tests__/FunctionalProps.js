import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FunctionalProps from "../FunctionalProps";

test("Functional props test", async () => {
  const testFunction = jest.fn();
  userEvent.setup();
  render(<FunctionalProps testFunction={testFunction} />);
  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  expect(testFunction).toBeCalled();
});


