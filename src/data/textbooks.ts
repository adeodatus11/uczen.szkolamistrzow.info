export type TextbookEntry = {
  group: "Przedmioty ogólne" | "Przedmioty zawodowe";
  subject: string;
  classes: string;
  title: string;
  details?: string;
  note?: string;
};

export type TextbookProgramme = {
  slug: string;
  name: string;
  classes: string;
  description: string;
  notice?: string;
  entries: TextbookEntry[];
};

export type TextbookDocument = {
  id: "branzowa" | "technikum";
  audience: string;
  title: string;
  description: string;
  href: string;
  officialHref: string;
  fileSize: string;
  pages: number;
  programmes: TextbookProgramme[];
};

const bsNamedGeneral: TextbookEntry[] = [
  { group: "Przedmioty ogólne", subject: "Język polski", classes: "Klasy 1-3", title: "Język polski. Podręcznik dla branżowej szkoły I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Język angielski", classes: "Klasy 1-3", title: "Life Vision Elementary A1/A2", details: "C. Leonard, Oxford University Press.", note: "Tylko podręcznik - bez zeszytu ćwiczeń." },
  { group: "Przedmioty ogólne", subject: "Historia", classes: "Klasy 1-3", title: "Historia. Zmiana 2022. Podręcznik dla szkoły branżowej I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Edukacja obywatelska", classes: "Klasy 2-3", title: "Edukacja obywatelska 1. Podręcznik dla szkoły branżowej I stopnia", details: "J. Niszcz, S. Zając, SOP Oświatowiec Toruń." },
  { group: "Przedmioty ogólne", subject: "Biznes i zarządzanie", classes: "Klasa 1", title: "Krok w biznes i zarządzanie. Podręcznik do biznesu i zarządzania dla branżowej szkoły I stopnia", details: "Część 1 i część 2. Z. Makieła, T. Rachwał, Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Biologia", classes: "Klasy 1-3", title: "NOWA Biologia na czasie", details: "SMARTbook, zakres podstawowy: część 1 - klasa 1, część 2 - klasa 2. Podręcznik część 3 - klasa 3. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Chemia", classes: "Klasy 1-3", title: "Chemia. Podręcznik dla branżowej szkoły I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Matematyka", classes: "Klasy 1-3", title: "To się liczy! Podręcznik do matematyki dla branżowej szkoły I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Informatyka", classes: "Klasy nie wskazane w wykazie", title: "Nie podano podręcznika", note: "Nie kupuj podręcznika bez osobnej informacji nauczyciela." },
  { group: "Przedmioty ogólne", subject: "Edukacja dla bezpieczeństwa", classes: "Klasa 1", title: "Edukacja dla bezpieczeństwa. Zakres podstawowy", details: "B. Breitkopf, M. Cieśla, WSiP." },
  { group: "Przedmioty ogólne", subject: "Edukacja zdrowotna", classes: "Klasy nie wskazane w wykazie", title: "Edukacja zdrowotna 1. Podręcznik dla szkoły branżowej", details: "K. Myrcik, R. Szymańska, B. Jakubik, OPERON." },
  { group: "Przedmioty ogólne", subject: "Język angielski zawodowy", classes: "Klasy nie wskazane w wykazie", title: "Nie podano podręcznika", note: "Nie kupuj podręcznika bez osobnej informacji nauczyciela." },
];

