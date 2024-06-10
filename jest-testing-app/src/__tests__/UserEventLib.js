import { render, screen } from "@testing-library/react"
import UserEventLib from "../UserEventLib"
import userEvent from "@testing-library/user-event"

test('User event Library test', async() => {
    userEvent.setup()
    render(<UserEventLib/>)
    const btn = screen.getByText("Click Me")
    await userEvent.click(btn)
    expect(screen.getByText("Hello")).toBeInTheDocument

})