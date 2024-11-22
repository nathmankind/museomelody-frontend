/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MembershipForm from "@/views/Membership";

describe("Home", () => {
  it("renders a heading in the membership form", () => {
    render(<MembershipForm />);

    const heading = screen.getByRole("heading", {
      name: /Membership Form/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a button for submission in the membership form", () => {
    render(<MembershipForm />);

    const heading = screen.getByRole("button", {
      name: /Submit/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders individual as an option in the dropdown options in the membership form", () => {
    render(<MembershipForm />);

    const heading = screen.getByRole("option", {
      name: /Individual/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders "family" as an option in the dropdown options in the membership form', () => {
    render(<MembershipForm />);

    const heading = screen.getByRole("option", {
      name: /Family/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders student as an option in the dropdown options in the membership form", () => {
    render(<MembershipForm />);

    const heading = screen.getByRole("option", {
      name: /Student/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
