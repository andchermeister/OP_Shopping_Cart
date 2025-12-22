import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar.jsx";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
  it("renders correct heading", () => {
    render(
      <MemoryRouter>
        <Navbar basketCounter={0} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch(
      /scuderia ferrari/i
    );
  });
});