const bsMultiOccupationGeneral: TextbookEntry[] = [
  { group: "Przedmioty ogólne", subject: "Język polski", classes: "Klasy 1-3", title: "Język polski. Podręcznik dla branżowej szkoły I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Język niemiecki", classes: "Klasy 1-3", title: "Genau! Plus - Język niemiecki dla szkół branżowych, techników i liceów", details: "Klett Polska.", note: "Podręcznik i zeszyt ćwiczeń." },
  { group: "Przedmioty ogólne", subject: "Historia", classes: "Klasy 1-3", title: "Historia. Zmiana 2022. Podręcznik dla szkoły branżowej I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Edukacja obywatelska", classes: "Klasy 2-3", title: "Edukacja obywatelska 1. Podręcznik dla szkoły branżowej I stopnia", details: "J. Niszcz, S. Zając, SOP Oświatowiec Toruń." },
  { group: "Przedmioty ogólne", subject: "Biznes i zarządzanie", classes: "Klasa 1", title: "Krok w biznes i zarządzanie. Podręcznik do biznesu i zarządzania dla branżowej szkoły I stopnia", details: "Część 1 i część 2. Z. Makieła, T. Rachwał, Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Geografia", classes: "Klasy 1-3", title: "Geografia. Podręcznik dla szkoły branżowej I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Fizyka", classes: "Klasy 1-3", title: "Fizyka. Podręcznik dla branżowej szkoły I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Wydawnictwo OPERON." },
  { group: "Przedmioty ogólne", subject: "Matematyka", classes: "Klasy 1-3", title: "To się liczy! Podręcznik do matematyki dla branżowej szkoły I stopnia", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Informatyka", classes: "Klasy nie wskazane w wykazie", title: "Nie podano podręcznika", note: "Nie kupuj podręcznika bez osobnej informacji nauczyciela." },
  { group: "Przedmioty ogólne", subject: "Edukacja dla bezpieczeństwa", classes: "Klasa 1", title: "Edukacja dla bezpieczeństwa. Zakres podstawowy", details: "B. Breitkopf, M. Cieśla, WSiP." },
  { group: "Przedmioty ogólne", subject: "Edukacja zdrowotna", classes: "Klasy nie wskazane w wykazie", title: "Edukacja zdrowotna 1. Podręcznik dla szkoły branżowej", details: "K. Myrcik, R. Szymańska, B. Jakubik, OPERON." },
  { group: "Przedmioty ogólne", subject: "Język angielski zawodowy", classes: "Klasy nie wskazane w wykazie", title: "Nie podano podręcznika", note: "Nie kupuj podręcznika bez osobnej informacji nauczyciela." },
];

const bsHairdresser: TextbookEntry[] = [
  { group: "Przedmioty zawodowe", subject: "Podstawy fryzjerstwa", classes: "Klasy wskazane w planie zajęć", title: "Podstawy fryzjerstwa", details: "B. Wach-Minkowska, D. Gortatewicz, WSiP/REA." },
  { group: "Przedmioty zawodowe", subject: "Techniki fryzjerskie", classes: "Klasy wskazane w planie zajęć", title: "Nowoczesne zabiegi fryzjerskie", details: "Z. Sumirska, PPHU SUZI." },
];

const bsCook: TextbookEntry[] = [
  { group: "Przedmioty zawodowe", subject: "Technika w produkcji gastronomicznej", classes: "Klasa 1", title: "Sporządzanie potraw i napojów. Część 1", details: "M. Zienkiewicz, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Technologia gastronomiczna z towaroznawstwem", classes: "Klasy 1-3", title: "Technologia gastronomiczna z towaroznawstwem. Przygotowywanie i wydawanie dań", details: "Część 1 - klasa 1, część 2 - klasy 2-3. M. Konarzewska, WSiP." },
];

const bsConfectioner: TextbookEntry[] = [
  { group: "Przedmioty zawodowe", subject: "Technologie produkcji cukierniczej", classes: "Klasy 1-3", title: "Technologia produkcji cukierniczej. Tom 1 i 2", details: "M. Kaźmierczak, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Technika w produkcji cukierniczej", classes: "Klasy 1-3", title: "Technika w produkcji cukierniczej. Tom 1", details: "K. Kocierz, WSiP." },
];

const bsSeller: TextbookEntry[] = [
  { group: "Przedmioty zawodowe", subject: "Organizacja sprzedaży", classes: "Klasy 1-3", title: "Organizacja i techniki sprzedaży. Prowadzenie sprzedaży; Organizowanie sprzedaży. Organizacja i techniki sprzedaży", details: "eMPi2 oraz WSiP.", note: "Podręczniki będą zamawiane przez nauczyciela na początku roku szkolnego." },
  { group: "Przedmioty zawodowe", subject: "Obsługa klientów", classes: "Klasy 1-3", title: "Obsługa klientów; Obsługa klienta, część 1 i 2", details: "eMPi2 oraz WSiP.", note: "Podręczniki będą zamawiane przez nauczyciela na początku roku szkolnego." },
  { group: "Przedmioty zawodowe", subject: "Towar jako przedmiot handlu", classes: "Klasy 1-3", title: "Towaroznawstwo; Organizowanie sprzedaży - towar jako przedmiot handlu", details: "REA oraz WSiP.", note: "Podręczniki będą zamawiane przez nauczyciela na początku roku szkolnego." },
];

const technicalCommon: TextbookEntry[] = [
  { group: "Przedmioty ogólne", subject: "Język polski", classes: "Klasy 1-3", title: "Sztuka wyrazu. Podręcznik do języka polskiego dla liceum i technikum", details: "Część 1 i część 2. Gdańskie Wydawnictwo Oświatowe." },
  { group: "Przedmioty ogólne", subject: "Język polski", classes: "Klasy 4-5", title: "Oblicza epok", details: "D. Champerek, A. Kalbarczyk, D. Trześniowski, WSiP." },
  { group: "Przedmioty ogólne", subject: "Język angielski", classes: "Klasy 1-3", title: "Life Vision Preintermediate", details: "J. Hudson, W. Sałandyk, Oxford University Press.", note: "Tylko podręcznik - bez zeszytu ćwiczeń." },
  { group: "Przedmioty ogólne", subject: "Język angielski", classes: "Klasa 4", title: "Checkpoint B1+", details: "D. Spencer, M. Cichmińska, Macmillan Education.", note: "Tylko podręcznik - bez zeszytu ćwiczeń." },
  { group: "Przedmioty ogólne", subject: "Język angielski", classes: "Klasy 4-5", title: "Repetytorium dla szkół ponadpodstawowych. Poziom podstawowy i rozszerzony", details: "C. Dobb, K. Lackman, J. Dooley, Express Publishing." },
  { group: "Przedmioty ogólne", subject: "Język niemiecki", classes: "Klasy 1-5", title: "Genau! Plus - Język niemiecki dla szkół branżowych, techników i liceów", details: "Klett Polska." },
  { group: "Przedmioty ogólne", subject: "Historia", classes: "Klasy 1-4", title: "Historia. Zakres podstawowy", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3, część 4 - klasa 4. WSiP." },
  { group: "Przedmioty ogólne", subject: "Edukacja obywatelska", classes: "Klasy 2-4", title: "Masz wpływ. Podręcznik do edukacji obywatelskiej dla liceum ogólnokształcącego i technikum", details: "Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Biznes i zarządzanie", classes: "Klasa 1", title: "Biznes i zarządzanie", details: "J. Musiałkiewicz, G. Kwiatkowski, Wydawnictwo Ekonomik." },
  { group: "Przedmioty ogólne", subject: "Biznes i zarządzanie", classes: "Klasa 2", title: "Krok w biznes i zarządzanie - kontynuacja", details: "Z. Makieła, T. Rachwał, Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Chemia", classes: "Klasy 1-4", title: "NOWA To jest chemia", details: "Podręcznik: część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3. Karty pracy: część 1 - klasa 1, część 2 - klasa 2. W klasie 4: To jest chemia 2. Chemia organiczna. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Fizyka", classes: "Klasy nie wskazane w wykazie", title: "NOWE Odkryć fizykę. Nowa edycja. Zakres podstawowy", details: "M. Braun, W. Śliwa, Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Matematyka", classes: "Klasy 1-5", title: "NOWA MATeMAtyka. Nowa edycja. Zakres podstawowy", details: "Część 1 - klasy 1-2, część 2 - klasy 2-3, część 3 - klasy 3-4, część 4 - klasy 4-5. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Informatyka", classes: "Klasy 1-2", title: "Informatyka 1-3. Podręcznik dla szkół ponadpodstawowych. Zakres podstawowy", details: "G. Koba, K. Koba-Gołaszewska, Migra.", note: "Uczniowie nie muszą kupować podręcznika." },
  { group: "Przedmioty ogólne", subject: "Edukacja dla bezpieczeństwa", classes: "Klasa 1", title: "Edukacja dla bezpieczeństwa. Zakres podstawowy", details: "B. Breitkopf, M. Cieśla, WSiP." },
  { group: "Przedmioty ogólne", subject: "Edukacja zdrowotna", classes: "Klasy 2-3", title: "Edukacja zdrowotna 1. Zakres podstawowy. Podręcznik dla szkoły ponadpodstawowej", details: "K. Myrcik, R. Szymańska, B. Jakubik, OPERON." },
  { group: "Przedmioty ogólne", subject: "Język angielski zawodowy", classes: "Klasy nie wskazane w wykazie", title: "Bez podręcznika", note: "Nie kupuj podręcznika bez osobnej informacji nauczyciela." },
];

const technicalHairdresser: TextbookEntry[] = [
  { group: "Przedmioty ogólne", subject: "Geografia - zakres podstawowy", classes: "Klasy 1-3", title: "NOWE Oblicza geografii", details: "SMARTbook - klasa 1; podręcznik, część 2 - klasa 2 i część 3 - klasa 3. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Biologia - zakres rozszerzony", classes: "Klasy 1-5", title: "NOWA Biologia na czasie. Nowa edycja. Zakres rozszerzony", details: "Część 1 - klasy 1-2, część 2 - klasy 2-3, część 3 - klasa 4, część 4 - klasa 5. Szczegółowy podział działów znajduje się w PDF-ie." },
  { group: "Przedmioty zawodowe", subject: "Podstawy fryzjerstwa", classes: "Klasy 1-3", title: "Podstawy fryzjerstwa", details: "B. Wach-Minkowska, D. Gortatewicz, WSiP/REA." },
  { group: "Przedmioty zawodowe", subject: "Techniki fryzjerskie", classes: "Klasy 1-3", title: "Nowoczesne zabiegi fryzjerskie", details: "Z. Sumirska, PPHU SUZI." },
  { group: "Przedmioty zawodowe", subject: "Projektowanie fryzur", classes: "Klasy 1-3", title: "Projektowanie fryzur", details: "T. Kuligowska-Jakubik, B. Wach-Minkowska, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Projektowanie fryzur", classes: "Klasy 1-3", title: "Pracownia stylizacji fryzur. Kwalifikacja A.23", details: "A. Dytmar, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Projektowanie fryzur", classes: "Klasy 1-3", title: "Stylizacja fryzur", details: "B. Wach-Minkowska, E. Mierna, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Projektowanie fryzur", classes: "Klasy 1-3", title: "Szablony fryzjerskie. Zeszyt ćwiczeń, część 1 i 2", details: "T. Kuligowska-Jakubik, A. Jakubik, M. Richter, WSiP." },
];

const technicalCommerce: TextbookEntry[] = [
  { group: "Przedmioty ogólne", subject: "Geografia - zakres rozszerzony", classes: "Klasy 1-4", title: "NOWE Oblicza geografii. Nowa edycja. Zakres rozszerzony", details: "Część 1 - klasa 1, część 2 - klasa 2, część 3 - klasa 3, część 4 - klasa 4. Nowa Era." },
  { group: "Przedmioty ogólne", subject: "Biologia - zakres podstawowy", classes: "Klasy 1-4", title: "NOWA Biologia na czasie", details: "SMARTbook: część 1 - klasa 1, część 2 - klasy 2-3. Podręcznik część 3 - klasa 4. Nowa Era." },
  { group: "Przedmioty zawodowe", subject: "Obsługa klientów", classes: "Klasy 1-3", title: "Obsługa klientów", details: "I. Wielgosik, eMPi2.", note: "Dla klas pierwszych podręczniki zawodowe zamawia nauczyciel na początku roku szkolnego." },
  { group: "Przedmioty zawodowe", subject: "Organizacja sprzedaży", classes: "Klasy 1-3", title: "Organizacja i techniki sprzedaży. Prowadzenie sprzedaży, część II", details: "E. Strzyżewska, I. Wielgosik, eMPi2." },
  { group: "Przedmioty zawodowe", subject: "Organizacja sprzedaży", classes: "Klasy 1-3", title: "Organizowanie sprzedaży. Organizacja i techniki sprzedaży", details: "D. Andrzejczak, A. Mikinia, B. Rzeźnik, M. Wajgner, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Towar jako przedmiot handlu", classes: "Klasy 1-2", title: "Towar jako przedmiot handlu", details: "M. Wajgner, D. Andrzejczak, A. Mikina, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Marketing w działalności handlowej", classes: "Klasy 4-5", title: "Marketing", details: "M. Pietraszewski, K. Strzelecka, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Przedsiębiorca w handlu", classes: "Klasy 4-5", title: "Brak podręcznika", note: "Nie kupuj podręcznika bez osobnej informacji nauczyciela." },
  { group: "Przedmioty zawodowe", subject: "Pracownia sprzedaży", classes: "Klasy 1-3", title: "Sprzedaż towarów. Zajęcia w pracowni, część I i II", details: "J. Jóźwiak, M. Knap, WSiP." },
  { group: "Przedmioty zawodowe", subject: "Pracownia sprzedaży", classes: "Klasy 1-3", title: "Pracownia sprzedaży. Ćwiczenia", details: "M. Pańczyk, eMPi2." },
];

export const textbookDocuments: TextbookDocument[] = [
  {
    id: "branzowa",
    audience: "Branżowa Szkoła I stopnia nr 5",
    title: "Wybierz zawód w szkole branżowej",
    description: "Kliknij swój zawód, aby zobaczyć przypisane podręczniki ogólne i zawodowe. Przy każdej pozycji podano klasy lub części wskazane w szkolnym wykazie.",
    href: "/documents/podreczniki-2026-2027/podreczniki-branzowa-szkola-2026-2027.pdf",
    officialHref: "https://cloud-1.edupage.org/cloud/zestaw_podrecznikow_dla_BS1st__2026-2027_.pdf?z%3AyF940LdTQBDYsOzuJOC7W8OlEprZv%2BDshCT7z61cA8DbneHHFEKLstA%2BbVL%2FGK212iTYEu93aZw11gESsybGZA%3D%3D",
    fileSize: "485 KB",
    pages: 4,
    programmes: [
      { slug: "cukiernik", name: "Cukiernik", classes: "klasy 1-3", description: "Przedmioty ogólne oraz podręczniki do technologii i techniki produkcji cukierniczej.", entries: [...bsNamedGeneral, ...bsConfectioner] },
      { slug: "fryzjer", name: "Fryzjer", classes: "klasy 1-3", description: "Przedmioty ogólne oraz podręczniki do podstaw fryzjerstwa i technik fryzjerskich.", entries: [...bsNamedGeneral, ...bsHairdresser] },
      { slug: "kucharz", name: "Kucharz", classes: "klasy 1-3", description: "Przedmioty ogólne oraz podręczniki do produkcji i technologii gastronomicznej.", entries: [...bsNamedGeneral, ...bsCook] },
      { slug: "sprzedawca", name: "Sprzedawca", classes: "klasy 1-3", description: "Przedmioty ogólne oraz podręczniki do organizacji sprzedaży, obsługi klientów i towaroznawstwa.", notice: "Podręczniki do przedmiotów zawodowych będą zamawiane przez nauczyciela na początku roku szkolnego.", entries: [...bsNamedGeneral, ...bsSeller] },
      { slug: "wielozawodowe", name: "Klasy wielozawodowe WA i WB", classes: "klasy 1-3", description: "Przedmioty ogólne wskazane osobno dla klas wielozawodowych. Szkolny wykaz nie wymienia osobnych podręczników zawodowych dla WA i WB.", entries: bsMultiOccupationGeneral },
    ],
  },
  {
    id: "technikum",
    audience: "Technikum nr 5",
    title: "Wybierz kierunek w technikum",
    description: "Kliknij swój kierunek, aby zobaczyć przedmioty wspólne oraz właściwe podręczniki zawodowe i zakresy rozszerzone.",
    href: "/documents/podreczniki-2026-2027/podreczniki-technikum-2026-2027.pdf",
    officialHref: "https://cloud-b.edupage.org/cloud/zestaw_podrecznikow_dla_technikum__2026-2027_.pdf?z%3Ax%2BfXOKvblJobT3pHnbiumJO7Pb4rltAyfOvy5Tq4j1ptYDwL31snEj%2BBIELqQ51%2BiRlYcbekAWDF16lxKBoQiQ%3D%3D",
    fileSize: "495 KB",
    pages: 5,
    programmes: [
      { slug: "technik-uslug-fryzjerskich", name: "Technik usług fryzjerskich", classes: "klasy 1-5", description: "Geografia w zakresie podstawowym, biologia w zakresie rozszerzonym oraz podręczniki zawodowe z fryzjerstwa i projektowania fryzur.", entries: [...technicalCommon, ...technicalHairdresser] },
      { slug: "technik-handlowiec", name: "Technik handlowiec", classes: "klasy 1-5", description: "Geografia w zakresie rozszerzonym, biologia w zakresie podstawowym oraz podręczniki zawodowe z handlu i sprzedaży.", notice: "W klasach pierwszych podręczniki do przedmiotów zawodowych będą zamawiane przez nauczyciela na początku roku szkolnego.", entries: [...technicalCommon, ...technicalCommerce] },
    ],
  },
];

export const textbookSearchText = textbookDocuments.flatMap((document) => [
  document.audience,
  document.title,
  document.description,
  ...document.programmes.flatMap((programme) => [
    programme.name,
    programme.classes,
    programme.description,
    programme.notice ?? "",
    ...programme.entries.flatMap((entry) => [entry.subject, entry.classes, entry.title, entry.details ?? "", entry.note ?? ""]),
  ]),
]).join(" ");
