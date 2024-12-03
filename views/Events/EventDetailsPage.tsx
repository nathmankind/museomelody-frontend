"use client";
import { IEvent } from "@/interface/event.interface";
import { useFetchData } from "@/utils/hooks/useFetchData";
import { usePostData } from "@/utils/hooks/useMutation";
import { FormikProvider, useFormik } from "formik";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

interface EventDetailsProps {
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  media?: {
    type: "audio" | "video";
    src: string;
  };
}

const sampleEvent: EventDetailsProps = {
  title: "Art Exhibition 2024",
  image: "/images/event1.jpg",
  date: "2024-11-20",
  location: "Art Hall, New York",
  description: `Experience an awe-inspiring journey through the world of contemporary art. 
        Join us for an exclusive showcase featuring groundbreaking works by renowned artists.`,
  highlights: [
    "Meet the artists",
    "Live painting sessions",
    "Exclusive merchandise",
    "Networking opportunities with art enthusiasts",
  ],
  media: {
    type: "video",
    src: "/media/event-highlight.mp4",
  },
};

const EventDetailsPage: React.FC = () => {
  const { event: eventId } = useParams();

  const { data: getSingleEventDetials } = useFetchData<{ data: IEvent }>(
    `/events/${eventId}`
  );

  const router = useRouter();

  const { title, image, date, location, description, highlights, media } =
    sampleEvent;

  const [isMediaModalOpen, setMediaModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const { mutateAsync, isError, error, isPending } = usePostData();
  const form = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      address: "",
    },
    onSubmit: (values) => {
      mutateAsync({
        endpoint: "/events/user/register",
        payload: { ...values, eventId },
      })
        .then((res) => {
          router.push("/events/success");
        })
        .catch((err) => {
          console.log("Error here.....", err.response.data.details.message);
          if (err.response.data.details.statusCode == 401) {
            setErrMessage("You need to be logged in to register for an event");
          } else setErrMessage(`${err.response.data.details.message}`);
        });
    },
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Event Image */}
      <div className="mb-6">
        <img
          src={getSingleEventDetials?.data.imageUrl}
          alt={getSingleEventDetials?.data.name}
          className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Event Title */}
      <h1 className="text-4xl font-bold mb-4">
        {getSingleEventDetials?.data.name}
      </h1>

      {/* Event Details */}
      <div className="text-gray-600 mb-6 space-y-2">
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {getSingleEventDetials?.data.date}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {getSingleEventDetials?.data.location}
        </p>
      </div>

      {/* Event Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">About the Event</h2>
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: getSingleEventDetials?.data.description!,
          }}
        ></p>
      </div>

      {/* Event Highlights */}
      {/* {highlights.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Media Section */}
      {getSingleEventDetials?.data.mediaUrl && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Media</h2>
          <button
            onClick={() => setMediaModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            View media
          </button>
        </div>
      )}

      {/* Media Modal */}
      {isMediaModalOpen && media && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
            <button
              onClick={() => setMediaModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {media.type === "video" ? (
              <video
                src={getSingleEventDetials?.data.mediaUrl}
                controls
                className="w-full rounded-lg"
              />
            ) : (
              <audio
                src={getSingleEventDetials?.data.mediaUrl}
                controls
                className="w-full"
              />
            )}
          </div>
        </div>
      )}

      {/* Register Button */}
      <div className="mt-8">
        <button
          onClick={() => setRegisterModalOpen(true)}
          className="px-6 py-3 bg-purple-900 text-white rounded-lg shadow"
        >
          Register for the Event
        </button>
      </div>

      {/* Registration Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              Register for the Event
            </h2>
            {isError && (
              <div className="my-3 p-2 rounded-md bg-red-200 text-red-700">
                {errMessage}
              </div>
            )}
            {/* --------------- */}
            <FormikProvider value={form}>
              <form onSubmit={form.handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    value={form.values.firstname}
                    onChange={form.handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    value={form.values.lastname}
                    onChange={form.handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    value={form.values.address}
                    onChange={form.handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    value={form.values.phone}
                    onChange={form.handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                >
                  {isPending ? "Verifying..." : "Submit"}
                </button>
              </form>
            </FormikProvider>

            {/* --------------- */}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;
