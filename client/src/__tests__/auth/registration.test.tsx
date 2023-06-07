import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MockedProvider } from '@apollo/client/testing';
import {describe} from "jest-circus";
import 'swiper/swiper.css'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import {Registration} from "../../pages/Registration";
import { mutations } from '../../graphql/auth';

// mocks
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
}));
jest.mock("swiper/react", () => jest.fn(() => null));
jest.mock('../../assets/uploadimage.svg', () => 'test-image');

// Register Page Navigation
describe("Registration Page Navigation", () => {

    test("should render form after clicking yes", async () => {
        const authToken: string = "test-token"
        const mocks =  [
            {
                request: {
                    query: mutations.REGISTER,
                    variables: {
                        phone: "1234567890",
                        dateOfBirth: "2021-09-01",
                        password: "test-password"
                    },
                },
                result: {
                    data: {
                        register: {
                            status: "success",
                            message: "User created successfully",
                            body: {
                                authToken
                            }
                        }
                    }
                }
            }
        ]
        const screen = render(
          <MockedProvider mocks={mocks} addTypename={false}>
              <MemoryRouter initialEntries={["/signup"]}>
                  <Routes>
                      <Route path={"/signup"} element={<Registration/>} />
                  </Routes>
              </MemoryRouter>
          </MockedProvider>
        )
        fireEvent.click(screen.getByText("Hello"))
        expect(screen.getByText("Hello")).toBeInTheDocument()
    })

})