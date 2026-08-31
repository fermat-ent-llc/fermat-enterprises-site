import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";

const renderHome = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );

describe("homepage", () => {
  it("names Hermes Agent as the product", () => {
    renderHome();
    expect(screen.getByRole("heading", { level: 2, name: /hermes agent/i })).toBeInTheDocument();
  });

  it("describes it as both a service and a product", () => {
    renderHome();
    expect(
      screen.getByText(/both as a service and as a product for our clients and customers/i)
    ).toBeInTheDocument();
  });

  it("still lists the four service areas", () => {
    renderHome();
    for (const s of [/consulting/i, /it technology/i, /property management/i, /real estate/i]) {
      expect(screen.getByRole("heading", { level: 3, name: s })).toBeInTheDocument();
    }
  });

  it("contact CTA points at a working mailto, not the removed /contact route", () => {
    renderHome();
    const cta = screen.getByRole("link", { name: /contact us/i });
    expect(cta).toHaveAttribute("href", "mailto:operations@fermatenterprisesllc.xyz");
  });
});
