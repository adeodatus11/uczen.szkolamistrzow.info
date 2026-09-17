import type { APIRoute } from "astro";
import { calendarEvents, type CalendarEvent } from "../../data/calendar";
import { buildIcs } from "../../lib/ics";

export function getStaticPaths() {
  return calendarEvents.map((event) => ({ params: { id: event.id }, props: { event } }));
}

export const GET: APIRoute = ({ props, site }) => {
  const event = props.event as CalendarEvent;
  const url = site ? new URL(`${import.meta.env.BASE_URL.replace(/\/$/, "")}/terminarz/`, site).href : undefined;

  return new Response(buildIcs(event, url), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.id}.ics"`,
    },
  });
};
