// components/ExhibitionSection.tsx
import React from "react";

const ExhibitionSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              EXHIBITIONS AND ART
            </h2>
            <p className="text-gray-700 mb-6">
              Discover our latest exhibitions, featuring a variety of artistic
              expressions, from contemporary works to timeless classics. Dive
              into a world where art and history come to life, each piece
              telling its own unique story.
            </p>
            <p className="text-gray-700 mb-8">
              Join us to explore curated displays, interactive installations,
              and artist showcases designed to inspire, challenge, and educate.
              Museomelody invites you to explore curated exhibitions that not
              only showcase captivating artworks but also immerse you in the
              sounds that inspire them.
            </p>
            <a
              href="#"
              className="bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Learn More
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="h-full">
            <img
              src="./images/pexels-cottonbro.webp"
              alt="Exhibition artwork"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSection;
