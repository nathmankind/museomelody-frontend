// components/MembershipPlans.tsx
import React from 'react';

const MembershipPlans: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      duration: "per month",
      features: ["Access to exhibitions", "Monthly newsletter"],
      bgColor: "bg-white",
      textColor: "text-gray-700",
    },
    {
      name: "Standard",
      price: "$25",
      duration: "per month",
      features: ["All Basic features", "Member-only events", "Gift shop discounts"],
      bgColor: "bg-purple-700",
      textColor: "text-white",
      recommended: true,
    },
    {
      name: "Premium",
      price: "$50",
      duration: "per month",
      features: ["All Standard features", "Exclusive previews", "Free guest passes"],
      bgColor: "bg-white",
      textColor: "text-gray-700",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-purple-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-purple-900 mb-6">Choose Your Membership Plan</h2>
        <p className="text-lg text-gray-600 mb-12">Access exclusive benefits and become part of our community!</p>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 ${
                plan.recommended ? "border-4 border-yellow-400" : ""
              } ${plan.bgColor} ${plan.textColor}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-3 py-1 rounded-bl-lg font-semibold text-sm">
                  Recommended
                </div>
              )}
              <h3 className="text-3xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-5xl font-extrabold mb-2">
                {plan.price} <span className="text-lg font-normal">{plan.duration}</span>
              </p>
              <ul className="space-y-3 mb-6 text-lg">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 font-bold rounded-lg transition ${
                  plan.recommended
                    ? "bg-yellow-400 text-purple-800 hover:bg-yellow-300"
                    : "bg-purple-900 text-white hover:bg-purple-800"
                }`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
