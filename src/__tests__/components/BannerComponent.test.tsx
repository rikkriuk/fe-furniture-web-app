import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { postEmail } from "../../redux/slice/BannerSlice";
import BannerComponent from "../../components/BannerComponent";

jest.mock("../../redux/slice/HeroSlice", () => ({
  default: jest.fn(),
}));
jest.mock("../../redux/slice/DataSlice", () => ({
  default: jest.fn(),
}));
jest.mock("../../redux/slice/CategorySlice", () => ({
  default: jest.fn(),
}));
jest.mock("../../redux/slice/ProductSlice", () => ({
  default: jest.fn(),
}));
jest.mock("../../redux/slice/TestimonialSlice", () => ({
  default: jest.fn(),
}));
jest.mock("../../redux/slice/BannerSlice", () => ({
  default: jest.fn(),
}));

jest.mock("../../redux/slice/BannerSlice", () => ({
  postEmail: jest.fn(),
}));

const mockStore = configureStore([]);

describe("BannerComponent", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      banner: {
        succces: false,
        loading: false,
        error: null
      }
    });
    store.dispatch = jest.fn();
  });

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <BannerComponent />
      </Provider>
    );
  };

  test("renders banner image and form elements", () => {
    renderComponent();
    expect(screen.getByTestId("banner-image")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("handles valid email submission", async () => {
    renderComponent();
    const emailInput = screen.getByTestId("email-input");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(postEmail("test@example.com"));
  });

  test("shows success message when submission is successful", () => {
    store = mockStore({
      banner: {
        succces: true,
        loading: false,
        error: null
      }
    });
    renderComponent();
    expect(screen.getByTestId("success-message")).toBeInTheDocument();
  });

  test("disables form elements during loading state", () => {
    store = mockStore({
      banner: {
        succces: false,
        loading: true,
        error: null
      }
    });
    renderComponent();
    
    expect(screen.getByTestId("email-input")).toBeDisabled();
    expect(screen.getByTestId("submit-button")).toBeDisabled();
  });

  test("displays error alert when error exists in state", () => {
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
    store = mockStore({
      banner: {
        succces: false,
        loading: false,
        error: "Test error message"
      }
    });
    renderComponent();

    expect(mockAlert).toHaveBeenCalledWith("Test error message");
    mockAlert.mockRestore();
  });

  test("resets email input after successful submission", async () => {
    store = mockStore({
      banner: {
        succces: true,
        loading: false,
        error: null
      }
    });
    renderComponent();
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;

    expect(emailInput.value).toBe("");
  });
});
