// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Display from "./Display";

test("Display gate is open/closed", () => {
  const { queryByText } = render(<Display />);
  expect(queryByText(/open/i || /close/i));
});

test("Display gate is open/closed", () => {
  const { queryByText } = render(<Display />);
  expect(queryByText(/locked/i || /unlocked/i));
});

test("Close and Open are displayed", () => {
  const state = {
    closedClass: true,
  };
  const { queryByText } = render(<Display />);

  if (state.closedClass === true) {
    expect(queryByText(/Closed/i));
  } else {
    expect(queryByText(/Open/i));
  }
});

test("Locked and Unlocked are displayed", () => {
  const state = {
    lockedClass: true,
  };
  const { queryByText } = render(<Display />);

  if (state.lockedClass === true) {
    expect(queryByText(/Locked/i));
  } else {
    expect(queryByText(/Unlocked/i));
  }
});

test("Unlocked and Open have red-led class", () => {
  const { queryByText, toHaveClass } = render(<Display />);
  const unlocked = queryByText("Unlocked");
  if (unlocked === true) expect(toHaveClass("green-led"));
});

test("Locked and Closed have red-led class", () => {
  const { queryByText, toHaveClass } = render(<Display />);
  const locked = queryByText("locked");
  if (locked === true) expect(toHaveClass("red-led"));
});
