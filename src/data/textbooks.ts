export type TextbookProgramme = {
  name: string;
  classes: string;
  description: string;
  notice?: string;
};

export type TextbookDocument = {
  id: "branzowa" | "technikum";
  audience: string;
  title: string;
  description: string;
  href: string;
  fileSize: string;
  pages: number;
  programmes: TextbookProgramme[];
};

export const textbookDocuments: TextbookDocument[] = [
  {
    id: "branzowa",
    audience: "Branżowa Szkoła I stopnia nr 5",
    title: "Wykaz dla szkoły branżowej",
    description: "Podręczniki do przedmiotów ogólnych i zawodowych dla klas 1-3. Wykaz rozróżnia zawody oraz klasy wielozawodowe WA i WB.",
    href: "https://cloud-1.edupage.org/cloud/zestaw_podrecznikow_dla_BS1st__2026-2027_.pdf?z%3AyF940LdTQBDYsOzuJOC7W8OlEprZv%2BDshCT7z61cA8DbneHHFEKLstA%2BbVL%2FGK212iTYEu93aZw11gESsybGZA%3D%3D",
    fileSize: "485 KB",
    pages: 4,
    programmes: [
      {
        name: "Cukiernik",
        classes: "klasy 1-3",
        description: "Przedmioty ogólne oraz podręczniki do technologii i techniki produkcji cukierniczej.",
      },
      {
        name: "Fryzjer",
        classes: "klasy 1-3",
        description: "Przedmioty ogólne oraz podręczniki do podstaw fryzjerstwa i technik fryzjerskich.",
      },
      {
        name: "Kucharz",
        classes: "klasy 1-3",
        description: "Przedmioty ogólne oraz podręczniki do produkcji gastronomicznej i technologii gastronomicznej z towaroznawstwem.",
      },
      {
        name: "Sprzedawca",
        classes: "klasy 1-3",
        description: "Przedmioty ogólne oraz podręczniki do organizacji sprzedaży, obsługi klientów i towaroznawstwa.",
        notice: "Podręczniki do przedmiotów zawodowych będą zamawiane przez nauczyciela na początku roku szkolnego.",
      },
      {
        name: "Klasy wielozawodowe WA i WB",
        classes: "klasy 1-3",
        description: "W wykazie osobno oznaczono między innymi język niemiecki, geografię i fizykę dla klas wielozawodowych.",
      },
    ],
  },
  {
    id: "technikum",
    audience: "Technikum nr 5",
    title: "Wykaz dla technikum",
    description: "Podręczniki do przedmiotów ogólnych i zawodowych dla klas 1-5. Zakres części przedmiotów zależy od kierunku kształcenia.",
    href: "https://cloud-b.edupage.org/cloud/zestaw_podrecznikow_dla_technikum__2026-2027_.pdf?z%3Ax%2BfXOKvblJobT3pHnbiumJO7Pb4rltAyfOvy5Tq4j1ptYDwL31snEj%2BBIELqQ51%2BiRlYcbekAWDF16lxKBoQiQ%3D%3D",
    fileSize: "495 KB",
    pages: 5,
    programmes: [
      {
        name: "Technik usług fryzjerskich",
        classes: "klasy 1-5",
        description: "Biologia jest realizowana w zakresie rozszerzonym, a geografia w zakresie podstawowym. Wykaz obejmuje także podręczniki zawodowe z fryzjerstwa i projektowania fryzur.",
      },
      {
        name: "Technik handlowiec",
        classes: "klasy 1-5",
        description: "Geografia jest realizowana w zakresie rozszerzonym, a biologia w zakresie podstawowym. Wykaz obejmuje także podręczniki zawodowe z handlu i sprzedaży.",
        notice: "W klasach pierwszych podręczniki do przedmiotów zawodowych będą zamawiane przez nauczyciela na początku roku szkolnego.",
      },
    ],
  },
];

export const textbookSearchText = textbookDocuments.flatMap((document) => [
  document.audience,
  document.title,
  document.description,
  ...document.programmes.flatMap((programme) => [programme.name, programme.classes, programme.description, programme.notice ?? ""]),
]).join(" ");
