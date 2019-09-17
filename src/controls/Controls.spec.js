// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Controls from "./Controls";

test("Message renders correctly", () => {
  render(<Controls />);
});

test("render unlocked and open by default", () => {
  const { queryByText } = render(<Controls />);
  expect(queryByText(/closed/i));
  expect(queryByText(/open/i));
});

test("button text changes", async () => {
  const { queryByText, getByText } = render(<Controls />);
});
