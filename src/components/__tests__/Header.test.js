import { render, screen} from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


// test or it => both are same
describe("Header Component Test Cases", () => {
  
  it("Should load Header component with a logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


    // Finding by text (using regex for flexibility)
    const logoutButton = screen.getByRole("button", { name: /logout/i });

    expect(logoutButton).toBeInTheDocument();
  });

  it("Should load Header Component with Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });
});