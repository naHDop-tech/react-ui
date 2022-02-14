import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen } from '@testing-library/react'

import { NumberInput } from "./NumberInput.component";

describe("Running Test for Tech friday Input", () => {

  test("Check placeholder in Input", () => {
    render(<NumberInput placeholder="Hello tech friday" />)
    expect(screen.getByPlaceholderText('Hello tech friday')).toHaveAttribute('placeholder', 'Hello tech friday');
  });

  test("renders the Input component", () => {
    render(<NumberInput placeholder="tech friday" />)
    const input = screen.getByPlaceholderText('tech friday') as HTMLInputElement
    userEvent.type(input, "345")
    expect(input.value).toBe("345")
  });

});