/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroSection } from "@/views/homepage/components/Hero";
import Home from "./page";

describe("Home", () => {
  it("renders a heading in the hero section of the homepage", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", {
      name: /Experience the Harmony of Museums and Music/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a link in the hero section of the homepage", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("link", {
      name: /Check Exhibitions/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a the exhibition section in the homepage", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /EXHIBITIONS AND ART/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
