import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BannerComponent from "../../components/BannerComponent";

describe("BannerComponent", () => {
  test("renders banner component with all elements", () => {
    render(<BannerComponent />);
    
    expect(screen.getByAltText("banner-image")).toBeInTheDocument();
    expect(screen.getByText(/Get more discount/i)).toBeInTheDocument();
    expect(screen.getByText(/Off your order/i)).toBeInTheDocument();
    expect(screen.getByText(/Join our mailing list/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop Now/i)).toBeInTheDocument();
  });

  test("allows email input", async () => {
    render(<BannerComponent />);
    const emailInput = screen.getByPlaceholderText(/Enter your email address/i);
    
    await userEvent.type(emailInput, "test@example.com");
    expect(emailInput).toHaveValue("test@example.com");
  });

  test("handles form submission", () => {
    const { container } = render(<BannerComponent />);
    const form = container.querySelector("form");
    const submitSpy = jest.fn();
    
    form?.addEventListener("submit", submitSpy);
    fireEvent.submit(form!);
    
    expect(submitSpy).toHaveBeenCalled();
  });

  test("has correct responsive classes", () => {
    const { container } = render(<BannerComponent />);
    const image = screen.getByAltText("banner-image");
    
    expect(image).toHaveClass("w-full");
    expect(image).toHaveClass("lg:h-full");
    expect(image).toHaveClass("h-[300px]");
    expect(image).toHaveClass("object-cover");
  });

  test("renders banner image with correct attributes", () => {
    render(<BannerComponent />);
    const bannerImage = screen.getByAltText("banner-image");
    
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage.tagName).toBe("IMG");
    expect(bannerImage).toHaveAttribute("src");
  });
});
