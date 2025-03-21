import { render, screen } from "@testing-library/react";
import ServicesComponent from "../../components/ServicesComponent";

jest.mock("../assets/services-image.png", () => "mock-file-url");

describe("ServicesComponent", () => {
  test("renders without crashing", () => {
    render(<ServicesComponent />);
  });

  test("displays the main heading", () => {
    render(<ServicesComponent />);
    expect(screen.getByText("We Create your home more aestetic")).toBeInTheDocument();
  });

  test("renders the service image", () => {
    render(<ServicesComponent />);
    const image = screen.getByAltText("service-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("mock-file-url"));
  });

  test("displays two valuation services sections", () => {
    render(<ServicesComponent />);
    const serviceTitles = screen.getAllByText("Valuation Services");
    expect(serviceTitles).toHaveLength(2);
  });

  test("renders SVG icons", () => {
    render(<ServicesComponent />);
    const svgElements = document.querySelectorAll("svg");
    expect(svgElements.length).toBe(2);
  });

  test("has responsive layout classes", () => {
    render(<ServicesComponent />);
    const mainContainer = screen.getAllByTestId("services-container")[0];
    expect(mainContainer).toHaveClass("px-5", "lg:px-32");
  });

  test("displays service descriptions", () => {
    render(<ServicesComponent />);
    const descriptions = screen.getAllByText(
      "Sometimes features require a short description. This can be detailed description"
    );
    expect(descriptions).toHaveLength(2);
  });
});
