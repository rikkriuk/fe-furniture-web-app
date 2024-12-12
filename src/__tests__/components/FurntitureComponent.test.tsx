import { render, screen } from "@testing-library/react";
import FurnitureComponent from "../../components/FurnitureComponent";

jest.mock("../assets/furniture-image.png", () => "mock-file-url");

describe("FurnitureComponent", () => {
  test("renders without crashing", () => {
    render(<FurnitureComponent />);
  });

  test("displays the correct heading text", () => {
    render(<FurnitureComponent />);
    const heading = screen.getByText("The Best Furniture Manufacturer of your choice");
    expect(heading).toBeInTheDocument();
  });

  test("displays the description text", () => {
    render(<FurnitureComponent />);
    const description = screen.getByText(/Furnitre power is a software/i);
    expect(description).toBeInTheDocument();
  });

  test("renders the furniture image with correct attributes", () => {
    render(<FurnitureComponent />);
    const image = screen.getByAltText("furniture-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("mock-file-url"));
    expect(image).toHaveClass("w-[650px]");
  });

  test("has responsive layout classes", () => {
    render(<FurnitureComponent />);
    const container = screen.getByRole("heading", { 
      level: 4 
    }).parentElement?.parentElement;
    
    expect(container).toHaveClass("flex", "flex-col", "lg:flex-row");
  });
});
