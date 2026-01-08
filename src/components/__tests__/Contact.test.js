import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});

test("Should load button inside Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
     const button = screen.getByText("Send Message");

    expect(button).toBeInTheDocument();

});

test("Should load input name inside Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
     const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();

});

test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
     const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();

});