import React from "react";
import { useRouter } from "next/navigation";

const SuccessPage: React.FC = () => {
  const router = useRouter();

  const handleReturnToEvents = () => {
    // Navigate back to events listing page
    router.push("/events"); // Replace with the actual route for your events page
  };

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <div className="h-[50vh] flex flex-col items-center justify-center ">
        {/* Success Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-purple-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-purple-900 mb-4">
          Registration Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for registering for the event. We look forward to seeing you
          there!
        </p>

        {/* Actions */}
        <div>
          <button
            onClick={handleReturnToEvents}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-blue-700 mr-4"
          >
            Return to Events
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
