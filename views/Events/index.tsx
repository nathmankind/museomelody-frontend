// pages/events.tsx
"use client";
import { useState } from "react";
import EventCard from "./components/EventCard";

const eventsData = {
  past: [
    {
      title: "Art Exhibition 2023",
      date: "March 10, 2023",
      image: "/images/image_web_1.webp",
      description: "A showcase of the best modern art pieces.",
    },
    {
      title: "History of Ancient Egypt",
      date: "July 15, 2023",
      image: "/images/image_web_1.webp",
      description: "A deep dive into the fascinating history of Egypt.",
    },
  ],
  current: [
    {
      title: "Sculpture Showcase",
      date: "October 15, 2024",
      image: "/images/image_web_1.webp",
      description: "A curated selection of contemporary sculptures.",
    },
  ],
  future: [
    {
      title: "Digital Art Festival",
      date: "January 12, 2025",
      image: "/images/image_web_1.webp",
      description: "An exciting event for digital art enthusiasts.",
    },
  ],
};

const EventsPageView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"past" | "current" | "future">(
    "current"
  );

  const renderEvents = (events: any[]) => {
    return events.map((event, index) => (
      <EventCard
        key={index}
        title={event.title}
        date={event.date}
        image={event.image}
        description={event.description}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Events</h1>

      {/* Tabs for Past, Current, Future */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 text-lg font-semibold ${
            activeTab === "past"
              ? "text-purple-900 border-b-4 border-purple-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
        <button
          className={`px-6 py-2 text-lg font-semibold mx-4 ${
            activeTab === "current"
              ? "text-purple-900 border-b-4 border-purple-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("current")}
        >
          Current Events
        </button>
        <button
          className={`px-6 py-2 text-lg font-semibold ${
            activeTab === "future"
              ? "text-purple-900 border-b-4 border-purple-900"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("future")}
        >
          Future Events
        </button>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === "past" && renderEvents(eventsData.past)}
        {activeTab === "current" && renderEvents(eventsData.current)}
        {activeTab === "future" && renderEvents(eventsData.future)}
      </div>
    </div>
  );
};

export default EventsPageView;
