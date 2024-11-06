// components/MembershipPlans.tsx
import React from 'react';

const MembershipPlans: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10/month",
      features: ["Access to exhibitions", "Monthly newsletter"],
      bgColor: "bg-gray-100",
    },
    {
      name: "Standard",
      price: "$25/month",
      features: ["All Basic features", "Member-only events", "Gift shop discounts"],
      bgColor: "bg-purple-100",
    },
    {
      name: "Premium",
      price: "$50/month",
      features: ["All Standard features", "Exclusive previews", "Free guest passes"],
      bgColor: "bg-purple-300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-10">Membership Plans</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${plan.bgColor} flex flex-col items-center`}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="text-xl text-purple-900 my-4">{plan.price}</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-purple-900 text-white font-bold rounded-full transition hover:bg-purple-800">
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
