// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";

import Dashboard from "./Dashboard";

test("Close is true when lock is true", () => {
  const state = {
    closed: true,
    locked: true,
  };
  if (state === true) {
    expect(state).tobeValid();
  }
  if (!state.locked) {
    expect(!state.closed.toBe(!state.locked));
  }
});

test("Control shows on Dashboard", () => {
  const { queryByText } = render(<Dashboard />);
  expect(queryByText(/Close Gate/i));
});

test("Display shows on Dashboard", () => {
  const { queryByText } = render(<Dashboard />);
  expect(queryByText(/Open/i));
});

test("both control and display show at all time", () => {
  const { queryByText } = render(<Dashboard />);
  expect(queryByText(/Gate/i));
  expect(queryByText(/ed/i));
});
