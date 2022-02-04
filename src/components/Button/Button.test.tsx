import React from "react"

import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import { Button } from './Button.component'

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<Button text="Tech friday" disabled />)
    expect(screen.getByRole('button',{ name:"Tech friday" })).toBeDisabled();
  });

});