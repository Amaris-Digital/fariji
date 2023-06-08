import React from "react";
import { render } from "@testing-library/react";
import { describe } from "jest-circus";
import { SignUpOne } from "../../components/auth/SignUpOne";
import { SignUpTwo } from "../../components/auth/SignUpTwo";
import { SignUpThree } from "../../components/auth/SignUpThree";
import { SignUpFour } from "../../components/auth/SignUpFour";
import {mockNavigate} from "../../utils/navigation";
import {BrowserRouter} from "react-router-dom";


jest.mock("../../pages/Registration", () => ({
    swipe: jest.fn(),
    swipeBack: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));
jest.mock("../../assets/uploadimage.svg", () => ({
    default: "mockedUploadImage",
}));
jest.mock('../../utils/config', () => ({
    serverURL: 'http://localhost:3000/graphql',
}));

describe("Existence of UI elements", () => {
    test("Page 1", () => {
        const screen = render(<SignUpOne />);
        const step = screen.findByText("Step 1 of 4")
        const exit = screen.getByText("Exit")
        const welcome = screen.findByText("Welcome to Fariji")
        const acceptButton = screen.getByRole("button", { name: "Yes" })
        const declineButton = screen.getByRole("button", { name: "No" })
        expect(step).toBeTruthy();
        expect(exit).toBeInTheDocument();
        expect(welcome).toBeTruthy();
        expect(acceptButton).toBeInTheDocument();
        expect(declineButton).toBeInTheDocument();
    });

    // broken test
     test("Page 2", () => {
        const screen = render(
            <BrowserRouter>
                <SignUpTwo
                    handleSubmit={jest.fn()}
                    setUser={jest.fn()}
                    user={{}}
                    isLoading={false}
                />
            </BrowserRouter>
            );
        const step = screen.findByText("Step 2 of 4")
        const exit = screen.getByText("Exit")
        const form = screen.findByRole("form")
        const formSubmit = screen.findByRole("submit")
        expect(step).toBeTruthy();
        expect(exit).toBeInTheDocument();
        expect(form).toBeTruthy();
        expect(formSubmit).toBeTruthy();
    });

    test("Page 3", () => {
        const screen = render(<SignUpThree />);
        const step = screen.findByText("Step 3 of 4")
        const exit = screen.getByText("Exit")
        const addPhoto = screen.findByText("Add a Photo")
        const uploadBtn = screen.getByRole("button", { name: "Upload Photo" })
        const skipBtn = screen.getByText("Skip")
        expect(step).toBeTruthy();
        expect(exit).toBeInTheDocument();
        expect(addPhoto).toBeTruthy();
        expect(uploadBtn).toBeInTheDocument();
        expect(skipBtn).toBeInTheDocument();
    });

    test("Page 4", () => {
        const screen = render(<SignUpFour />);
        const step = screen.findByText("Step 4 of 4")
        const exit = screen.getByText("Exit")
        const reason = screen.findByText("What is your reason for joining?")
        expect(step).toBeTruthy();
        expect(exit).toBeInTheDocument();
        expect(reason).toBeTruthy();
    });

})