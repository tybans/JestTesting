import { render } from "@testing-library/react";
import Snapshot from "../Snapshot";
import ClickBtn from "../ClickBtn";

test("Snapshot testing", () => {
  const container = render(<Snapshot />);
  expect(container).toMatchSnapshot();
});

