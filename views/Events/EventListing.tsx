import { IEvent } from "@/interface/event.interface";
import { truncateString } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

const EventsListPage: React.FC<{ events: IEvent[] }> = ({
  events,
}: {
  events: IEvent[];
}) => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

      {/* Events List */}
      <div className="space-y-8">
        {events?.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6"
          >
            {/* Event Image */}
            <div className="w-full md:w-1/3 h-56 relative">
              <img
                src={event.imageUrl}
                alt={event.name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Event Details */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold">{event.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{event.date}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
              <p
                className="mt-3 text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: truncateString(event.description, 80),
                }}
              ></p>

              <div className="mt-8">
                <Link
                  href={`/events/${event.id}`}
                  className="mt-8 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base"
                >
                  View Event
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Events State */}
      {events?.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No events available at the moment.
        </p>
      )}
    </div>
  );
};

export default EventsListPage;
