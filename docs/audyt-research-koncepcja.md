# Audyt, research i koncepcja portalu ZSZ5

Data opracowania: 15 lipca 2026 r.

## 1. Audyt istniejących stron

### Poradnik dla rodziców

Adres: https://www.rodzice.szkolamistrzow.info/home

Mocne strony:

- gromadzi w jednym miejscu instrukcje VULCAN, dokumenty i informacje dla rodziców,
- zawiera materiały po polsku i ukraińsku,
- wykorzystuje prostą technologię, która jest łatwa w doraźnej edycji.

Problemy krytyczne:

- strona odsyła do statutu z 2023 r., podczas gdy aktualny tekst jednolity obowiązuje od 16 października 2025 r.,
- główna strona ma kilka nagłówków H1 i nie tworzy logicznej hierarchii dokumentu,
- pełny statut jest osadzony jako długi PDF, więc użytkownik musi przeszukiwać dokument zamiast uzyskać krótką odpowiedź,
- treść jest uporządkowana według typów dokumentów, a nie zadań ucznia lub rodzica,
- brak rozdzielenia BS I, technikum i roli rodzica,
- ważne linki prowadzą przez przekierowania Google lub do zewnętrznych plików SharePoint,
- na telefonie długie tytuły i kolejne sekcje tworzą wysoki, trudny do skanowania strumień treści,
- komunikat cookies zasłania część dokumentu i utrudnia pierwszy kontakt ze stroną.

Wniosek: dotychczasowy serwis może być archiwum linków, ale nie powinien być wzorem architektury nowego portalu.

### Strefa Pracodawcy

Adres: https://szef.szkolamistrzow.info/

Mocne strony:

- czytelny pulpit i szybki dostęp do najważniejszych miejsc,
- osobna baza wiedzy, dokumenty, kalendarz, kontakt i wyszukiwarka,
- dobra hierarchia nagłówków i mobilne menu,
- informacje są oparte na PIP, gov.pl i ELI,
- wizualnie tworzy spójną rodzinę „Szkoła Mistrzów”.

Ograniczenia dla nowego zadania:

- odbiorcą jest pracodawca, nie nowy uczeń ani rodzic,
- język zakłada znajomość modelu dualnego,
- terminy na pulpicie wymagają regularnej administracji i mogą szybko się dezaktualizować,
- portal ucznia potrzebuje mocniejszego rozdzielenia odpowiedzi według statusu użytkownika.

Wniosek: warto przejąć zasadę „krótki pulpit + baza wiedzy + źródła”, ale zmienić model nawigacji na rolę i zadanie użytkownika.

### Strona PIP o młodocianych

Adres: https://www.pip.gov.pl/dla-pracownikow/porady-prawne/zatrudnianie-pracownikow-mlodocianych

Mocne strony:

- źródło urzędowe i szeroki zakres merytoryczny,
- obejmuje umowę, czas pracy, prace lekkie, BHP, urlop oraz obowiązki stron,
- nadaje się jako podstawa do weryfikacji odpowiedzi.

Ograniczenia:

- artykuł jest długi i osadzony w bardzo rozbudowanej nawigacji PIP,
- miesza przygotowanie zawodowe z zatrudnianiem przy pracach lekkich,
- nie wyjaśnia specyficznych zasad ZSZ5 i nie prowadzi nowego ucznia krok po kroku,
- język jest poprawny prawnie, ale za gęsty na pierwszy kontakt piętnastolatka z prawem pracy.

Wniosek: PIP powinien być źródłem, a portal ZSZ5 warstwą objaśniającą i zadaniową.

## 2. Dobre praktyki

Przyjęte zasady wynikają z WCAG 2.2, materiałów W3C WAI oraz publicznych przewodników projektowania treści:

- użytkownik najpierw wybiera swoją rolę, a dopiero potem temat,
- jedna strona odpowiada na jedno pytanie,
- najważniejsza informacja i działanie są na początku,
- nagłówki opisują zadanie, a nie typ dokumentu,
- krótkie zdania, listy i jednoznaczne instrukcje zastępują długie bloki tekstu,
- nawigacja i nazwy są spójne na każdej stronie,
- link opisuje miejsce docelowe, nie używa tekstu „kliknij tutaj”,
- źródło i data weryfikacji są widoczne przy odpowiedzi,
- informacja pilna ma osobny, wyraźny panel,
- strona działa z klawiaturą, ma poprawną kolejność nagłówków i czytelny fokus,
- mobilny układ nie wymaga przewijania poziomego.

