export type SourceType = "szkolne" | "urzędowe" | "prawo" | "standard" | "archiwum";

export type Source = {
  id: string;
  title: string;
  url: string;
  type: SourceType;
  verifiedAt: string;
  description: string;
};

export const sources: Source[] = [
  {
    id: "statut-zsz5",
    title: "Statut Zespołu Szkół Zawodowych nr 5",
    url: "https://cloud-c.edupage.org/cloud/Statut_Zespolu_Szkol_Zawodowych_nr_20251015.pdf?z%3Asbu4ax7PRPWla7k0wzDlbS%2Fp%2BaPn9iCk2GiI7HOZH4X2MzM7PeHpRRq1%2BWNm8iGCkrlWuNDpaqwmxbgSMfUDDw%3D%3D=",
    type: "szkolne",
    verifiedAt: "2026-07-15",
    description: "Tekst jednolity obowiązujący od 16 października 2025 r. Źródło praw i obowiązków ucznia, zasad nieobecności, oceniania i praktycznej nauki zawodu.",
  },
  {
    id: "zsz5-contact",
    title: "Kontakt ZSZ nr 5 we Wrocławiu",
    url: "https://zsz5.edupage.org/contact/",
    type: "szkolne",
    verifiedAt: "2026-07-15",
    description: "Oficjalny adres, telefon, e-mail, ePUAP i dane szkoły.",
  },
  {
    id: "zsz5-main",
    title: "Oficjalna strona ZSZ nr 5",
    url: "https://zsz5.edupage.org/",
    type: "szkolne",
    verifiedAt: "2026-07-15",
    description: "Aktualności, komunikaty, dokumenty szkolne i bieżąca organizacja pracy szkoły.",
  },
  {
    id: "vulcan-login",
    title: "Dziennik VULCAN: logowanie dla Wrocławia",
    url: "https://uonetplus.vulcan.net.pl/wroclaw",
    type: "urzędowe",
    verifiedAt: "2026-07-15",
    description: "Strona logowania do dziennika elektronicznego dla wrocławskich placówek.",
  },
  {
    id: "vulcan-first-login",
    title: "VULCAN: pierwsze logowanie",
    url: "https://www.bazawiedzy.vulcan.edu.pl/bazawiedzy.php/showAplikaja/3/8/0/004676/0",
    type: "urzędowe",
    verifiedAt: "2026-07-15",
    description: "Instrukcja aktywacji konta i ustawienia hasła dla ucznia lub rodzica.",
  },
  {
    id: "pip-mlodociani",
    title: "PIP: Zatrudnianie pracowników młodocianych",
    url: "https://www.pip.gov.pl/dla-pracownikow/porady-prawne/zatrudnianie-pracownikow-mlodocianych",
    type: "urzędowe",
    verifiedAt: "2026-07-15",
    description: "Praktyczne objaśnienia dotyczące umowy, czasu pracy, urlopu, BHP oraz obowiązków stron.",
  },
  {
    id: "men-mlodociani",
    title: "MEN: Przygotowanie zawodowe młodocianych pracowników",
    url: "https://www.gov.pl/web/edukacja/przygotowanie-zawodowe-mlodocianych-pracownikow-w-formie-nauki-zawodu.",
    type: "urzędowe",
    verifiedAt: "2026-07-15",
    description: "Zasady przyjęcia do BS I, badań, czasu pracy, urlopu, współpracy szkoły z pracodawcą i egzaminów.",
  },
  {
    id: "kodeks-pracy",
    title: "Kodeks pracy, tekst jednolity z 2025 r.",
    url: "https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20250000277/T/D20250277L.pdf",
    type: "prawo",
    verifiedAt: "2026-07-15",
    description: "Dział IX Kodeksu pracy: zatrudnianie młodocianych, ochrona zdrowia, czas pracy i urlopy.",
  },
  {
    id: "wynagrodzenie-mlodocianych",
    title: "Rozporządzenie o wynagradzaniu młodocianych",
    url: "https://eli.gov.pl/api/acts/DU/2023/1348/text.html",
    type: "prawo",
    verifiedAt: "2026-07-15",
    description: "Minimalne stawki procentowe wynagrodzenia w kolejnych latach nauki zawodu.",
  },
  {
    id: "praktyczna-nauka",
    title: "Rozporządzenie w sprawie praktycznej nauki zawodu",
    url: "https://eli.gov.pl/api/acts/DU/2019/391/text.html",
    type: "prawo",
    verifiedAt: "2026-07-15",
    description: "Organizacja zajęć praktycznych i praktyk zawodowych oraz zadania szkoły, pracodawcy i opiekuna.",
  },
  {
    id: "wcag-22",
    title: "W3C: WCAG 2.2",
    url: "https://www.w3.org/TR/WCAG22/",
    type: "standard",
    verifiedAt: "2026-07-15",
    description: "Standard dostępności treści i interfejsów internetowych.",
  },
  {
    id: "wai-clear-content",
    title: "W3C WAI: Jasna i zrozumiała treść",
    url: "https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/",
    type: "standard",
    verifiedAt: "2026-07-15",
    description: "Prosty język, krótkie bloki tekstu, jednoznaczne instrukcje i przewidywalna struktura.",
  },
  {
    id: "rodzice-archiwum",
    title: "Archiwalny poradnik dla rodziców",
    url: "https://www.rodzice.szkolamistrzow.info/home",
    type: "archiwum",
    verifiedAt: "2026-07-15",
    description: "Punkt odniesienia dla dotychczasowych treści. Nie należy go traktować jako źródła aktualnego statutu.",
  },
  {
    id: "szef",
    title: "Strefa Pracodawcy Szkoły Mistrzów",
    url: "https://szef.szkolamistrzow.info/",
    type: "szkolne",
    verifiedAt: "2026-07-15",
    description: "Uzupełniająca baza wiedzy i dokumentów dla pracodawców szkolących młodocianych.",
  },
];

export const sourceById = new Map(sources.map((source) => [source.id, source]));
