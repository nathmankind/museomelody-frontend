// app/membership/page.tsx
//import MembershipFormView from "@/app/membership/components/membershipForm";

import MembershipFormView from "@/views/Membership/components/MembershipForm";

const MembershipPage = () => {
  return (
    <div className="membership-page">
      <h1>Become a Member</h1>
      <p>Join us to enjoy exclusive benefits and experiences.</p>
      <MembershipFormView />
    </div>
  );
};

export default MembershipPage;
