import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen } from '@testing-library/react'

import { TextInput } from "./TextInput.component";

describe("Running Test for Tech friday Input", () => {

  test("Check placeholder in Input", () => {
    render(<TextInput placeholder="Hello tech friday" />)
    expect(screen.getByPlaceholderText('Hello tech friday')).toHaveAttribute('placeholder', 'Hello tech friday');
  });

  test("renders the Input component", () => {
    render(<TextInput placeholder="tech friday" />)
    const input = screen.getByPlaceholderText('tech friday') as HTMLInputElement
    userEvent.type(input, 'Hello world!')
    expect(input.value).toBe('Hello world!')
  });

});