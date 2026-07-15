export type Audience = "branżowa" | "technikum" | "rodzic" | "wszyscy";
export type TopicTone = "green" | "blue" | "yellow" | "red" | "neutral";

export type Topic = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  audiences: Audience[];
  tone: TopicTone;
  important?: string;
  facts: string[];
  actions: string[];
  sourceIds: string[];
  statuteReference?: string;
};

export const topics: Topic[] = [
  {
    slug: "pierwszy-tydzien",
    title: "Pierwszy tydzień w ZSZ5",
    eyebrow: "Szybki start",
    summary: "Pięć spraw, które warto uporządkować od razu po rozpoczęciu nauki.",
    audiences: ["wszyscy", "rodzic"],
    tone: "neutral",
    facts: [
      "Dziennik elektroniczny służy do sprawdzania wiadomości, ocen i frekwencji.",
      "Wychowawca jest pierwszym kontaktem w większości bieżących spraw klasy.",
      "Uczeń BS I ma równocześnie obowiązki szkolne i pracownicze.",
      "Uczeń technikum realizuje przedmioty ogólne, zawodowe i praktyki zawodowe.",
    ],
    actions: [
      "Aktywuj konto ucznia i rodzica w VULCAN-ie.",
      "Zapisz kontakt do wychowawcy oraz sekretariatu.",
      "Sprawdź plan lekcji i harmonogram praktycznej nauki zawodu.",
      "Uczeń BS I: zachowaj kopię umowy o pracę i dokumentów z badań oraz BHP.",
      "Przeczytaj skrót praw, obowiązków i zasad usprawiedliwiania nieobecności.",
    ],
    sourceIds: ["statut-zsz5", "zsz5-contact"],
  },
  {
    slug: "vulcan",
    title: "Pierwsze logowanie do VULCAN-a",
    eyebrow: "Dziennik elektroniczny",
    summary: "Uczeń i rodzic powinni mieć osobne, aktywne konta oparte na adresach e-mail zapisanych w systemie szkoły.",
    audiences: ["wszyscy", "rodzic"],
    tone: "neutral",
    important: "Nie udostępniaj hasła i nie korzystaj wspólnie z jednego konta. Konto ucznia i konto rodzica mają inne role.",
    facts: [
      "Pierwsze logowanie wymaga, aby właściwy adres e-mail był wcześniej zapisany w systemie przez szkołę.",
      "Użytkownik przechodzi procedurę aktywacji konta i sam ustala hasło.",
      "Dziennik służy do sprawdzania wiadomości, ocen i frekwencji oraz do komunikacji ze szkołą.",
      "Problemy z błędnym adresem e-mail lub brakiem dostępu zgłasza się wychowawcy albo szkolnemu administratorowi dziennika.",
    ],
    actions: [
      "Otwórz stronę logowania VULCAN dla Wrocławia.",
      "Wybierz aktywację konta lub odzyskanie dostępu i użyj adresu e-mail zgłoszonego szkole.",
      "Sprawdź, czy na koncie widzisz właściwego ucznia i szkołę.",
      "Ustaw bezpieczne hasło i zapisz oficjalny adres logowania w zakładkach.",
    ],
    sourceIds: ["vulcan-login", "vulcan-first-login", "zsz5-main"],
  },
  {
    slug: "mlodociany-pracownik",
    title: "Co znaczy: młodociany pracownik",
    eyebrow: "BS I",
    summary: "Uczeń branżowej szkoły I stopnia może być jednocześnie uczniem i pracownikiem zatrudnionym w celu nauki zawodu.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    important: "Szkoła i pracodawca wspólnie odpowiadają za proces kształcenia, ale obowiązki szkolne i pracownicze wynikają z różnych dokumentów.",
    facts: [
      "Młodociany to co do zasady osoba, która ukończyła 15 lat i nie przekroczyła 18 lat.",
      "Osoba bez kwalifikacji zawodowych może być zatrudniona przede wszystkim w celu przygotowania zawodowego.",
      "Nauka zawodu obejmuje praktykę u pracodawcy oraz dokształcanie teoretyczne.",
      "Pracodawca ma zapewnić opiekę i pomoc potrzebną do bezpiecznego wdrożenia do pracy.",
    ],
    actions: [
      "Poznaj instruktora praktycznej nauki zawodu.",
      "Sprawdź, w które dni jesteś w szkole, a w które u pracodawcy.",
      "Zgłaszaj problemy równolegle wychowawcy lub kierownikowi szkolenia praktycznego i pracodawcy.",
    ],
    sourceIds: ["kodeks-pracy", "pip-mlodociani", "men-mlodociani", "statut-zsz5"],
  },
  {
    slug: "umowa-o-prace",
    title: "Umowa o pracę w celu przygotowania zawodowego",
    eyebrow: "BS I",
    summary: "Umowa daje prawa pracownicze, ale nakłada też obowiązek pracy, nauki i przygotowania do egzaminu.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    important: "Umowę podpisują pracodawca i młodociany. Powinna być sporządzona na piśmie.",
    facts: [
      "Umowa określa rodzaj przygotowania zawodowego, czas i miejsce, sposób dokształcania oraz wynagrodzenie.",
      "Co do zasady stosuje się do niej przepisy dotyczące umowy na czas nieokreślony.",
      "Pracodawca nie może wpisać obowiązku odpracowania kosztów nauki po zakończeniu przygotowania zawodowego.",
      "Rozwiązanie umowy przez pracodawcę jest możliwe tylko w przypadkach wskazanych w przepisach.",
    ],
    actions: [
      "Zachowaj własną kopię podpisanej umowy.",
      "Sprawdź dane pracodawcy, miejsce pracy, zawód, wynagrodzenie i sposób dokształcania.",
      "Przed podpisaniem niezrozumiałego zapisu poproś o wyjaśnienie rodzica, szkołę lub PIP.",
    ],
    sourceIds: ["pip-mlodociani", "kodeks-pracy", "statut-zsz5"],
    statuteReference: "Statut ZSZ5: § 70 ust. 6c oraz § 71 ust. 15.",
  },
  {
    slug: "czas-pracy",
    title: "Czas pracy, szkoła i odpoczynek",
    eyebrow: "BS I",
    summary: "Czas nauki szkolnej wlicza się do czasu pracy młodocianego, nawet gdy lekcje odbywają się poza godzinami pracy.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    important: "Młodocianego nie wolno zatrudniać w nadgodzinach ani w porze nocnej.",
    facts: [
      "Do 16 lat limit wynosi 6 godzin na dobę, a powyżej 16 lat 8 godzin na dobę.",
      "Gdy dobowy czas pracy przekracza 4,5 godziny, przysługuje 30 minut przerwy wliczanej do czasu pracy.",
      "Odpoczynek nocny powinien trwać nieprzerwanie co najmniej 14 godzin.",
      "W każdym tygodniu przysługuje co najmniej 48 godzin nieprzerwanego odpoczynku obejmującego niedzielę.",
    ],
    actions: [
      "Zapisuj rzeczywiste godziny rozpoczęcia i zakończenia pracy.",
      "Jeżeli grafik koliduje ze szkołą lub przekracza limity, zgłoś to instruktorowi i szkole.",
      "W razie braku reakcji skorzystaj z bezpłatnej porady PIP.",
    ],
    sourceIds: ["kodeks-pracy", "pip-mlodociani", "men-mlodociani"],
  },
  {
    slug: "wynagrodzenie",
    title: "Wynagrodzenie młodocianego",
    eyebrow: "BS I",
    summary: "Uczeń zatrudniony w celu nauki zawodu jest pracownikiem i ma prawo do wynagrodzenia.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    facts: [
      "Minimalna stawka jest liczona jako procent przeciętnego miesięcznego wynagrodzenia w gospodarce narodowej z poprzedniego kwartału.",
      "Minimum wynosi 8% w pierwszym roku nauki, 9% w drugim i 10% w trzecim.",
      "Kwota w złotych zmienia się wraz z ogłaszanym przeciętnym wynagrodzeniem, dlatego portal nie utrwala jednej kwoty na cały rok.",
      "Pracodawca może ustalić wynagrodzenie wyższe od minimum.",
    ],
    actions: [
      "Sprawdź stawkę zapisaną w umowie i pozycje na pasku wynagrodzeń.",
      "Porównuj kwotę z aktualną podstawą, a nie ze starym poradnikiem lub zrzutem ekranu.",
      "Zachowuj potwierdzenia wypłat.",
    ],
    sourceIds: ["wynagrodzenie-mlodocianych", "pip-mlodociani"],
  },
  {
    slug: "urlop-mlodocianego",
    title: "Urlop młodocianego",
    eyebrow: "BS I",
    summary: "Ferie szkolne nie oznaczają automatycznie wolnego od pracy. Wolne wymaga urlopu udzielonego przez pracodawcę.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    important: "Wniosek urlopowy złóż wcześniej. Nieobecność bez udzielonego urlopu może być nieusprawiedliwioną nieobecnością w pracy.",
    facts: [
      "Po 6 miesiącach od rozpoczęcia pierwszej pracy młodociany nabywa prawo do 12 dni roboczych urlopu.",
      "Po roku pracy nabywa prawo do 26 dni roboczych urlopu.",
      "W roku kalendarzowym, w którym kończy 18 lat, wymiar wynosi 20 dni, jeżeli prawo uzyskał przed pełnoletnością.",
      "Uczniowi urlopu należy udzielać w okresie ferii szkolnych.",
    ],
    actions: [
      "Ustal z pracodawcą urlop przed feriami i wakacjami.",
      "Złóż pisemny wniosek i zachowaj potwierdzenie.",
      "Gdy nie masz jeszcze prawa do urlopu, zapytaj o urlop zaliczkowy lub bezpłatny na zasadach z Kodeksu pracy.",
    ],
    sourceIds: ["kodeks-pracy", "pip-mlodociani", "men-mlodociani"],
  },
  {
    slug: "bhp-i-wypadek",
    title: "BHP, prace wzbronione i wypadek",
    eyebrow: "Bezpieczeństwo",
    summary: "Pracodawca musi przeszkolić młodocianego, ocenić ryzyko i nie może powierzać mu prac wzbronionych.",
    audiences: ["branżowa", "rodzic"],
    tone: "red",
    important: "Przy bezpośrednim zagrożeniu zdrowia lub życia przerwij pracę, odejdź w bezpieczne miejsce i natychmiast powiadom osobę dorosłą.",
    facts: [
      "Przed dopuszczeniem do pracy potrzebne są badania lekarskie i szkolenie BHP.",
      "Pracodawca ma przekazać młodocianemu oraz jego przedstawicielowi ustawowemu informację o ryzyku zawodowym i ochronie przed zagrożeniami.",
      "Nie wolno zatrudniać młodocianych przy pracach wzbronionych, poza ściśle określonymi wyjątkami potrzebnymi do nauki zawodu.",
      "Wypadek trzeba zgłosić pracodawcy, a uczeń powinien także poinformować rodzica i szkołę.",
    ],
    actions: [
      "Nie używaj maszyny ani substancji bez instruktażu i wymaganych zabezpieczeń.",
      "Zgłoś uszkodzony sprzęt, brak odzieży ochronnej lub polecenie niezgodne z BHP.",
      "Po wypadku zadbaj o pomoc medyczną i dokumentację zdarzenia.",
    ],
    sourceIds: ["pip-mlodociani", "kodeks-pracy", "statut-zsz5"],
  },
  {
    slug: "nieobecnosc-bs1",
    title: "Nieobecność w BS I i u pracodawcy",
    eyebrow: "BS I",
    summary: "Nieobecność w szkole i nieobecność w pracy to dwie sprawy. Każdą trzeba zgłosić właściwej osobie i udokumentować.",
    audiences: ["branżowa", "rodzic"],
    tone: "yellow",
    important: "Samo usprawiedliwienie w szkole nie usprawiedliwia nieobecności u pracodawcy.",
    facts: [
      "Statut wskazuje, że nieobecności uczniów BS I usprawiedliwia wychowawca na podstawie zaświadczenia lekarskiego, zwolnienia od pracodawcy lub innych pism urzędowych.",
      "Usprawiedliwienie należy przedłożyć niezwłocznie po powrocie, najpóźniej na najbliższej godzinie wychowawczej.",
      "Zasady zgłaszania nieobecności w pracy wynikają także z organizacji przyjętej przez pracodawcę.",
      "Dokumentacja i frekwencja na zajęciach praktycznych podlegają kontroli szkoły i zakładu szkolącego.",
    ],
    actions: [
      "Powiadom pracodawcę zgodnie z zasadami zakładu, najlepiej przed rozpoczęciem zmiany.",
      "Powiadom wychowawcę i dostarcz dokument wymagany przez statut.",
      "Uzupełnij dzienniczek zajęć praktycznych i sprawdź wpis frekwencji.",
    ],
    sourceIds: ["statut-zsz5", "pip-mlodociani"],
    statuteReference: "Statut ZSZ5: § 70 ust. 12-13 oraz § 86 ust. 3 i 5.",
  },
  {
    slug: "zmiana-pracodawcy",
    title: "Rozwiązanie umowy lub zmiana pracodawcy",
    eyebrow: "BS I",
    summary: "Utrata miejsca nauki zawodu wpływa na status ucznia. Nie odkładaj kontaktu ze szkołą.",
    audiences: ["branżowa", "rodzic"],
    tone: "red",
    important: "Statut ZSZ5 wymaga dostarczenia kierownikowi szkolenia praktycznego nowej umowy w ciągu 14 dni od rozwiązania poprzedniej.",
    facts: [
      "Pracodawca może wypowiedzieć umowę w celu przygotowania zawodowego tylko z przyczyn określonych w Kodeksie pracy.",
      "Rozwiązanie umowy za porozumieniem stron jest możliwe, ale przed podpisaniem warto omówić skutki ze szkołą.",
      "Nowy pracodawca musi spełniać warunki prowadzenia przygotowania zawodowego.",
    ],
    actions: [
      "Natychmiast skontaktuj się z kierownikiem szkolenia praktycznego.",
      "Nie podpisuj porozumienia ani oświadczenia, którego skutków nie rozumiesz.",
      "Zachowaj świadectwo pracy i wszystkie dokumenty od poprzedniego pracodawcy.",
      "Dostarcz szkole nową umowę w terminie wskazanym w statucie.",
    ],
    sourceIds: ["statut-zsz5", "kodeks-pracy", "pip-mlodociani"],
    statuteReference: "Statut ZSZ5: § 71 ust. 15.",
  },
  {
    slug: "jak-dziala-technikum",
    title: "Jak działa Technikum nr 5",
    eyebrow: "T5",
    summary: "Pięcioletnie technikum łączy kształcenie ogólne, zawodowe, praktyki, egzaminy zawodowe i możliwość zdawania matury.",
    audiences: ["technikum", "rodzic"],
    tone: "blue",
    facts: [
      "Uczeń technikum nie jest automatycznie pracownikiem młodocianym.",
      "Praktyki zawodowe są częścią programu nauczania, a nie zwykłą pracą wakacyjną.",
      "Tytuł technika wymaga zdania egzaminów zawodowych ze wszystkich kwalifikacji w zawodzie.",
      "Świadectwo dojrzałości wymaga zdania egzaminu maturalnego.",
    ],
    actions: [
      "Sprawdź plan przedmiotów zawodowych i terminy praktyk dla swojej klasy.",
      "Od początku archiwizuj dokumenty praktyk i informacje o egzaminach zawodowych.",
      "Rozdziel przygotowanie do egzaminu zawodowego od przygotowania do matury.",
    ],
    sourceIds: ["statut-zsz5", "praktyczna-nauka"],
    statuteReference: "Statut ZSZ5: § 3 ust. 1 i rozdział 7.",
  },
  {
    slug: "praktyki-technikum",
    title: "Praktyki zawodowe w technikum",
    eyebrow: "T5",
    summary: "Praktyki służą zastosowaniu i pogłębieniu umiejętności zawodowych w rzeczywistych warunkach pracy.",
    audiences: ["technikum", "rodzic"],
    tone: "blue",
    important: "Terminy i miejsce praktyk zależą od klasy, zawodu i aktualnego harmonogramu szkoły.",
    facts: [
      "Każda klasa ma ustalany co roku harmonogram praktyk zawodowych.",
      "Uczeń prowadzi dokumentację praktyk, którą kontrolują szkoła i zakład.",
      "Ocenę ustala uprawniony nauczyciel, instruktor, opiekun praktyk lub kierownik szkolenia praktycznego.",
      "Dokumentacja praktyk jest przechowywana w szkole do dnia ukończenia szkoły.",
    ],
    actions: [
      "Przed praktyką sprawdź miejsce, godziny, opiekuna, wymagany strój i dokumenty.",
      "Na bieżąco uzupełniaj dzienniczek lub inną wymaganą dokumentację.",
      "Nieobecność zgłoś opiekunowi praktyk i szkole zgodnie z otrzymaną instrukcją.",
    ],
    sourceIds: ["statut-zsz5", "praktyczna-nauka"],
    statuteReference: "Statut ZSZ5: § 70-71.",
  },
  {
    slug: "nieobecnosc-technikum",
    title: "Nieobecność w technikum",
    eyebrow: "T5",
    summary: "Nieobecność trzeba usprawiedliwić niezwłocznie po powrocie do szkoły, zgodnie z dokumentami dopuszczonymi w statucie.",
    audiences: ["technikum", "rodzic"],
    tone: "yellow",
    facts: [
      "Nieobecności w technikum usprawiedliwia wychowawca na podstawie zwolnień lekarskich, pism urzędowych i oświadczeń.",
      "Dla ucznia niepełnoletniego oświadczenie składa rodzic, a uczeń pełnoletni może złożyć je sam.",
      "Usprawiedliwienie trzeba przedłożyć niezwłocznie po powrocie lub na najbliższej godzinie wychowawczej.",
      "Długie lub częste nieobecności mogą wpłynąć na klasyfikację i ocenę zachowania.",
    ],
    actions: [
      "Powiadom wychowawcę o dłuższej nieobecności.",
      "Złóż usprawiedliwienie w wymaganym terminie.",
      "Po powrocie ustal z nauczycielami terminy uzupełnienia sprawdzianów i materiału.",
    ],
    sourceIds: ["statut-zsz5"],
    statuteReference: "Statut ZSZ5: § 86 ust. 4-5 oraz rozdział 14.",
  },
  {
    slug: "prawa-ucznia",
    title: "Najważniejsze prawa ucznia",
    eyebrow: "Statut",
    summary: "Uczeń ma prawo do bezpiecznej nauki, informacji o wymaganiach, jawnej oceny i pomocy w trudnej sytuacji.",
    audiences: ["wszyscy", "rodzic"],
    tone: "neutral",
    facts: [
      "Masz prawo znać program, wymagania edukacyjne i zasady oceniania.",
      "Ocena postępów i zachowania ma być jawna i uzasadniona.",
      "Masz prawo do opieki podczas lekcji i przerw oraz do ochrony przed przemocą i poniżaniem.",
      "Możesz zwrócić się do wychowawcy, nauczyciela lub dyrektora w sprawie osobistej i oczekiwać pomocy, odpowiedzi oraz wyjaśnień.",
      "Pomoc psychologiczno-pedagogiczna w szkole jest dobrowolna i nieodpłatna.",
    ],
    actions: [
      "Najpierw opisz konkretnie sytuację i oczekiwane rozwiązanie.",
      "Zacznij od nauczyciela lub wychowawcy, jeżeli sprawa dotyczy lekcji albo klasy.",
      "W sprawie bezpieczeństwa lub naruszenia godności zgłoś problem od razu zaufanej osobie dorosłej.",
    ],
    sourceIds: ["statut-zsz5"],
    statuteReference: "Statut ZSZ5: § 24 oraz § 85.",
  },
  {
    slug: "obowiazki-ucznia",
    title: "Najważniejsze obowiązki ucznia",
    eyebrow: "Statut",
    summary: "Obowiązki dotyczą nauki, obecności, bezpieczeństwa, kultury zachowania i przestrzegania organizacji szkoły.",
    audiences: ["wszyscy", "rodzic"],
    tone: "neutral",
    facts: [
      "Uczeń ma systematycznie przygotowywać się do zajęć i brać udział w obowiązkowych zajęciach.",
      "Nieobecności należy usprawiedliwiać według zasad właściwych dla BS I lub technikum.",
      "Uczeń ma przestrzegać zasad bezpieczeństwa, poleceń pracowników szkoły i regulaminów pracowni.",
      "Młodociany pracownik dodatkowo przestrzega organizacji pracy, BHP i obowiązku dokształcania się.",
    ],
    actions: [
      "Czytaj wiadomości w dzienniku elektronicznym.",
      "Pilnuj terminów, dokumentacji praktycznej nauki zawodu i usprawiedliwień.",
      "Gdy nie rozumiesz polecenia lub zasady, poproś o wyjaśnienie przed upływem terminu.",
    ],
    sourceIds: ["statut-zsz5", "pip-mlodociani"],
    statuteReference: "Statut ZSZ5: § 85-86.",
  },
  {
    slug: "z-czym-do-kogo",
    title: "Z czym do kogo",
    eyebrow: "Pomoc",
    summary: "Najkrótsza droga do rozwiązania problemu zależy od tego, czy sprawa dotyczy klasy, praktyk, pracy, dokumentów czy bezpieczeństwa.",
    audiences: ["wszyscy", "rodzic"],
    tone: "yellow",
    facts: [
      "Sprawy lekcji, ocen, zachowania i klasy zwykle zaczynają się u nauczyciela lub wychowawcy.",
      "Sprawy zajęć praktycznych, praktyk i umowy kieruj do kierownika szkolenia praktycznego.",
      "Dokumenty, legitymacje i zaświadczenia obsługuje sekretariat.",
      "Pomoc emocjonalną, wychowawczą i psychologiczną zapewniają pedagog, psycholog i inni specjaliści szkolni.",
      "W razie zagrożenia zdrowia lub życia dzwoń pod 112.",
    ],
    actions: [
      "Zapisz datę, osoby, miejsce i krótki opis sytuacji.",
      "Dołącz zdjęcie dokumentu lub zrzut wiadomości, jeżeli jest potrzebny do wyjaśnienia sprawy.",
      "Jeżeli pierwszy kontakt nie rozwiąże problemu, poproś o wskazanie kolejnego kroku lub zwróć się do dyrekcji.",
    ],
    sourceIds: ["statut-zsz5", "zsz5-contact", "pip-mlodociani"],
    statuteReference: "Statut ZSZ5: § 74 ust. 6 i § 85.",
  },
];

export const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));

export function topicsFor(audience: Audience) {
  return topics.filter((topic) => topic.audiences.includes(audience) || topic.audiences.includes("wszyscy"));
}
