export type YouthWorkerPoster = {
  title: string;
  description: string;
  image: string;
  alt: string;
  topicHref: string;
  topicLabel: string;
  note?: string;
};

export type YouthWorkerPosterGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  posters: YouthWorkerPoster[];
};

const imageBase = "/assets/prawa-pracownika-mlodocianego";

export const youthWorkerPosterGroups: YouthWorkerPosterGroup[] = [
  {
    id: "status-i-start",
    eyebrow: "Na początku zatrudnienia",
    title: "Status pracownika młodocianego",
    description: "Trzy plakaty wyjaśniają, dlaczego nauka zawodu u pracodawcy jest zatrudnieniem i co należy sprawdzić przed rozpoczęciem pracy.",
    posters: [
      {
        title: "To nie są zwykłe praktyki",
        description: "Uczeń szkoły branżowej wykonuje pracę na podstawie umowy o pracę w celu przygotowania zawodowego.",
        image: `${imageBase}/umowa-o-prace.jpg`,
        alt: "Plakat ZSZ5: To nie są zwykłe praktyki. Umowa o pracę jest podstawą przygotowania zawodowego.",
        topicHref: "/temat/umowa-o-prace/",
        topicLabel: "Przeczytaj o umowie o pracę",
      },
      {
        title: "Szkoła i praca - model dualny",
        description: "Nauka odbywa się równolegle w szkole i u pracodawcy. Oba miejsca mają inne zadania i zasady.",
        image: `${imageBase}/model-dualny.jpg`,
        alt: "Plakat ZSZ5: Szkoła i praca tworzą model dualny kształcenia zawodowego.",
        topicHref: "/temat/mlodociany-pracownik/",
        topicLabel: "Wyjaśnienie statusu pracownika młodocianego",
      },
      {
        title: "Zanim zaczniesz - sprawdź",
        description: "Krótka lista kontrolna: umowa, instruktor, zasady BHP, czas pracy, przerwa, wynagrodzenie i sposób zgłaszania problemów.",
        image: `${imageBase}/zanim-zaczniesz.jpg`,
        alt: "Plakat ZSZ5 z listą spraw do sprawdzenia przed rozpoczęciem pracy przez pracownika młodocianego.",
        topicHref: "/temat/pierwszy-tydzien/",
        topicLabel: "Sprawdź listę na pierwszy tydzień",
      },
    ],
  },
  {
    id: "bezpieczenstwo-i-nauka",
    eyebrow: "Bezpieczeństwo i przygotowanie zawodowe",
    title: "Praca ma być bezpieczna i służyć nauce zawodu",
    description: "Pracodawca odpowiada za bezpieczne warunki, instruktaż, nadzór oraz zadania związane z przygotowaniem zawodowym.",
    posters: [
      {
        title: "Masz prawo zapytać, czy zadanie jest bezpieczne",
        description: "Nie należy wykonywać polecenia, które stwarza bezpośrednie zagrożenie dla zdrowia lub życia. Wątpliwości trzeba od razu zgłosić.",
        image: `${imageBase}/bezpieczne-polecenie.jpg`,
        alt: "Plakat ZSZ5 przypominający o prawie pracownika młodocianego do bezpiecznej pracy.",
        topicHref: "/temat/bhp-i-wypadek/",
        topicLabel: "Sprawdź zasady BHP i postępowanie po wypadku",
      },
      {
        title: "Nie zaczynaj bez instruktażu",
        description: "Przed rozpoczęciem pracy uczeń powinien poznać zasady BHP, otrzymać wymagane środki ochrony i wiedzieć, kto sprawuje nadzór.",
        image: `${imageBase}/instruktaz-bhp.jpg`,
        alt: "Plakat ZSZ5: Nie zaczynaj bez instruktażu. Bezpieczna praca wymaga zasad BHP i środków ochrony.",
        topicHref: "/temat/bhp-i-wypadek/",
        topicLabel: "Przeczytaj o obowiązkach pracodawcy",
      },
      {
        title: "To ma być nauka, nie przypadkowe zadania",
        description: "Zadania powinny wynikać z programu przygotowania zawodowego i być wykonywane pod opieką osoby prowadzącej naukę zawodu.",
        image: `${imageBase}/nauka-zawodu.jpg`,
        alt: "Plakat ZSZ5 przypominający, że praca młodocianego ma służyć nauce zawodu.",
        topicHref: "/temat/mlodociany-pracownik/",
        topicLabel: "Przeczytaj, na czym polega przygotowanie zawodowe",
      },
    ],
  },
  {
    id: "czas-i-wynagrodzenie",
    eyebrow: "Warunki zatrudnienia",
    title: "Czas pracy, odpoczynek i wynagrodzenie",
    description: "Pracownika młodocianego chronią szczególne normy czasu pracy. Za pracę przysługuje mu wynagrodzenie.",
    posters: [
      {
        title: "Młodociany nie pracuje w nadgodzinach ani w nocy",
        description: "Pracodawca nie może zatrudniać pracownika młodocianego w godzinach nadliczbowych ani w porze nocnej.",
        image: `${imageBase}/bez-nadgodzin.jpg`,
        alt: "Plakat ZSZ5: Pracownik młodociany nie pracuje w nadgodzinach ani w porze nocnej.",
        topicHref: "/temat/czas-pracy/",
        topicLabel: "Sprawdź normy czasu pracy",
      },
      {
        title: "Odpoczynek jest częścią bezpiecznej pracy",
        description: "Gdy dobowy czas pracy jest dłuższy niż 4,5 godziny, pracownik młodociany ma prawo do 30-minutowej przerwy wliczanej do czasu pracy.",
        image: `${imageBase}/przerwa.jpg`,
        alt: "Plakat ZSZ5 przypominający o prawie pracownika młodocianego do przerwy i odpoczynku.",
        topicHref: "/temat/czas-pracy/",
        topicLabel: "Przeczytaj o czasie pracy i przerwach",
      },
      {
        title: "To nie jest darmowa praca",
        description: "Umowa o pracę oznacza prawo do wynagrodzenia. Pracownik powinien otrzymać informację o terminie i sposobie wypłaty.",
        image: `${imageBase}/wynagrodzenie.jpg`,
        alt: "Plakat ZSZ5 przypominający o prawie pracownika młodocianego do wynagrodzenia.",
        topicHref: "/temat/wynagrodzenie/",
        topicLabel: "Sprawdź zasady wynagrodzenia",
        note: "Kwota pokazana na grafice jest przykładowa. Minimalne wynagrodzenie pracownika młodocianego zależy od roku nauki i zmieniającej się podstawy obliczeń.",
      },
    ],
  },
  {
    id: "pomoc",
    eyebrow: "Gdy pojawia się problem",
    title: "Nie zostawaj z problemem samodzielnie",
    description: "Niepokojące zdarzenie, brak wypłaty, wypadek lub niebezpieczne polecenie należy zgłosić osobie dorosłej, która może podjąć działanie.",
    posters: [
      {
        title: "Powiedz o tym dorosłemu, któremu ufasz",
        description: "Możesz zgłosić sprawę kierownikowi szkolenia praktycznego, wychowawcy, pedagogowi lub psychologowi szkolnemu.",
        image: `${imageBase}/zglos-problem.jpg`,
        alt: "Plakat ZSZ5 wskazujący osoby, którym uczeń może zgłosić problem związany z pracą.",
        topicHref: "/pomoc/",
        topicLabel: "Sprawdź, jak uzyskać pomoc",
      },
    ],
  },
];

export const youthWorkerPosterSearchText = youthWorkerPosterGroups
  .flatMap((group) => [
    group.eyebrow,
    group.title,
    group.description,
    ...group.posters.flatMap((poster) => [poster.title, poster.description, poster.note ?? ""]),
  ])
  .join(" ");
