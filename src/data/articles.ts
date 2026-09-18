export type ArticleLink = {
  label: string;
  description: string;
  href: string;
};

export type Article = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  summary: string;
  publishedAt: string;
  readingMinutes: number;
  tone: "green" | "blue" | "yellow";
  furtherReading: ArticleLink[];
};

export const articles: Article[] = [
  {
    slug: "warsztaty-rozwoju-emocjonalno-spolecznego",
    title: "Kiedy start w nowej szkole jest trudny",
    eyebrow: "Wsparcie poza szkołą · dla rodziców i opiekunów",
    lead: "Pierwsze tygodnie w nowej klasie dla części uczniów są ekscytujące, a dla części po prostu ciężkie. Pokazujemy jedną konkretną, bezpłatną możliwość wsparcia poza szkołą - warsztaty rozwoju emocjonalno-społecznego prowadzone przez Centrum Neuropsychiatrii NEUROMED.",
    summary: "Bezpłatne warsztaty dla uczniów rozpoczynających naukę w szkole ponadpodstawowej: dla kogo są, czym różnią się od psychoterapii, jak wygląda konsultacja kwalifikacyjna i jak się zapisać.",
    publishedAt: "2026-09-18",
    readingMinutes: 5,
    tone: "green",
    furtherReading: [
      {
        label: "Formularz zapisu na konsultację (NEUROMED)",
        description: "Ten sam formularz obsługuje kilka projektów, dlatego w zgłoszeniu trzeba zaznaczyć: warsztaty M. Kubów.",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeoJAimnpRQGpdYiwkkauR_o-LM0gj9x-dMcguXGtdD7wHyLw/viewform",
      },
      {
        label: "NEUROMED: programy finansowane przez miasto Wrocław",
        description: "Lista bezpłatnych programów prowadzonych przez Centrum Neuropsychiatrii, w tym ten, w ramach którego odbywają się warsztaty.",
        href: "https://neuropsychiatria.com/programy-finansowane-przez-miasto-wroclaw/",
      },
      {
        label: "NEUROMED: program wsparcia psychologicznego dla dzieci, młodzieży oraz ich opiekunów",
        description: "Opis programu organizatora: zakres wsparcia, warunki uczestnictwa i dane kontaktowe.",
        href: "https://neuropsychiatria.com/program-wsparcia-psychologicznego-dla-dzieci-mlodziezy-oraz-ich-opiekunow/",
      },
      {
        label: "wroclaw.pl: pomoc psychologiczna dla dzieci i młodzieży - bez skierowania i za darmo",
        description: "Miejski przegląd bezpłatnych form pomocy, jeżeli te warsztaty okażą się nietrafione albo zabraknie miejsc.",
        href: "https://www.wroclaw.pl/dla-mieszkanca/pomoc-psychologiczna-dla-dzieci-i-mlodziezy-bez-skierowania-i-za-darmo",
      },
      {
        label: "Telefon zaufania dla dzieci i młodzieży 116 111",
        description: "Bezpłatna, całodobowa linia dla nastolatków; dla dorosłych działa równolegle numer 800 100 100.",
        href: "https://116111.pl/",
      },
      {
        label: "Centrum Wsparcia dla osób w kryzysie psychicznym 800 70 2222",
        description: "Całodobowa i bezpłatna pomoc dla osób w kryzysie oraz dla ich bliskich.",
        href: "https://centrumwsparcia.pl/",
      },
    ],
  },
  {
    slug: "higiena-cyfrowa",
    title: "Miało być pięć minut",
    eyebrow: "Higiena cyfrowa · dla rodziców i opiekunów",
    lead: "Rozmowa o telefonach w szkole zwykle zaczyna się od zakazu. My chcielibyśmy zacząć od czegoś innego: od tego, że odłożenie telefonu bywa trudne również dla dorosłych.",
    summary: "Dlaczego ograniczamy korzystanie z telefonów na lekcjach, czego badania nie potwierdzają, jak telefon wpływa na uwagę i sen oraz od czego można zacząć w domu, nawet mając niewiele czasu.",
    publishedAt: "2026-09-17",
    readingMinutes: 6,
    tone: "blue",
    furtherReading: [
      {
        label: "OSE/NASK: Szkoła bez telefonów. Jak rozmawiać o nowych zasadach i cyfrowej higienie?",
        description: "Polski punkt wyjścia: język rozmowy z uczniem i rodzicem, praktyczne wskazówki dla szkół.",
        href: "https://ose.gov.pl/aktualnosci/wpis/szkola-bez-telefonow-jak-rozmawiac-o-nowych-zasadach-i-cyfrowej-higienie",
      },
      {
        label: "NASK: Nastolatki 3.0 - raport z ogólnopolskiego badania uczniów i rodziców (2024)",
        description: "Ile czasu polskie nastolatki spędzają w sieci i jak bardzo różni się to od szacunków ich rodziców.",
        href: "https://www.nask.pl/media/2024/10/Thinkstat_RAPORT_nastolatki-3_0_ONLINE-2.pdf",
      },
      {
        label: "OECD: PISA 2025 - nota krajowa dla Polski",
        description: "Dane o rozpraszaniu uczniów przez urządzenia cyfrowe na lekcjach i o zasadach dotyczących telefonów w szkołach.",
        href: "https://www.oecd.org/en/publications/pisa-2025-results-volume-i-country-notes_2d4ff9ea-en/poland_4d28917e-en.html",
      },
      {
        label: "WHO Europe: Teens, screens and mental health (2024)",
        description: "Raport WHO i badania HBSC o problematycznym korzystaniu z mediów społecznościowych wśród nastolatków.",
        href: "https://www.who.int/europe/news/item/25-09-2024-teens--screens-and-mental-health",
      },
      {
        label: "UNESCO GEM: Phone bans in schools are spreading worldwide",
        description: "Jak wiele krajów ogranicza telefony w szkołach i jakie argumenty padają w tej dyskusji.",
        href: "https://www.unesco.org/gem-report/en/articles/phone-bans-schools-are-spreading-worldwide-policy-debate-rages",
      },
      {
        label: "MEN: przewodniki o ustawie regulującej korzystanie z telefonów w szkołach",
        description: "Oficjalne wyjaśnienie nowych przepisów, w tym osobny przewodnik dla szkół ponadpodstawowych.",
        href: "https://www.gov.pl/web/edukacja/przewodniki-o-ustawie-regulujacej-korzystanie-z-telefonow-w-szkolach-i-przedszkolach",
      },
      {
        label: "Fundacja Dajemy Dzieciom Siłę: Domowe zasady ekranowe",
        description: "Gotowe materiały do ustalenia zasad w domu, w tym zasada „bez ekranów przed snem i w nocy”.",
        href: "https://domowezasadyekranowe.fdds.pl/zasady/przed-snem-i-w-nocy-bez-ekranow/",
      },
      {
        label: "Fundacja Dbam o Mój Z@sięg: materiały pomocnicze",
        description: "Scenariusze rozmów i materiały o higienie cyfrowej dla rodziców, uczniów i nauczycieli.",
        href: "https://dbamomojzasieg.pl/materialy-pomocnicze/",
      },
    ],
  },
];

export function articleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
