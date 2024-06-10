import { render, screen } from "@testing-library/react"
import CheckText from "../CheckText"

// test('react testing', () => {
//     render(<CheckText/>)
//     const para = screen.getByText("First React Test Case")
//     expect(para).toBeInTheDocument()
// })


// case insensitive
// test('react testing', () => {
//     render(<CheckText/>)
//     const para = screen.getByText(/First React Test Case/i)
//     expect(para).toBeInTheDocument()
// })


// multiple expects
test('react testing', () => {
    render(<CheckText/>)
    const para = screen.getByText(/First React Test Case/i)
    const para2 = screen.getByText(/Testing React with Jest/i)
    // const pic = screen.getByRole("img")
    
    // byTitle
    const pic = screen.getByTitle("animal")
    expect(para).toBeInTheDocument()
    expect(para2).toBeInTheDocument()
    expect(pic).toBeInTheDocument()
})
