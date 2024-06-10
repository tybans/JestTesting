import { render, screen } from "@testing-library/react";
import DescribeFun from "../DescribeFun";

describe("UI test group", () => {
  test("test case 1", () => {
    render(<DescribeFun />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "User Name");
  });
  test("test case 2", () => {
    render(<DescribeFun />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "User Name");
  });
  test("test case 3", () => {
    render(<DescribeFun />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "User Name");
  });
});

// describe("API test group", () => {
//   test("API test case 1", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
//   test("API test case 2", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
//   test("API test case 3", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
// });

// describe.only("UI test group", () => {
//   test("test case 1", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
//   test("test case 2", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
//   test("test case 3", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
// });

// describe.skip("UI test group", () => {
//   test("test case 1", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
//   test("test case 2", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
//   test("test case 3", () => {
//     render(<DescribeFun />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "User Name");
//   });
// });

describe("API test group", () => {
  test("API test case 1", () => {
    render(<DescribeFun />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "User Name");
  });
  test("API test case 2", () => {
    render(<DescribeFun />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "User Name");
  });

  describe("Inner describe group", () => {
    test("API test case 3", () => {
      render(<DescribeFun />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "User Name");
    });
  });
});
