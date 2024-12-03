import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      className="relative sm:h-[720px] h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url('/images/museo-melody-hero.webp')` }}
    >
      <div className="absolute inset-0 bg-[#00000053] bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Experience the Harmony of Museums and Music
        </h1>
        <p className="text-gray-200 mt-4 max-w-xl text-sm md:text-base">
          Discover the Rhythm of History and the Melody of Creativity. Dive into
          a world where every gallery tells a story, and every note echoes the
          spirit of creativity.
        </p>
        <Link
          href="/events"
          className="mt-8 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base"
        >
          Check Events
        </Link>
      </div>
    </section>
  );
};
