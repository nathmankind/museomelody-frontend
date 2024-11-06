import Link from "next/link";

export const ToursAndEvents = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Tours and Events
        </h2>
        <p className="text-gray-700 mt-2 text-sm md:text-base">
          Dive into a world where every gallery tells a story, and every note
          echoes the spirit of creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="/images/image-banner.webp"
                  alt="Event Image"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Evolution of Musical Instruments
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Explore how instruments like the piano, violin, and guitar
                    evolved through different eras.
                  </p>
                  <div className="mt-4 space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Exhibition
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Sound Innovation
                    </span>
                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Digital Music Art
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/events" className="text-blue-600 hover:underline">
            See all →
          </Link>
        </div>
      </div>
    </section>
  );
};
