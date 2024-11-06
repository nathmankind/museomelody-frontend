import ExhibitionSection from "./components/ExhibitionSection";
import { HeroSection } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import MembershipPlans from "./components/Pricing2";
import { ToursAndEvents } from "./components/ToursAndEvents";

export const HomepageIndex = () => {
  return (
    <div className="">
      <HeroSection />
      <ExhibitionSection />
      <ToursAndEvents />
      <MembershipPlans />
      <Newsletter />
    </div>
  );
};
