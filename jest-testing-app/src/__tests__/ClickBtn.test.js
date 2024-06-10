import { fireEvent, render, screen } from "@testing-library/react"
import ClickBtn from "../ClickBtn"

test('Testing on click event with jest', () => {
    render(<ClickBtn/>)
    let clickable = screen.getByRole("button")
    fireEvent.click(clickable)
    expect(screen.getByText("OnClick Function Working")).toBeInTheDocument()
})

test("Snapshot testing", () => {
    const container = render(<ClickBtn />);
    expect(container).toMatchSnapshot();
  });
  