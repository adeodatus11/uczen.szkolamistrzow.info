export type Audience = "branżowa" | "technikum" | "rodzic" | "wszyscy";
export type TopicTone = "green" | "blue" | "yellow" | "red" | "neutral";

export type TopicQuestion = {
  question: string;
  answer: string;
};

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
  questions?: TopicQuestion[];
  sourceIds: string[];
  statuteReference?: string;
};

export const topics: Topic[] = [
  {
    slug: "pierwszy-tydzien",
    title: "Pierwsze dni w ZSZ5",
    eyebrow: "Organizacja",
    summary: "Najważniejsze sprawy organizacyjne na początku nauki w ZSZ5.",
    audiences: ["wszyscy", "rodzic"],
    tone: "neutral",
    facts: [
      "Dziennik elektroniczny służy do sprawdzania wiadomości, ocen i frekwencji.",
      "Wychowawca jest pierwszym kontaktem w większości bieżących spraw klasy.",
      "Uczeń Branżowej Szkoły I stopnia jest uczniem szkoły i - na podstawie umowy - pracownikiem młodocianym u pracodawcy.",
      "Uczeń technikum jest uczniem szkoły; praktyka zawodowa nie czyni go automatycznie pracownikiem.",
    ],
    actions: [
      "Aktywuj konto ucznia i rodzica w VULCAN-ie.",
      "Zapisz kontakt do wychowawcy oraz sekretariatu.",
      "Sprawdź plan lekcji i harmonogram praktycznej nauki zawodu.",
      "Uczeń szkoły branżowej: zachowaj kopię umowy o pracę i dokumentów z badań oraz BHP.",
      "Przygotuj kartę zdrowia do przekazania pielęgniarce we wrześniu.",
      "Przeczytaj skrót praw, obowiązków i zasad usprawiedliwiania nieobecności.",
    ],
    sourceIds: ["statut-zsz5", "zsz5-contact", "school-start-2026"],
  },
  {
    slug: "umowa-do-weryfikacji-2026",
    title: "Umowa ucznia szkoły branżowej do weryfikacji do 20 sierpnia",
    eyebrow: "Szkoła branżowa · termin 2026/2027",
    summary: "Podpisaną umowę o pracę ucznia Branżowej Szkoły I stopnia należy dostarczyć do szkoły przed rozpoczęciem roku szkolnego.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    important: "Termin: 20 sierpnia 2026 r. Umowę przyjmuje kierownik szkolenia praktycznego, p. Arkadiusz Mocarski, gabinet 25.",
    facts: [
      "To termin organizacyjny ZSZ5 dotyczący uczniów Branżowej Szkoły I stopnia.",
      "Szkoła weryfikuje umowę, ponieważ uczeń szkoły branżowej realizuje praktyczną naukę zawodu jako pracownik młodociany.",
      "Dokument powinien określać m.in. rodzaj przygotowania zawodowego, miejsce i czas jego realizacji, sposób dokształcania oraz wynagrodzenie.",
      "Wymóg dostarczenia umowy do szkoły nie dotyczy w tej formie uczniów technikum odbywających szkolne praktyki zawodowe.",
    ],
    actions: [
      "Sprawdź, czy umowę podpisali pracodawca i uczeń.",
      "Wykonaj kopię lub skan dla ucznia i rodzica.",
      "Dostarcz dokument do p. Arkadiusza Mocarskiego, gabinet 25, najpóźniej 20 sierpnia 2026 r.",
      "Jeżeli umowy jeszcze nie ma albo zawiera niejasne zapisy, skontaktuj się ze szkołą przed upływem terminu.",
    ],
    sourceIds: ["school-start-2026", "pip-mlodociani", "men-mlodociani", "statut-zsz5"],
  },
  {
    slug: "zebranie-rodzicow-2026",
    title: "Zebranie rodziców klas pierwszych",
    eyebrow: "Szkoła branżowa i technikum · 2 września",
    summary: "Pierwsze zebranie rodziców i opiekunów klas pierwszych odbędzie się 2 września 2026 r. o godz. 16:00.",
    audiences: ["wszyscy", "rodzic"],
    tone: "yellow",
    important: "Obecność rodzica lub opiekuna jest obowiązkowa.",
    facts: [
      "Termin dotyczy rodziców i opiekunów uczniów klas pierwszych szkoły branżowej oraz technikum.",
      "Data i godzina: 2 września 2026 r., godz. 16:00.",
      "Numer sali nie został jeszcze wskazany w informacji przekazanej do portalu.",
    ],
    actions: [
      "Zapisz termin w kalendarzu.",
      "Przed zebraniem sprawdź numer sali w VULCAN-ie lub w komunikacie szkoły.",
      "Przygotuj pytania dotyczące organizacji nauki, dokumentów, opłat i kontaktu z wychowawcą.",
    ],
    sourceIds: ["school-start-2026", "zsz5-main"],
  },
  {
    slug: "karta-zdrowia",
    title: "Karta zdrowia ucznia",
    eyebrow: "Szkoła branżowa i technikum · wrzesień 2026",
    summary: "Karty zdrowia będą zbierane przez pielęgniarkę w pierwszych dniach września; ostateczny termin dostarczenia to koniec miesiąca.",
    audiences: ["wszyscy", "rodzic"],
    tone: "blue",
    important: "Kartę zdrowia trzeba dostarczyć najpóźniej do 30 września 2026 r.",
    facts: [
      "Informacja dotyczy nowych uczniów szkoły branżowej i technikum.",
      "Pielęgniarka będzie zbierała karty zdrowia w pierwszych dniach września.",
      "Jeżeli uczeń nie przekaże karty podczas zbiórki, dokument należy dostarczyć do końca września.",
    ],
    actions: [
      "Odbierz kartę zdrowia z poprzedniej szkoły, jeżeli nie została przekazana w inny sposób.",
      "Wpisz na kopercie imię i nazwisko ucznia oraz klasę, jeżeli szkoła o to poprosi.",
      "Przekaż kartę pielęgniarce podczas zbiórki albo najpóźniej do 30 września 2026 r.",
    ],
    sourceIds: ["school-start-2026", "zsz5-main"],
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
    slug: "mlegitymacja-szkolna",
    title: "Legitymacja szkolna w mObywatelu",
    eyebrow: "Szkoła branżowa i technikum · mObywatel",
    summary: "Uczeń może dodać cyfrową legitymację szkolną do mObywatela Juniora, a rodzic lub opiekun do swojej aplikacji mObywatel.",
    audiences: ["wszyscy", "rodzic"],
    tone: "blue",
    important: "Po zmianie telefonu trzeba wygenerować w ZPE nowy kod QR lub UUID. Starego kodu nie można użyć ponownie.",
    facts: [
      "Cyfrowa legitymacja ma taką samą funkcję jak legitymacja szkolna i potwierdza m.in. uprawnienie do ulg.",
      "Dane do logowania do Zintegrowanej Platformy Edukacyjnej (ZPE) uczeń otrzymuje od szkoły.",
      "Kod aktywacyjny jest dostępny w ZPE, gdy szkoła zarejestrowała legitymację i wymagane dane ucznia w Systemie Informacji Oświatowej.",
      "Kod QR jest ważny przez 10 minut. Każda aktywacja na kolejnym urządzeniu wymaga osobnego kodu.",
      "Legitymację można dodać na jednym urządzeniu ucznia z mObywatelem Juniorem oraz na maksymalnie czterech urządzeniach rodziców lub opiekunów z aplikacją mObywatel.",
      "Po aktywacji dokument można okazywać także bez dostępu do internetu.",
    ],
    actions: [
      "Uzyskaj od szkoły login i hasło do ZPE, a następnie zaloguj się na konto ucznia.",
      "Otwórz w ZPE usługę mLegitymacja i wygeneruj kod QR lub UUID.",
      "W mObywatelu albo mObywatelu Juniorze wybierz dodanie legitymacji szkolnej i zeskanuj kod w ciągu 10 minut.",
      "Przy zmianie telefonu najpierw dezaktywuj aplikację na starym urządzeniu, a następnie wygeneruj w ZPE nowy kod QR i dodaj dokument na nowym telefonie.",
      "Jeżeli ZPE nie pokazuje kodu, poproś szkołę o sprawdzenie danych i rejestracji legitymacji w SIO.",
      "Jeżeli stary telefon jest niedostępny albo aplikacja żąda potwierdzenia na drugim urządzeniu, skorzystaj z procedury odzyskania dostępu w mObywatelu; szkoła może sprawdzić dane w ZPE, ale nie odblokowuje aplikacji.",
    ],
    questions: [
      {
        question: "Czy uczeń potrzebuje profilu zaufanego?",
        answer: "Nie. Uczeń może korzystać z mObywatela Juniora bez profilu zaufanego. Do pobrania legitymacji potrzebuje danych do ZPE otrzymanych od szkoły.",
      },
      {
        question: "Zmiana telefonu: co zrobić?",
        answer: "Jeżeli stary telefon jest dostępny, najpierw dezaktywuj na nim aplikację. Potem zaloguj się do ZPE, wygeneruj nowy kod QR lub UUID i dodaj dokument na nowym telefonie w ciągu 10 minut.",
      },
      {
        question: "Co zrobić, gdy stary telefon jest niedostępny?",
        answer: "Skorzystaj z procedury odzyskania dostępu wskazanej w aplikacji mObywatel. Komunikat o drugim urządzeniu zwykle oznacza, że poprzednia aktywacja nadal jest zapisana. Gdy procedura nie działa, skontaktuj się z pomocą mObywatela.",
      },
      {
        question: "Dlaczego ZPE nie pokazuje kodu?",
        answer: "Najczęściej legitymacja lub dane ucznia nie są jeszcze kompletne w SIO albo zmiana nie została jeszcze przetworzona. Poproś szkołę o sprawdzenie rejestracji, numeru PESEL, zdjęcia i wymaganych zgód. Po poprawnej rejestracji kod może pojawić się z opóźnieniem.",
      },
      {
        question: "Czy ten sam kod można zeskanować na kilku telefonach?",
        answer: "Nie. Każde urządzenie wymaga osobnego kodu. Limit wynosi jedno urządzenie ucznia z mObywatelem Juniorem i do czterech urządzeń rodziców lub opiekunów z mObywatelem.",
      },
    ],
    sourceIds: ["mobywatel-legitymacja", "mobywatel-junior", "zpe-mlegitymacja", "zpe-mlegitymacja-faq", "mlegitymacja-regulamin"],
  },
  {
    slug: "mlodociany-pracownik",
    title: "Kim jest pracownik młodociany",
    eyebrow: "Branżowa Szkoła I stopnia (BS I)",
    summary: "W ZSZ5 uczeń Branżowej Szkoły I stopnia uczy się w szkole i pracuje u pracodawcy na podstawie umowy o pracę w celu przygotowania zawodowego.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    important: "Pracownik młodociany to nie synonim każdego niepełnoletniego ucznia. Decydują wiek oraz zatrudnienie na podstawie umowy o pracę.",
    facts: [
      "Młodociany to co do zasady osoba, która ukończyła 15 lat i nie przekroczyła 18 lat.",
      "Status pracownika powstaje po zawarciu umowy z pracodawcą. Pracownik młodociany ma prawo do wynagrodzenia, bezpiecznych warunków, odpoczynku i urlopu oraz obowiązek wykonywania pracy.",
      "Uczeń bez kwalifikacji zawodowych jest zatrudniany w celu przygotowania zawodowego; w szkole branżowej najczęściej jest to nauka zawodu.",
      "Nauka zawodu łączy zajęcia praktyczne u pracodawcy z dokształcaniem teoretycznym w szkole.",
      "Szkoła odpowiada za naukę i sprawy uczniowskie, a pracodawca za zatrudnienie i organizację pracy. Obie strony współpracują w kształceniu zawodowym.",
      "Uczeń technikum nie jest automatycznie pracownikiem młodocianym. Szkolna praktyka zawodowa i umowa o pracę to dwie różne sytuacje.",
    ],
    actions: [
      "Przeczytaj własną umowę i sprawdź, kto jest w niej pracodawcą.",
      "Poznaj instruktora praktycznej nauki zawodu.",
      "Sprawdź, w które dni jesteś w szkole, a w które u pracodawcy.",
      "Sprawy szkolne zgłaszaj wychowawcy, sprawy pracy pracodawcy, a sprawy łączące oba obszary także kierownikowi szkolenia praktycznego.",
    ],
    questions: [
      {
        question: "Czy są to zwykłe praktyki szkolne?",
        answer: "Nie. To nie są praktyki szkolne w pracowni. Uczeń szkoły branżowej wykonuje praktyczną naukę zawodu u pracodawcy jako pracownik zatrudniony na podstawie umowy o pracę w celu przygotowania zawodowego.",
      },
      {
        question: "Kto jest moim pracodawcą?",
        answer: "Pracodawcą jest firma lub osoba wskazana w umowie o pracę. Szkoła nie jest pracodawcą: prowadzi kształcenie i współpracuje z zakładem szkolącym.",
      },
      {
        question: "Kto podpisuje umowę o pracę? Czy rodzic podpisuje?",
        answer: "Umowę podpisują pracodawca i pracownik młodociany. Rodzic lub opiekun nie jest stroną tej umowy, ale może pomagać uczniowi, a w sytuacji zagrożenia jego dobra korzystać z ochrony przewidzianej prawem.",
      },
      {
        question: "Czy młodociany ma takie same prawa jak dorosły pracownik?",
        answer: "Ma podstawowe prawa pracownicze, w tym prawo do wynagrodzenia, bezpiecznej pracy, odpoczynku i urlopu. Przepisy zapewniają mu dodatkową ochronę, zwłaszcza krótszy czas pracy, zakaz nadgodzin i pracy nocnej oraz ograniczenie prac wzbronionych.",
      },
      {
        question: "Czy zatrudnienie oznacza ubezpieczenie i staż pracy?",
        answer: "Tak. Pracodawca zgłasza pracownika do wymaganych ubezpieczeń społecznych i zdrowotnego. Okres zatrudnienia jest okresem pracy, dlatego po zakończeniu umowy należy zachować świadectwo pracy.",
      },
    ],
    sourceIds: ["kodeks-pracy", "pip-mlodociani", "men-mlodociani", "pip-zatrudnienie-pracownika", "statut-zsz5"],
  },
  {
    slug: "umowa-o-prace",
    title: "Umowa o pracę w celu przygotowania zawodowego",
    eyebrow: "Szkoła branżowa",
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
    questions: [
      {
        question: "Co musi zawierać umowa?",
        answer: "Umowa powinna określać rodzaj przygotowania zawodowego, czas i miejsce jego realizacji, sposób dokształcania teoretycznego oraz wysokość wynagrodzenia. Uczeń powinien otrzymać własny egzemplarz.",
      },
      {
        question: "Czy umowa może nakazać odpracowanie kosztów nauki?",
        answer: "Nie. Umowa nie może uzależniać ukończenia przygotowania zawodowego od późniejszej pracy u tego pracodawcy ani zobowiązywać ucznia do zwrotu kosztów przygotowania zawodowego.",
      },
      {
        question: "Czy pracodawca może rozwiązać umowę w dowolnym momencie?",
        answer: "Nie. Wypowiedzenie przez pracodawcę jest dopuszczalne tylko z przyczyn określonych w Kodeksie pracy. Przed podpisaniem porozumienia stron należy omówić skutki z kierownikiem szkolenia praktycznego.",
      },
      {
        question: "Co zrobić z podpisaną umową?",
        answer: "Zachowaj jeden egzemplarz, sprawdź wszystkie dane i dostarcz umowę do weryfikacji w szkole w terminie podanym przez ZSZ5. Na rok 2026/2027 termin dla nowych uczniów upływa 20 sierpnia 2026 r.",
      },
    ],
    sourceIds: ["pip-mlodociani", "kodeks-pracy", "statut-zsz5"],
    statuteReference: "Statut ZSZ5: § 70 ust. 6c oraz § 71 ust. 15.",
  },
  {
    slug: "czas-pracy",
    title: "Czas pracy, szkoła i odpoczynek",
    eyebrow: "Szkoła branżowa",
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
    questions: [
      {
        question: "Czy lekcje w szkole wliczają się do czasu pracy?",
        answer: "Tak. Czas obowiązkowych zajęć szkolnych wynikających z programu nauczania wlicza się do czasu pracy młodocianego, również wtedy, gdy lekcje odbywają się poza zwykłymi godzinami pracy.",
      },
      {
        question: "Czy dzień bez lekcji jest automatycznie dniem wolnym od pracy?",
        answer: "Nie. Jeżeli uczeń nie ma lekcji, o obowiązku stawienia się u pracodawcy decydują grafik, umowa i przepisy o czasie pracy. Ferie i dni wolne od zajęć nie są automatycznie urlopem.",
      },
      {
        question: "Czy młodociany może pracować w nadgodzinach lub w nocy?",
        answer: "Nie. Praca w godzinach nadliczbowych i w porze nocnej jest zabroniona. Młodocianemu przysługują także wydłużony odpoczynek dobowy i co najmniej 48 godzin nieprzerwanego odpoczynku tygodniowego obejmującego niedzielę.",
      },
      {
        question: "Co zrobić, gdy grafik koliduje ze szkołą albo przekracza limity?",
        answer: "Pokaż pracodawcy plan lekcji i poproś o poprawienie grafiku. Jeżeli problem nie zostanie rozwiązany, poinformuj kierownika szkolenia praktycznego i skorzystaj z porady Państwowej Inspekcji Pracy.",
      },
    ],
    sourceIds: ["kodeks-pracy", "pip-mlodociani", "men-mlodociani"],
  },
  {
    slug: "wynagrodzenie",
    title: "Wynagrodzenie młodocianego",
    eyebrow: "Szkoła branżowa",
    summary: "Uczeń zatrudniony w celu nauki zawodu jest pracownikiem i ma prawo do wynagrodzenia.",
    audiences: ["branżowa", "rodzic"],
    tone: "green",
    facts: [
      "Minimalna stawka jest liczona jako procent przeciętnego miesięcznego wynagrodzenia w gospodarce narodowej z poprzedniego kwartału.",
      "Minimum wynosi 8% w pierwszym roku nauki, 9% w drugim i 10% w trzecim.",
      "Kwota w złotych zmienia się wraz z ogłaszanym przeciętnym wynagrodzeniem, dlatego portal nie utrwala jednej kwoty na cały rok.",
      "Pracodawca może ustalić wynagrodzenie wyższe od minimum.",
      "Pracodawca zgłasza pracownika młodocianego do obowiązkowych ubezpieczeń społecznych i ubezpieczenia zdrowotnego.",
    ],
    actions: [
      "Sprawdź stawkę zapisaną w umowie i pozycje na pasku wynagrodzeń.",
      "Porównuj kwotę z aktualną podstawą, a nie ze starym poradnikiem lub zrzutem ekranu.",
      "Zachowuj potwierdzenia wypłat.",
    ],
    questions: [
      {
        question: "Kto wypłaca wynagrodzenie?",
        answer: "Wynagrodzenie wypłaca pracodawca na zasadach i w terminie obowiązującym w zakładzie pracy. Szkoła nie wypłaca pensji pracownika młodocianego.",
      },
      {
        question: "Dlaczego wypłata może być niższa od kwoty brutto?",
        answer: "Od wynagrodzenia brutto potrącane są składki finansowane przez pracownika. Pracownik zatrudniony na umowę o pracę podlega obowiązkowym ubezpieczeniom, w tym ubezpieczeniu chorobowemu.",
      },
      {
        question: "Co zrobić, gdy wynagrodzenie nie wpłynęło albo jest zaniżone?",
        answer: "Najpierw poproś pracodawcę lub osobę prowadzącą płace o wyjaśnienie i zachowaj umowę, pasek płacowy oraz potwierdzenia przelewów. Gdy sprawa nie zostanie rozwiązana, zgłoś ją Państwowej Inspekcji Pracy; szkołę poinformuj, jeżeli problem wpływa na dalszą naukę zawodu.",
      },
      {
        question: "Czy portal podaje aktualną kwotę wynagrodzenia w złotych?",
        answer: "Nie, ponieważ podstawa obliczenia zmienia się co kwartał. Należy sprawdzić aktualne przeciętne wynagrodzenie i zastosować procent właściwy dla roku nauki.",
      },
    ],
    sourceIds: ["wynagrodzenie-mlodocianych", "pip-mlodociani", "pip-zatrudnienie-pracownika", "zus-ubezpieczenie-chorobowe"],
  },
  {
    slug: "urlop-mlodocianego",
    title: "Urlop młodocianego",
    eyebrow: "Szkoła branżowa",
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
    questions: [
      {
        question: "Czy ferie oznaczają automatycznie wolne od pracy?",
        answer: "Nie. Ferie są okresem, w którym pracodawca powinien udzielać urlopu uczniowi, ale wolne wymaga udzielenia urlopu. Bez uzgodnienia uczeń ma obowiązek stawić się w pracy zgodnie z grafikiem.",
      },
      {
        question: "Skąd bierze się 12 i 26 dni urlopu?",
        answer: "Po 6 miesiącach od rozpoczęcia pierwszej pracy młodociany nabywa 12 dni roboczych urlopu. Po roku nabywa prawo do 26 dni. W pierwszym roku zatrudnienia te uprawnienia powstają kolejno zgodnie z Kodeksem pracy.",
      },
      {
        question: "Kiedy złożyć wniosek urlopowy?",
        answer: "Złóż go odpowiednio wcześniej przed feriami lub wakacjami, zgodnie z zasadami pracodawcy. Zachowaj potwierdzenie, że urlop został udzielony.",
      },
      {
        question: "Co zrobić, gdy uczeń nie nabył jeszcze prawa do urlopu?",
        answer: "Młodocianemu uczęszczającemu do szkoły pracodawca może na jego wniosek udzielić urlopu zaliczkowo w okresie ferii. Możliwy jest także urlop bezpłatny na zasadach określonych w Kodeksie pracy; trzeba go uzgodnić z pracodawcą.",
      },
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
      "Po wypadku uzyskaj pomoc medyczną i dopilnuj sporządzenia dokumentacji zdarzenia.",
    ],
    questions: [
      {
        question: "Kto zapewnia odzież roboczą i środki ochrony?",
        answer: "Jeżeli są wymagane na danym stanowisku, zapewnia je pracodawca. Dotyczy to odzieży i obuwia roboczego oraz środków ochrony indywidualnej, na przykład okularów, rękawic lub ochronników słuchu.",
      },
      {
        question: "Czy młodociany może wykonywać każde zadanie w swoim zawodzie?",
        answer: "Nie. Obowiązuje wykaz prac wzbronionych młodocianym. Niektóre czynności mogą być dopuszczone tylko w ściśle określonym zakresie niezbędnym do przygotowania zawodowego i przy zapewnieniu wymaganej ochrony.",
      },
      {
        question: "Co zrobić po otrzymaniu niebezpiecznego polecenia?",
        answer: "Nie rozpoczynaj zadania bez instruktażu i zabezpieczeń. Przy bezpośrednim zagrożeniu przerwij pracę, odejdź w bezpieczne miejsce i natychmiast powiadom przełożonego, rodzica lub opiekuna oraz szkołę. W sytuacji nagłej dzwoń pod 112.",
      },
      {
        question: "Komu zgłosić wypadek przy pracy?",
        answer: "Zgłoś go niezwłocznie pracodawcy, nawet gdy uraz wydaje się niewielki. Uzyskaj pomoc medyczną, poinformuj rodzica lub opiekuna i szkołę oraz dopilnuj, aby pracodawca sporządził wymaganą dokumentację.",
      },
    ],
    sourceIds: ["pip-mlodociani", "pip-zatrudnienie-pracownika", "kodeks-pracy", "statut-zsz5"],
  },
  {
    slug: "nieobecnosc-bs1",
    title: "Nieobecność ucznia szkoły branżowej i u pracodawcy",
    eyebrow: "Szkoła branżowa",
    summary: "Nieobecność w szkole i nieobecność w pracy to dwie sprawy. Każdą trzeba zgłosić właściwej osobie i udokumentować.",
    audiences: ["branżowa", "rodzic"],
    tone: "yellow",
    important: "Samo usprawiedliwienie w szkole nie usprawiedliwia nieobecności u pracodawcy.",
    facts: [
      "Statut wskazuje, że nieobecności uczniów Branżowej Szkoły I stopnia usprawiedliwia wychowawca na podstawie zaświadczenia lekarskiego, zwolnienia od pracodawcy lub innych pism urzędowych.",
      "Usprawiedliwienie należy przedłożyć niezwłocznie po powrocie, najpóźniej na najbliższej godzinie wychowawczej.",
      "Zasady zgłaszania nieobecności w pracy wynikają także z organizacji przyjętej przez pracodawcę.",
      "Dokumentacja i frekwencja na zajęciach praktycznych podlegają kontroli szkoły i zakładu szkolącego.",
    ],
    actions: [
      "Powiadom pracodawcę zgodnie z zasadami zakładu, najlepiej przed rozpoczęciem zmiany.",
      "Powiadom wychowawcę i dostarcz dokument wymagany przez statut.",
      "Uzupełnij dzienniczek zajęć praktycznych i sprawdź wpis frekwencji.",
    ],
    questions: [
      {
        question: "Czy usprawiedliwienie w szkole wystarcza pracodawcy?",
        answer: "Nie. Szkoła i pracodawca prowadzą odrębną ewidencję obecności. Nieobecność trzeba zgłosić w obu miejscach zgodnie z ich zasadami.",
      },
      {
        question: "Jak zgłosić chorobę?",
        answer: "Niezwłocznie powiadom pracodawcę w sposób przyjęty w zakładzie, najlepiej przed rozpoczęciem zmiany. Zwolnienie lekarskie e-ZLA obsługuje się według zasad zatrudnienia. Osobno poinformuj wychowawcę i dostarcz dokument wymagany przez statut szkoły.",
      },
      {
        question: "Czy pracownik młodociany podlega ubezpieczeniu chorobowemu?",
        answer: "Tak. Pracownik zatrudniony na umowę o pracę podlega obowiązkowemu ubezpieczeniu chorobowemu. Prawo do świadczenia i jego wysokość zależą od warunków określonych w przepisach, dlatego nie należy zakładać stałej kwoty wypłaty za każdą nieobecność.",
      },
      {
        question: "Co zrobić, gdy nieobecność obejmuje także lekcje?",
        answer: "Powiadom zarówno pracodawcę, jak i wychowawcę. Po powrocie sprawdź, czy nieobecność została poprawnie odnotowana w dokumentacji pracy, dzienniczku zajęć praktycznych i dzienniku szkolnym.",
      },
    ],
    sourceIds: ["statut-zsz5", "pip-mlodociani", "zus-ubezpieczenie-chorobowe"],
    statuteReference: "Statut ZSZ5: § 70 ust. 12-13 oraz § 86 ust. 3 i 5.",
  },
  {
    slug: "zmiana-pracodawcy",
    title: "Rozwiązanie umowy lub zmiana pracodawcy",
    eyebrow: "Szkoła branżowa",
    summary: "Rozwiązanie umowy i utrata miejsca nauki zawodu wpływają na status ucznia. W takiej sytuacji należy niezwłocznie skontaktować się ze szkołą.",
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
    questions: [
      {
        question: "Czy przed zmianą pracodawcy trzeba skontaktować się ze szkołą?",
        answer: "Tak. Zmiana wpływa na ciągłość praktycznej nauki zawodu. Przed rozwiązaniem umowy skontaktuj się z kierownikiem szkolenia praktycznego i ustal sposób dalszego kształcenia.",
      },
      {
        question: "Czy warto podpisać od razu porozumienie stron?",
        answer: "Nie podpisuj dokumentu bez zrozumienia skutków. Porozumienie może zakończyć umowę w uzgodnionym terminie, dlatego najpierw pokaż je rodzicowi lub opiekunowi i skonsultuj ze szkołą.",
      },
      {
        question: "Czy pracodawca może wypowiedzieć umowę bez powodu?",
        answer: "Nie. Umowa w celu przygotowania zawodowego podlega szczególnej ochronie, a pracodawca może ją wypowiedzieć tylko w przypadkach wskazanych w Kodeksie pracy.",
      },
      {
        question: "Ile czasu jest na dostarczenie nowej umowy do ZSZ5?",
        answer: "Zgodnie ze statutem ZSZ5 nową umowę trzeba dostarczyć kierownikowi szkolenia praktycznego w ciągu 14 dni od rozwiązania poprzedniej. Należy także zachować świadectwo pracy i pozostałe dokumenty od poprzedniego pracodawcy.",
      },
    ],
    sourceIds: ["statut-zsz5", "kodeks-pracy", "pip-mlodociani"],
    statuteReference: "Statut ZSZ5: § 71 ust. 15.",
  },
  {
    slug: "jak-dziala-technikum",
    title: "Organizacja nauki w Technikum nr 5",
    eyebrow: "Technikum",
    summary: "Pięcioletnie technikum łączy kształcenie ogólne, zawodowe, praktyki, egzaminy zawodowe i możliwość zdawania matury.",
    audiences: ["technikum", "rodzic"],
    tone: "blue",
    facts: [
      "Uczeń technikum nie jest automatycznie pracownikiem młodocianym.",
      "Praktyki zawodowe są częścią programu nauczania i nie stanowią zatrudnienia w ramach pracy wakacyjnej.",
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
    eyebrow: "Technikum",
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
    eyebrow: "Technikum",
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
      "Uczeń ma prawo znać program, wymagania edukacyjne i zasady oceniania.",
      "Ocena postępów i zachowania ma być jawna i uzasadniona.",
      "Uczeń ma prawo do opieki podczas lekcji i przerw oraz do ochrony przed przemocą i poniżaniem.",
      "Uczeń może zwrócić się do wychowawcy, nauczyciela lub dyrektora w sprawie osobistej oraz oczekiwać pomocy, odpowiedzi i wyjaśnień.",
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
      "Nieobecności należy usprawiedliwiać według zasad właściwych dla szkoły branżowej lub technikum.",
      "Uczeń ma przestrzegać zasad bezpieczeństwa, poleceń pracowników szkoły i regulaminów pracowni.",
      "Młodociany pracownik dodatkowo przestrzega organizacji pracy, BHP i obowiązku dokształcania się.",
    ],
    actions: [
      "Czytaj wiadomości w dzienniku elektronicznym.",
      "Przestrzegaj terminów dotyczących dokumentacji praktycznej nauki zawodu i usprawiedliwień.",
      "Gdy nie rozumiesz polecenia lub zasady, poproś o wyjaśnienie przed upływem terminu.",
    ],
    sourceIds: ["statut-zsz5", "pip-mlodociani"],
    statuteReference: "Statut ZSZ5: § 85-86.",
  },
  {
    slug: "z-czym-do-kogo",
    title: "Jak załatwić sprawę",
    eyebrow: "Pomoc",
    summary: "Sposób postępowania zależy od tego, czy sprawa dotyczy klasy, praktyk, pracy, dokumentów czy bezpieczeństwa.",
    audiences: ["wszyscy", "rodzic"],
    tone: "yellow",
    facts: [
      "Sprawy dotyczące lekcji, ocen, zachowania i klasy należy w pierwszej kolejności zgłaszać nauczycielowi lub wychowawcy.",
      "Sprawy zajęć praktycznych, praktyk i umowy należy kierować do kierownika szkolenia praktycznego.",
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
