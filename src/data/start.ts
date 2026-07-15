export type StartNotice = {
  day: string;
  month: string;
  time?: string;
  audience: "Tylko szkoła branżowa" | "Oba typy szkół";
  title: string;
  description: string;
  action: string;
  href: string;
  tone: "green" | "blue" | "yellow";
};

export const startNotices: StartNotice[] = [
  {
    day: "20",
    month: "sierpnia 2026",
    audience: "Tylko szkoła branżowa",
    title: "Umowa o pracę do weryfikacji",
    description: "Dostarcz umowę kierownikowi szkolenia praktycznego, p. Arkadiuszowi Mocarskiemu, gabinet 25.",
    action: "Termin upływa przed rozpoczęciem roku szkolnego.",
    href: "/temat/umowa-do-weryfikacji-2026/",
    tone: "green",
  },
  {
    day: "2",
    month: "września 2026",
    time: "16:00",
    audience: "Oba typy szkół",
    title: "Zebranie rodziców klas pierwszych",
    description: "Obecność rodzica lub opiekuna jest obowiązkowa. Numer sali sprawdź w komunikacie szkoły lub w VULCAN-ie.",
    action: "Należy zapewnić obecność rodzica lub opiekuna.",
    href: "/temat/zebranie-rodzicow-2026/",
    tone: "yellow",
  },
  {
    day: "30",
    month: "września 2026",
    audience: "Oba typy szkół",
    title: "Ostateczny termin dostarczenia karty zdrowia",
    description: "Pielęgniarka będzie zbierała karty zdrowia w pierwszych dniach września. Brakującą kartę trzeba dostarczyć najpóźniej do końca miesiąca.",
    action: "Kartę należy przygotować przed rozpoczęciem roku szkolnego.",
    href: "/temat/karta-zdrowia/",
    tone: "blue",
  },
];
