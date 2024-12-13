import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/FooterComponent";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("renders FurniShop heading", () => {
    const heading = screen.getByText("FurniShop");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-white", "text-2xl", "font-bold");
  });

  test("renders copyright text", () => {
    const copyright = screen.getByText("© FurniShop 2022 - All Rights Reserved");
    expect(copyright).toBeInTheDocument();
    expect(copyright).toHaveClass("text-sm", "text-white");
  });

  test("footer has correct background color", () => {
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-[#23262F]");
  });

  test("social icons have correct styling", () => {
    const socialIcons = screen.getAllByRole("link");
    socialIcons.forEach(icon => {
      expect(icon.firstChild).toHaveClass("text-white", "w-8", "h-8", "p-2", "rounded-full");
    });
  });
});
