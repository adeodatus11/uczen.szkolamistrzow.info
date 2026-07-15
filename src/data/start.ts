export type StartNotice = {
  day: string;
  month: string;
  time?: string;
  audience: "Tylko BS I" | "BS I i T5";
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
    audience: "Tylko BS I",
    title: "Umowa o pracę do weryfikacji",
    description: "Dostarcz umowę kierownikowi szkolenia praktycznego, p. Arkadiuszowi Mocarskiemu, gabinet 25.",
    action: "Nie czekaj do rozpoczęcia lekcji. Termin mija jeszcze w wakacje.",
    href: "/temat/umowa-do-weryfikacji-2026/",
    tone: "green",
  },
  {
    day: "2",
    month: "września 2026",
    time: "16:00",
    audience: "BS I i T5",
    title: "Zebranie rodziców klas pierwszych",
    description: "Obecność rodzica lub opiekuna jest obowiązkowa. Numer sali sprawdź w komunikacie szkoły lub w VULCAN-ie.",
    action: "Zapisz termin i zaplanuj obecność.",
    href: "/temat/zebranie-rodzicow-2026/",
    tone: "yellow",
  },
  {
    day: "30",
    month: "września 2026",
    audience: "BS I i T5",
    title: "Ostateczny termin dostarczenia karty zdrowia",
    description: "Pielęgniarka będzie zbierała karty zdrowia w pierwszych dniach września. Brakującą kartę trzeba dostarczyć najpóźniej do końca miesiąca.",
    action: "Przygotuj kartę przed rozpoczęciem roku szkolnego.",
    href: "/temat/karta-zdrowia/",
    tone: "blue",
  },
];
