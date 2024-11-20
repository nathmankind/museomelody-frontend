/* eslint-disable @next/next/no-html-link-for-pages */
export default function MembershipSuccess() {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold text-purple-900 mb-4">
          Thank You for Becoming a Member!
        </h1>
        <p className="text-gray-600 mb-8">
          Your membership has been successfully processed.
        </p>
        <a
          href="/"
          className="text-purple-600 hover:text-purple-800 underline"
        >
          Return to Home
        </a>
      </div>
    );
  }