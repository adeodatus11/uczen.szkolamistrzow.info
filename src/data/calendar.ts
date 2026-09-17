export type EventScope = "all" | "bs" | "t5";
export type EventTone = "green" | "blue" | "yellow";

export type CalendarEvent = {
  id: string;
  /** Data rozpoczęcia w formacie YYYY-MM-DD. */
  date: string;
  /** Ostatni dzień wydarzenia wielodniowego, włącznie. */
  endDate?: string;
  startTime?: string;
  endTime?: string;
  title: string;
  audience: string;
  scope: EventScope;
  tone: EventTone;
  description: string;
  action?: string;
  href?: string;
};

export const schoolYear = "2026/2027";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "zaswiadczenie-lekarskie-2026",
    date: "2026-08-20",
    title: "Zaświadczenie lekarskie do szkoły",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "blue",
    description: "Dostarcz zaświadczenie o braku przeciwwskazań zdrowotnych do kształcenia w wybranym zawodzie, wydane na podstawie skierowania otrzymanego w ZSZ5.",
    action: "Termin dotyczy uczniów szkoły branżowej i technikum.",
    href: "/temat/badania-lekarskie-rekrutacja-2026/",
  },
  {
    id: "umowa-o-prace-weryfikacja-2026",
    date: "2026-08-20",
    title: "Umowa o pracę do weryfikacji",
    audience: "Tylko szkoła branżowa",
    scope: "bs",
    tone: "green",
    description: "Dostarcz umowę kierownikowi szkolenia praktycznego, p. Arkadiuszowi Mocarskiemu, gabinet 25. Kontakt: amocarski@zsz5.edupage.org.",
    action: "Termin upływa przed rozpoczęciem roku szkolnego.",
    href: "/temat/umowa-do-weryfikacji-2026/",
  },
  {
    id: "rozpoczecie-roku-klasy-starsze-2026",
    date: "2026-09-01",
    startTime: "08:00",
    title: "Rozpoczęcie roku szkolnego - klasy starsze",
    audience: "Klasy starsze",
    scope: "all",
    tone: "blue",
    description: "Uczniowie klas starszych Branżowej Szkoły I stopnia i technikum spotykają się z wychowawcami w salach lekcyjnych.",
    action: "Dotyczy klas starszych obu szkół.",
  },
  {
    id: "rozpoczecie-roku-klasy-pierwsze-2026",
    date: "2026-09-01",
    startTime: "09:00",
    title: "Rozpoczęcie roku szkolnego - klasy pierwsze",
    audience: "Klasy pierwsze",
    scope: "all",
    tone: "green",
    description: "Uroczyste rozpoczęcie roku szkolnego odbyło się na boisku szkolnym.",
    action: "Dotyczy klas 1 Branżowej Szkoły I stopnia oraz klas 1 technikum.",
  },
  {
    id: "bs2-pierwsze-zajecia-2026",
    date: "2026-09-03",
    startTime: "13:15",
    title: "Pierwsze zajęcia BS II stopnia",
    audience: "Branżowa Szkoła II stopnia",
    scope: "bs",
    tone: "yellow",
    description: "Pierwsze zajęcia i spotkanie organizacyjne semestru 1 i 3. Zajęcia BS II stopnia odbywają się w poniedziałki, wtorki, czwartki i piątki w godzinach 13:15-19:00.",
    action: "Dotyczy słuchaczy semestru 1 i 3 Branżowej Szkoły II stopnia.",
  },
  {
    id: "zebranie-rodzicow-wrzesien-2026",
    date: "2026-09-04",
    startTime: "16:00",
    title: "Zebranie rodziców klas pierwszych",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "yellow",
    description: "Spotkanie organizacyjne dla rodziców i opiekunów uczniów klas pierwszych Branżowej Szkoły I stopnia oraz Technikum nr 5.",
    action: "Spotkanie już się odbyło.",
    href: "/temat/zebranie-rodzicow-2026/",
  },
  {
    id: "swieto-szkoly-2026",
    date: "2026-09-25",
    title: "Święto Szkoły, Jubileusz Szkoły",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "green",
    description: "Uroczystość szkolna dla całej społeczności ZSZ5.",
    action: "Szczegóły organizacyjne szkoła przekaże w osobnym komunikacie i w VULCAN-ie.",
  },
  {
    id: "karta-zdrowia-2026",
    date: "2026-09-30",
    title: "Ostateczny termin dostarczenia karty zdrowia",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "blue",
    description: "Pielęgniarka zbierała karty zdrowia w pierwszych dniach września. Brakującą kartę trzeba dostarczyć najpóźniej do końca miesiąca.",
    action: "Termin dotyczy nowych uczniów obu typów szkół.",
    href: "/temat/karta-zdrowia/",
  },
  {
    id: "dzien-edukacji-narodowej-2026",
    date: "2026-10-14",
    title: "Dzień Edukacji Narodowej - dzień wolny",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "yellow",
    description: "Dzień wolny od zajęć dydaktyczno-wychowawczych. Uczniowie klas 1-3 Branżowej Szkoły I stopnia są w tym dniu u pracodawców.",
    action: "Dzień wolny nie zwalnia ucznia szkoły branżowej z pracy u pracodawcy.",
  },
  {
    id: "wystawienie-ocen-polrocznych-5t-2026",
    date: "2026-12-09",
    title: "KLASY 5 TECHNIKUM: wystawienie ocen półrocznych",
    audience: "Klasy 5 technikum",
    scope: "t5",
    tone: "blue",
    description: "Nauczyciele wystawiają oceny półroczne uczniom klas 5 technikum.",
    action: "Oceny sprawdzisz w VULCAN-ie.",
  },
  {
    id: "zebranie-rodzicow-5t-grudzien-2026",
    date: "2026-12-09",
    startTime: "17:00",
    title: "KLASY 5 TECHNIKUM: zebrania z rodzicami na zakończenie I półrocza",
    audience: "Klasy 5 technikum",
    scope: "t5",
    tone: "yellow",
    description: "Wychowawcy klas 5 technikum prowadzą zebrania z rodzicami na zakończenie I półrocza.",
    action: "Spotkanie zaczyna się o godzinie 17:00.",
    href: "/temat/zebranie-rodzicow-grudzien-2026/",
  },
  {
    id: "konsultacje-grudzien-2026",
    date: "2026-12-09",
    startTime: "17:00",
    endTime: "18:00",
    title: "POZOSTAŁE KLASY: konsultacje dla uczniów i rodziców",
    audience: "Pozostałe klasy",
    scope: "all",
    tone: "yellow",
    description: "Wszyscy nauczyciele prowadzą konsultacje dla uczniów, w tym słuchaczy BS II st., i rodziców.",
    action: "Konsultacje trwają od 17:00 do 18:00.",
    href: "/temat/zebranie-rodzicow-grudzien-2026/",
  },
  {
    id: "zimowa-przerwa-swiateczna-2026",
    date: "2026-12-23",
    endDate: "2026-12-31",
    title: "Zimowa przerwa świąteczna",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "green",
    description: "Przerwa świąteczna przewidziana w organizacji roku szkolnego - brak zajęć dydaktyczno-wychowawczych dla wszystkich klas.",
    action: "Przerwa trwa od 23 do 31 grudnia 2026 r.",
  },
  {
    id: "wystawienie-ocen-srodrocznych-2027",
    date: "2027-01-07",
    title: "KLASY 1-4 TECHNIKUM, KLASY 1-3 BS I st.: wystawienie ocen śródrocznych",
    audience: "Oba typy szkół",
    scope: "all",
    tone: "blue",
    description: "Nauczyciele wystawiają oceny śródroczne uczniom klas 1-4 technikum oraz klas 1-3 Branżowej Szkoły I stopnia.",
    action: "Oceny sprawdzisz w VULCAN-ie.",
  },
];

