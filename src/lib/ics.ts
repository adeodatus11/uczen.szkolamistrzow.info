import type { CalendarEvent } from "../data/calendar";

/**
 * Definicja strefy czasowej szkoły. Dzięki niej godzina zapisana w pliku
 * nie zmienia się w zależności od ustawień kalendarza odbiorcy.
 */
const warsawTimezone = [
  "BEGIN:VTIMEZONE",
  "TZID:Europe/Warsaw",
  "BEGIN:DAYLIGHT",
  "TZOFFSETFROM:+0100",
  "TZOFFSETTO:+0200",
  "TZNAME:CEST",
  "DTSTART:19700329T020000",
  "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
  "END:DAYLIGHT",
  "BEGIN:STANDARD",
  "TZOFFSETFROM:+0200",
  "TZOFFSETTO:+0100",
  "TZNAME:CET",
  "DTSTART:19701025T030000",
  "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
  "END:STANDARD",
  "END:VTIMEZONE",
];

function escapeText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/** RFC 5545 dopuszcza 75 oktetów w wierszu; dalszy ciąg zaczyna się od spacji. */
function fold(line: string) {
  const encoder = new TextEncoder();
  const parts: string[] = [];
  let current = "";
  let bytes = 0;

  for (const char of line) {
    const size = encoder.encode(char).length;
    const limit = parts.length === 0 ? 75 : 74;
    if (bytes + size > limit) {
      parts.push(current);
      current = "";
      bytes = 0;
    }
    current += char;
    bytes += size;
  }

  parts.push(current);
  return parts.join("\r\n ");
}

function toDateValue(date: string) {
  return date.replace(/-/g, "");
}

/** Dla wydarzeń całodniowych DTEND wskazuje pierwszy dzień po wydarzeniu. */
function dayAfter(date: string) {
  const next = new Date(`${date}T12:00:00Z`);
  next.setUTCDate(next.getUTCDate() + 1);
  return next.toISOString().slice(0, 10).replace(/-/g, "");
}

function addHour(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return `${String(((hours ?? 0) + 1) % 24).padStart(2, "0")}:${String(minutes ?? 0).padStart(2, "0")}`;
}

function toDateTimeValue(date: string, time: string) {
  return `${toDateValue(date)}T${time.replace(":", "")}00`;
}

function eventLines(event: CalendarEvent, url?: string) {
  const lines = [
    "BEGIN:VEVENT",
    `UID:${event.id}@informator.szkolamistrzow.info`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
    `SUMMARY:${escapeText(event.title)}`,
    `DESCRIPTION:${escapeText(event.action ? `${event.description} ${event.action}` : event.description)}`,
  ];

  if (event.startTime) {
    lines.push(`DTSTART;TZID=Europe/Warsaw:${toDateTimeValue(event.date, event.startTime)}`);
    lines.push(`DTEND;TZID=Europe/Warsaw:${toDateTimeValue(event.endDate ?? event.date, event.endTime ?? addHour(event.startTime))}`);
  } else {
    lines.push(`DTSTART;VALUE=DATE:${toDateValue(event.date)}`);
    lines.push(`DTEND;VALUE=DATE:${dayAfter(event.endDate ?? event.date)}`);
  }

  if (url) lines.push(`URL:${url}`);
  lines.push("END:VEVENT");
  return lines;
}

export function buildIcs(event: CalendarEvent, url?: string) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Informator Szkoly Mistrzow//Terminarz ZSZ5//PL",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...(event.startTime ? warsawTimezone : []),
    ...eventLines(event, url),
    "END:VCALENDAR",
  ];

  return `${lines.map(fold).join("\r\n")}\r\n`;
}
