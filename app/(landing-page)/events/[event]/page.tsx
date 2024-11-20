"use client";

// pages/event/[id].tsx
import { useRouter, useSearchParams } from "next/navigation";

const EventDetailsPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  const searchParams = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const searchQuery = searchParams.get("id");

  // Simulated event details (you can replace this with actual data fetching)
  const eventDetails = {
    title: "Art Exhibition 2024",
    date: "October 25, 2024",
    image: "/images/event_img_1.jpg", // Replace with actual image
    description:
      "Join us for an extraordinary exhibition showcasing contemporary art from renowned artists around the globe. This event promises to immerse you in a visual and sensory experience.",
    artist: {
      name: "Jane Doe",
      description:
        "A world-renowned painter known for her vibrant color palette and expressive strokes.",
      image: "/images/image_web_1.webp", // Replace with actual artist image
    },
    audioSrc: "/audio-preview.mp3", // Replace with actual audio file
    features: [
      "Exclusive access to VIP galleries",
      "Live painting sessions",
      "Artist meet and greet",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Event Title */}
      <h1 className="text-4xl font-bold text-purple-900 text-center mb-6">
        {eventDetails.title}
      </h1>

      {/* Large Event Image */}
      <div className="mb-6">
        <img
          src={eventDetails.image}
          alt={eventDetails.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Event Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Description and Date */}
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">{eventDetails.description}</p>
          <p className="text-gray-700 text-lg">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            itaque doloribus magni nemo numquam corrupti aspernatur aperiam et
            deleniti quas! Molestias consectetur necessitatibus hic ducimus, rem
            repudiandae quis sed tempora.
          </p>

          <p className="text-gray-500">Date: {eventDetails.date}</p>
        </div>

        {/* Featured Artist Section */}
        <div className="flex flex-col items-center bg-gray-100 shadow-md">
          {/* <img
            src={eventDetails.artist.image}
            alt={eventDetails.artist.name}
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold text-purple-900">
            {eventDetails.artist.name}
          </h2>
          <p className="text-gray-600 text-center">
            {eventDetails.artist.description}
          </p> */}

          <img
            src={eventDetails.artist.image}
            alt={eventDetails.artist.name}
            className="h-[350px] object-cover w-full  mb-4"
          />
        </div>
      </div>

      {/* Audio Player */}
      <div className="my-8">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          Event Audio Preview
        </h3>
        <audio controls className="w-full">
          <source src={eventDetails.audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Features to Look Out For */}
      <div className="my-8">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          Features to Look Out For
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {eventDetails.features.map((feature, index) => (
            <li key={index} className="text-gray-700 text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDetailsPage;
