import { fireEvent, render, screen } from "@testing-library/react"
import FunctionalComp from "../FunctionalComp"


test('Functional Component test 1', () => {
    render(<FunctionalComp/>)
    const btn = screen.getByTestId("btn1")
    fireEvent.click(btn)
    expect(screen.getByText("Hello")).toBeInTheDocument()
})