/** Identyfikator wydarzenia zapowiadanego w oknie na stronie głównej. */
export const announcedEventId = "zebranie-rodzicow-5t-grudzien-2026";

function byDate(first: CalendarEvent, second: CalendarEvent) {
  return first.date.localeCompare(second.date)
    || (first.startTime ?? "").localeCompare(second.startTime ?? "");
}

/** Dzisiejsza data w strefie szkoły. Format "sv-SE" to YYYY-MM-DD, więc daty można porównywać jako tekst. */
export function today() {
  return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Warsaw" }).format(new Date());
}

export function isPast(event: CalendarEvent, reference = today()) {
  return (event.endDate ?? event.date) < reference;
}

export function eventById(id: string) {
  return calendarEvents.find((event) => event.id === id);
}

export function upcomingEvents(scope: EventScope = "all", reference = today()) {
  return calendarEvents
    .filter((event) => !isPast(event, reference))
    .filter((event) => scope === "all" || event.scope === "all" || event.scope === scope)
    .sort(byDate);
}

/** Archiwum: od najnowszego dnia, ale w obrębie dnia zachowujemy kolejność godzin. */
export function archivedEvents(reference = today()) {
  return calendarEvents
    .filter((event) => isPast(event, reference))
    .sort((first, second) => second.date.localeCompare(first.date)
      || (first.startTime ?? "").localeCompare(second.startTime ?? ""));
}

export function eventsOnDay(date: string) {
  return calendarEvents.filter((event) => event.date === date).sort(byDate);
}
