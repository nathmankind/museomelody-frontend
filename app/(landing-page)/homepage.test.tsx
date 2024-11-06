/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroSection } from "@/views/homepage/components/Hero";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", {
      name: /Experience the Harmony of Museums and Music/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
