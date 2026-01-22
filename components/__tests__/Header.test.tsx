import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "../Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

describe("Header", () => {
  it("highlights the active route", () => {
    render(<Header />);

    const activeLink = screen.getByRole("link", { name: /projects/i });
    expect(activeLink).toHaveClass("text-purple-500");
  });
});
