import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

describe("App component", () => {
  test("renders navbar", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const navbarElement = screen.getAllByTestId("navbar")[0];
    expect(navbarElement).toBeInTheDocument();
  });
  test("renders footer", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const footerElement = screen.getAllByTestId("footer")[0];
    expect(footerElement).toBeInTheDocument();
  });
});