Źródła researchu:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C WAI, jasna treść: https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/
- W3C WAI, nawigacja i orientacja: https://www.w3.org/WAI/people-use-web/tools-techniques/navigation/
- ONS Service Manual, plain language: https://service-manual.ons.gov.uk/content/writing-for-users/plain-language
- ONS Service Manual, czytanie w internecie: https://service-manual.ons.gov.uk/content/writing-for-users/how-people-read-online

## 3. Baza wiedzy

| Obszar | Najważniejsze treści | Źródło nadrzędne |
| --- | --- | --- |
| Status młodocianego | wiek, szkoła i praca, opieka pracodawcy | Kodeks pracy, PIP, MEN |
| Umowa | forma pisemna, elementy, rozwiązywanie | Kodeks pracy, PIP, statut |
| Czas pracy | 6/8 godzin, nauka w czasie pracy, zakaz nocy i nadgodzin | Kodeks pracy, PIP |
| Wynagrodzenie | 8%, 9%, 10% podstawy kwartalnej | rozporządzenie RM |
| Urlop | 12 dni po 6 miesiącach, 26 po roku, ferie | Kodeks pracy, PIP |
| BHP | badania, szkolenie, ryzyko, prace wzbronione | Kodeks pracy, PIP |
| Frekwencja BS I | dokumenty, dzienniczek, szkoła i pracodawca | statut ZSZ5 |
| Zmiana pracodawcy | kontakt ze szkołą, nowa umowa w 14 dni | statut ZSZ5 |
| Technikum | pięcioletni cykl, praktyki, egzaminy | statut ZSZ5 |
| Praktyki T5 | harmonogram, dokumentacja, ocena | statut, rozporządzenie |
| Prawa ucznia | bezpieczeństwo, jawna ocena, pomoc | statut ZSZ5 |
| Obowiązki ucznia | nauka, obecność, regulaminy, bezpieczeństwo | statut ZSZ5 |
| Pomoc | wychowawca, kierownik szkolenia, sekretariat, specjaliści, PIP | statut, kontakt szkoły |

Treści zmienne, których nie należy publikować bez potwierdzenia: nazwiska i dyżury osób, harmonogram praktyk, szkolne terminy egzaminów, kwoty wynagrodzenia w złotych, składki i ubezpieczenia oraz doraźne instrukcje organizacyjne.

## 4. Koncepcja portalu

Nazwa robocza: „Strefa Ucznia ZSZ5”.

Cel strony: przekazanie uczniom i rodzicom najważniejszych informacji o nauce, praktykach, zatrudnieniu i sprawach organizacyjnych.

Pierwszy ekran realizuje trzy zadania:

1. pozwala wyszukać temat zwykłym słowem,
2. rozdziela ścieżki BS I, T5 i rodzica,
3. pokazuje wiarygodność treści oraz datę weryfikacji.

Architektura informacji:

- Start,
- Uczeń BS I,
- Uczeń Technikum nr 5,
- Rodzic lub opiekun,
- Prawa i obowiązki,
- Pomoc i kontakt,
- Źródła i aktualność,
- pojedyncze odpowiedzi w katalogu `/temat/`,
- wyszukiwarka pełnotekstowa działająca bez zewnętrznej usługi.

System wizualny:

- zieleń identyfikuje BS I i pracę,
- niebieski identyfikuje technikum,
- żółty identyfikuje rodzica, uwagę i sprawy do sprawdzenia,
- czerwony jest używany wyłącznie dla bezpieczeństwa i sytuacji pilnych,
- małe zaokrąglenia, wysoki kontrast i typografia systemowa utrzymują charakter serwisu publicznego,
- logo ZSZ5 i nazwa „Szkoła Mistrzów” łączą portal ze szkolną rodziną serwisów.

## 5. Model utrzymania

Treść każdej odpowiedzi znajduje się w jednym rekordzie danych. Rekord zawiera odbiorców, fakty, działania, podstawę w statucie oraz identyfikatory źródeł. Rejestr źródeł przechowuje link, typ dokumentu i datę weryfikacji.

Zalecany przegląd:

- przed rozpoczęciem każdego roku szkolnego,
- po każdej zmianie statutu,
- po zmianie przepisów dotyczących młodocianych,
- raz na kwartał dla informacji o wynagrodzeniu,
- niezwłocznie po zmianie linków VULCAN, danych kontaktowych lub organizacji praktyk.
