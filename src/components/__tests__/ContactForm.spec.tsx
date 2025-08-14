import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import ContactForm from "../ContactForm";
import "@testing-library/jest-dom";
import {ISendMessageRequestBody} from "../../types/messages";

const formData: ISendMessageRequestBody = {
    username: "Alex",
    email: "alex@gmail.com",
    message: "some text"
}

beforeEach(() => {
    window.alert = jest.fn();

    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve({success: true}),
        })
    ) as jest.Mock;
});


describe("ContactForm", () => {
    it("should update username input correctly", async () => {
        render(<ContactForm/>)
        const usernameInput = screen.getByPlaceholderText("Enter your name");
        const emailInput = screen.getByPlaceholderText("Enter your email");
        const messageInput = screen.getByPlaceholderText("Enter your message");
        const button = screen.getByRole("button");
        fireEvent.change(usernameInput, {target: {value: formData.username}});
        fireEvent.change(emailInput, {target: {value: formData.email}});
        fireEvent.change(messageInput, {target: {value: formData.message}});
        expect(usernameInput).toHaveValue("Alex");
        expect(emailInput).toHaveValue("alex@gmail.com");
        expect(messageInput).toHaveValue("some text");
        fireEvent.click(button);
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith("Your message has been sent!");
        });
    });
    it("shows error message on fetch fail", async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({
                ok: false,
                status: 500
            })
        );
        render(<ContactForm/>)
        const usernameInput = screen.getByPlaceholderText("Enter your name");
        const emailInput = screen.getByPlaceholderText("Enter your email");
        const messageInput = screen.getByPlaceholderText("Enter your message");
        const button = screen.getByRole("button");
        fireEvent.change(usernameInput, {target: {value: formData.username}});
        fireEvent.change(emailInput, {target: {value: formData.email}});
        fireEvent.change(messageInput, {target: {value: formData.message}});
        fireEvent.click(button);
        await waitFor(() => {
            expect(screen.getByText("Error loading ContactForm: HTTP error! Status: 500")).toBeInTheDocument();
        })
    })
    it("shows loading initially", async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() =>
            new Promise(() => {
            })
        );

        render(<ContactForm/>)
        const usernameInput = screen.getByPlaceholderText("Enter your name");
        const emailInput = screen.getByPlaceholderText("Enter your email");
        const messageInput = screen.getByPlaceholderText("Enter your message");
        const button = screen.getByRole("button");
        fireEvent.change(usernameInput, {target: {value: formData.username}});
        fireEvent.change(emailInput, {target: {value: formData.email}});
        fireEvent.change(messageInput, {target: {value: formData.message}});
        fireEvent.click(button);
        await waitFor(() => {
            expect(screen.getByText("Loading ContactForm…")).toBeInTheDocument();
        })
    })

})