import React from "react";
import { sceen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("renders the App component", () => {
  render(<App />);
});
