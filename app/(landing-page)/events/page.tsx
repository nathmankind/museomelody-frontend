"use client";
import { IEvent } from "@/interface/event.interface";
import { useFetchData } from "@/utils/hooks/useFetchData";
import EventsListPage from "@/views/Events/EventListing";

interface IEventResponse {
  data: IEvent[];
}
export default function EventsPage() {
  const getAllEvents = useFetchData<IEventResponse>("/events");

  console.log("IEventResponse", getAllEvents);
  return <EventsListPage events={getAllEvents.data?.data || []} />;
}
