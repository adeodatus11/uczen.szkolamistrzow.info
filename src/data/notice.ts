/**
 * Baner z jednorazowym komunikatem, pokazywany na każdej stronie.
 *
 * Baner znika sam: przy budowaniu serwisu pomijamy komunikat po terminie,
 * a w przeglądarce skrypt ukrywa go dokładnie o godzinie podanej w `expiresAt`,
 * więc nie trzeba pamiętać o ręcznym usunięciu wpisu.
 *
 * Żeby zdjąć baner wcześniej, wystarczy ustawić `siteNotice` na `null`.
 */

export type NoticeRow = {
  label: string;
  value: string;
};

export type SiteNotice = {
  /** Używany w kluczu ukrywania baneru po stronie przeglądarki. */
  id: string;
  eyebrow: string;
  title: string;
  /** Zdania widoczne zawsze, bez rozwijania szczegółów. */
  summary: string[];
  detailsLabel: string;
  scheduleHeading: string;
  schedule: NoticeRow[];
  /** Pełna treść komunikatu, widoczna po rozwinięciu. */
  details: string[];
  href?: string;
  linkLabel?: string;
  /** Ostatnia chwila wyświetlania baneru, w czasie lokalnym (Europe/Warsaw). */
  expiresAt: string;
};

export const siteNotice: SiteNotice | null = {
  id: "zmiana-organizacji-2026-10-13",
  eyebrow: "Komunikat szkoły",
  title: "Zmiana organizacji zajęć - 13 i 14 października 2026 r.",
  summary: [
    "Wtorek 13 października: w związku z uroczystą akademią z okazji Dnia Edukacji Narodowej ostatnie godziny lekcyjne są skrócone.",
    "Środa 14 października, Dzień Edukacji Narodowej: dzień wolny od zajęć lekcyjnych.",
  ],
  detailsLabel: "Pokaż harmonogram i szczegóły",
  scheduleHeading: "Wtorek 13 października, od 8. godziny lekcyjnej",
  schedule: [
    { label: "8. godzina", value: "14:05-14:35" },
    { label: "9. godzina", value: "14:40-15:10" },
    { label: "10. godzina", value: "15:15-15:45" },
    { label: "11. godzina", value: "15:50-16:20" },
  ],
  details: [
    "Pozostałe godziny lekcyjne odbywają się zgodnie ze standardowym rozkładem zajęć.",
    "W środę 14 października w szkole nie odbywają się zajęcia dydaktyczne.",
    "Uczniowie Branżowej Szkoły I stopnia będący pracownikami młodocianymi pozostają w tym dniu do dyspozycji swoich pracodawców, zgodnie z obowiązującym ich rozkładem czasu pracy oraz zasadami wynikającymi z zawartych umów o pracę w celu przygotowania zawodowego. Dzień wolny od zajęć lekcyjnych w szkole nie oznacza automatycznie dnia wolnego od pracy u pracodawcy.",
    "Prosimy uczniów i rodziców o uwzględnienie powyższych informacji w organizacji najbliższych dni.",
  ],
  href: "/terminarz/",
  linkLabel: "Zobacz w terminarzu",
  expiresAt: "2026-10-14T23:59:59+02:00",
};

/** Czy komunikat jest jeszcze aktualny w chwili budowania serwisu. */
export function noticeIsCurrent(notice: SiteNotice | null, now = new Date()): notice is SiteNotice {
  return notice !== null && now.getTime() <= Date.parse(notice.expiresAt);
}
