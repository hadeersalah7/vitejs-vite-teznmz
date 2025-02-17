import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.js"
import { getAuthToken } from "../util/auth.js";
export default function EventsDetails() {
  const eventLoader = useRouteLoaderData("eventId")

  return (
    <>
      <EventItem events={eventLoader.events} />
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.id
  const res = await fetch("http://localhost:8080/events/" + id)

  if (!res.ok) {
    throw json({ message: "couldn't load data" }, { status: 500 })
  } else {
    const data = await res.json()
    return { events: data }
  }
}

export async function detailsAction({ params, request }) {
  const eventId = params.id
  const token = getAuthToken()
  const res = await fetch("https://localhost:8080/events/" + eventId, {
    method: request.method,
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })

  if (!res.ok) {
    throw json({ message: "couldn't load data" }, { status: 500 })
  }
  // else {
  //   const data = await res.json()
  //   return { events: data }
  // }
  return redirect("/events")
}