export const Newsletter = () => {
  return (
    <section className="py-8 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Sign up for our newsletter
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Be the first to know about releases and industry news and insights.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center">
          <input
            type="email"
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-t-md md:rounded-l-md md:rounded-t-none focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-b-md md:rounded-r-md md:rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
