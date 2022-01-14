import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const first = await screen.getByLabelText(/first name:/i);
    userEvent.type(first, 'Jeremiah');
    const last = await screen.getByLabelText(/last name:/i);
    userEvent.type(last, 'Candelaria');
    const address = await screen.getByLabelText(/address:/i);
    userEvent.type(address, '11113 Pinecone Street');
    const city = await screen.getByLabelText(/city:/i);
    userEvent.type(city, 'Corona');
    const state = await screen.getByLabelText(/state:/i);
    userEvent.type(state, 'CA');
    const zip = await screen.getByLabelText(/zip:/i);
    userEvent.type(zip, '92883');
    const button = await screen.getByRole("button");
    userEvent.click(button);
    const success = await screen.getByTestId(/successmessage/i);
    expect(success).toBeInTheDocument();
});
