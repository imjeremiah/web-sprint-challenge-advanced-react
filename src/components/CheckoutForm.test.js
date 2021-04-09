import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
    // Arrange
    render(<CheckoutForm />);

    // Act
    const firstNameInput = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameInput, "jeremiah");

    const lastNameInput = screen.getByLabelText(/last name/i);
    userEvent.type(lastNameInput, "candelaria");

    const addressInput = screen.getByLabelText(/address/i);
    userEvent.type(addressInput, "11113 pinecone st");
    
    const cityInput = screen.getByLabelText(/city/i);
    userEvent.type(cityInput, "corona");

    const stateInput = screen.getByLabelText(/state/i);
    userEvent.type(stateInput, "california");

    const zipInput = screen.getByLabelText(/zip/i);
    userEvent.type(zipInput, "92883");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const successMessage = screen.getByTestId(/successMessage/i)

    // Assert
    expect(successMessage).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();
});
