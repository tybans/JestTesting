import { fireEvent, render, screen } from "@testing-library/react";
import OnChangeEvent from "../OnChangeEvent"



test('Testing onChange event with jest', () => {
    render(<OnChangeEvent/>)
    let onChangeInput = screen.getByRole("textbox")
    fireEvent.change(onChangeInput, {target:{value:"ashu"}})
    expect(onChangeInput.value).toBe("ashu")
})