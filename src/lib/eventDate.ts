import type { CalendarEvent } from "../data/calendar";

const fullDateFormatter = new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const weekdayFormatter = new Intl.DateTimeFormat("pl-PL", { weekday: "long", timeZone: "UTC" });
const shortMonthFormatter = new Intl.DateTimeFormat("pl-PL", { month: "short", timeZone: "UTC" });

/** Daty w danych są zapisane jako YYYY-MM-DD, więc czytamy je w UTC i tak samo formatujemy. */
function asDate(date: string) {
  return new Date(`${date}T12:00:00Z`);
}

export function dayNumber(date: string) {
  return String(asDate(date).getUTCDate());
}

/** Miesiąc w dopełniaczu wraz z rokiem, np. "grudnia 2026". */
export function monthAndYear(date: string) {
  return fullDateFormatter.format(asDate(date)).replace(/^\d+\s/, "");
}

/** Skrót miesiąca do kafelków z datą, np. "gru". */
export function shortMonth(date: string) {
  return shortMonthFormatter.format(asDate(date));
}

export function fullDate(date: string) {
  return fullDateFormatter.format(asDate(date));
}

export function weekday(date: string) {
  return weekdayFormatter.format(asDate(date));
}

/** Pełny opis terminu, np. "środa, 9 grudnia 2026" albo zakres dni. */
export function eventDateLabel(event: CalendarEvent) {
  if (event.endDate) return `${fullDate(event.date)} - ${fullDate(event.endDate)}`;
  return `${weekday(event.date)}, ${fullDate(event.date)}`;
}

export function eventTimeLabel(event: CalendarEvent) {
  if (!event.startTime) return undefined;
  return event.endTime ? `${event.startTime} - ${event.endTime}` : event.startTime;
}

/** Nagłówek terminu w formacie używanym w kalendarzu szkoły, np. "środa, 9 grudnia 2026 · 17:00". */
export function eventHeadline(event: CalendarEvent) {
  const time = eventTimeLabel(event);
  return time ? `${eventDateLabel(event)} · ${time}` : eventDateLabel(event);
}
