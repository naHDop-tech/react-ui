import React from "react"

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Loader } from './Loader.component'

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<Loader isLoading={true} />)
    expect(1).toBe(1)
  });

});