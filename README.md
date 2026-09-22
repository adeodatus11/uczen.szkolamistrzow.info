# Strefa Ucznia ZSZ5

Portal informacyjny dla uczniów i rodziców Zespołu Szkół Zawodowych nr 5 we Wrocławiu.

Serwis rozdziela trzy ścieżki:

- uczeń Branżowej Szkoły I stopnia i młodociany pracownik,
- uczeń Technikum nr 5,
- rodzic lub opiekun.

Treści prawne są powiązane ze źródłami i datą weryfikacji. Portal nie zastępuje statutu, umowy o pracę ani indywidualnej porady prawnej.

## Uruchomienie

Wymagany jest Node.js 22 lub nowszy.

```bash
npm install
npm run dev
```

Build produkcyjny:

```bash
npm run build
npm run preview
```

## Struktura

- `src/data/topics.ts` - odpowiedzi, listy działań i przypisanie źródeł,
- `src/data/calendar.ts` - terminarz roku szkolnego: zebrania, konsultacje, wystawianie ocen, dni wolne i przerwy,
- `src/data/sources.ts` - rejestr źródeł i dat weryfikacji,
- `src/pages/` - strony ścieżek, opłat, podręczników i wyszukiwarka,
- `src/pages/terminarz/` - terminarz, archiwum terminów i pliki `.ics` do zapisania w kalendarzu,
- `src/data/articles.ts` i `src/pages/aktualnosci/` - sekcja „Aktualności”: teksty dla rodziców,
- `src/pages/temat/[slug].astro` - automatycznie generowane strony odpowiedzi,
- `docs/audyt-research-koncepcja.md` - audyt, research i decyzje projektowe,
- `docs/higiena-cyfrowa-kwerenda.md` - notatka z kwerendy do tekstu o higienie cyfrowej,
- `docs/warsztaty-neuromed-zrodla.md` - notatka źródłowa do tekstu o warsztatach NEUROMED,
- `docs/oferta-zewnetrzna-wrzesien-2026-zrodla.md` - notatka źródłowa do tekstów o kursie
  Poradni nr 9 i naborach Stowarzyszenia Iskierka.

## Terminarz

Wszystkie terminy są w `src/data/calendar.ts`. Każdy wpis ma datę w formacie `YYYY-MM-DD`
(oraz `endDate` przy wydarzeniach wielodniowych), więc podział na terminy nadchodzące
i archiwalne powstaje automatycznie przy budowaniu strony - terminu nie trzeba ręcznie
przenosić do archiwum. Po zmianie w kalendarzu szkoły wystarczy dopisać albo poprawić wpis
i przebudować serwis. Pole `announcedEventId` wskazuje wydarzenie pokazywane w oknie
na stronie głównej; okno znika samo, gdy termin minie.

## Aktualizacja treści

1. Sprawdź źródło urzędowe albo aktualny dokument szkoły.
2. Zmień treść w `src/data/topics.ts`.
3. Zaktualizuj `verifiedAt` przy źródle w `src/data/sources.ts`.
4. Uruchom `npm run build`.
5. Sprawdź stronę na telefonie i komputerze.

Szczególnej kontroli wymagają: statut, wynagrodzenia młodocianych, terminy szkolne i egzaminacyjne, osoby kontaktowe, wykazy podręczników, dane do wpłat i instrukcje VULCAN.

## Publikacja

Workflow `.github/workflows/deploy.yml` buduje serwis i publikuje katalog `dist` w GitHub Pages po zmianie na gałęzi `main`.

Serwis działa pod adresem:

`https://informator.szkolamistrzow.info/`

Domena własna jest zapisana w `public/CNAME` oraz w polu `site` w `astro.config.mjs`. Adres zapasowy GitHub Pages to `https://adeodatus11.github.io/uczen.szkolamistrzow.info/`.
