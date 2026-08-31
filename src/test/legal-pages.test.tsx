import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

const renderAt = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe("Privacy Policy", () => {
  it("renders its heading and last-updated date", () => {
    renderAt(<Privacy />);
    expect(screen.getByRole("heading", { level: 1, name: /privacy policy/i })).toBeInTheDocument();
    // "Last updated" also appears inside the Changes clause, so match the date.
    expect(screen.getByText(/last updated: august 31, 2026/i)).toBeInTheDocument();
  });

  it("covers the sections a policy is expected to have", () => {
    renderAt(<Privacy />);
    for (const heading of [
      /information you provide/i,
      /information collected automatically/i,
      /how we use information/i,
      /data retention/i,
      /security/i,
      /your rights and choices/i,
      /children's privacy/i,
      /contact us/i,
    ]) {
      expect(screen.getByRole("heading", { level: 2, name: heading })).toBeInTheDocument();
    }
  });

  it("states that personal information is not sold", () => {
    renderAt(<Privacy />);
    expect(screen.getByText(/we do not sell your personal information/i)).toBeInTheDocument();
  });
});

describe("Terms of Service", () => {
  it("renders its heading", () => {
    renderAt(<Terms />);
    expect(screen.getByRole("heading", { level: 1, name: /terms of service/i })).toBeInTheDocument();
  });

  it("covers the clauses a terms document is expected to have", () => {
    renderAt(<Terms />);
    for (const heading of [
      /acceptance of terms/i,
      /acceptable use/i,
      /intellectual property/i,
      /disclaimer of warranties/i,
      /limitation of liability/i,
      /indemnification/i,
      /termination/i,
      /governing law and disputes/i,
    ]) {
      expect(screen.getByRole("heading", { level: 2, name: heading })).toBeInTheDocument();
    }
  });
});

describe("legal pages are reachable from the footer", () => {
  it("links to both from the shared layout", () => {
    renderAt(<Privacy />);
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy");
    expect(screen.getByRole("link", { name: /terms of service/i })).toHaveAttribute("href", "/terms");
  });
});

describe("names the application", () => {
  it("Privacy Policy names Hermes Agent", () => {
    renderAt(<Privacy />);
    expect(screen.getAllByText(/hermes agent/i).length).toBeGreaterThan(0);
  });

  it("Terms names Hermes Agent", () => {
    renderAt(<Terms />);
    expect(screen.getAllByText(/hermes agent/i).length).toBeGreaterThan(0);
  });
});

// Guards against shipping bracketed fill-ins to production unnoticed.
describe("placeholder audit", () => {
  it("has no unfilled placeholders left", () => {
    const { container: p } = renderAt(<Privacy />);
    const { container: t } = renderAt(<Terms />);
    const found = [...new Set(
      [...(p.textContent + t.textContent).matchAll(/\[([A-Z ]+)\]/g)].map((m) => m[1])
    )];
    expect(found).toEqual([]);
  });

  it("uses the real contact address and jurisdiction", () => {
    renderAt(<Privacy />);
    expect(screen.getAllByRole("link", { name: /operations@fermatenterprisesllc\.xyz/i }).length)
      .toBeGreaterThan(0);
  });

  it("names Utah as the governing jurisdiction", () => {
    renderAt(<Terms />);
    expect(screen.getByText(/laws of the State of Utah/i)).toBeInTheDocument();
  });
});
