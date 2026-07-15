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
- `src/data/sources.ts` - rejestr źródeł i dat weryfikacji,
- `src/pages/` - strony ścieżek i wyszukiwarka,
- `src/pages/temat/[slug].astro` - automatycznie generowane strony odpowiedzi,
- `docs/audyt-research-koncepcja.md` - audyt, research i decyzje projektowe.

## Aktualizacja treści

1. Sprawdź źródło urzędowe albo aktualny dokument szkoły.
2. Zmień treść w `src/data/topics.ts`.
3. Zaktualizuj `verifiedAt` przy źródle w `src/data/sources.ts`.
4. Uruchom `npm run build`.
5. Sprawdź stronę na telefonie i komputerze.

Szczególnej kontroli wymagają: statut, wynagrodzenia młodocianych, terminy szkolne i egzaminacyjne, osoby kontaktowe oraz instrukcje VULCAN.

## Publikacja

Workflow `.github/workflows/deploy.yml` buduje serwis i publikuje katalog `dist` w GitHub Pages po zmianie na gałęzi `main`.

Aktualny adres techniczny:

`https://adeodatus11.github.io/uczen.szkolamistrzow.info/`

Przed podłączeniem domeny `uczen.szkolamistrzow.info` trzeba dodać rekord DNS wskazujący GitHub Pages. Następnie należy ustawić domenę w ustawieniach Pages, dodać `public/CNAME` i przełączyć produkcyjny `site` oraz `base` w `astro.config.mjs` na domenę własną.
