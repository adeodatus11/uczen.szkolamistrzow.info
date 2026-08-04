# Podręczniki 2026/2027 - kwerenda i założenia publikacji

Data opracowania: 4 sierpnia 2026 r.

## Materiał źródłowy

Oficjalna strona ZSZ5 publikuje dwa osobne wykazy:

- Branżowa Szkoła I stopnia nr 5: PDF, 4 strony, około 485 KB,
- Technikum nr 5: PDF, 5 stron, około 495 KB.

Oba dokumenty są tabelami w układzie A4 poziomym. Zawierają przedmiot, tytuł, autora, wydawnictwo i numer dopuszczenia. Pliki nie są tagowane, dlatego ich tabela jest trudna do odczytania na telefonie i przez część technologii asystujących.

Źródło: https://zsz5.edupage.org/a/podreczniki

## Najważniejsze ustalenia merytoryczne

### Branżowa Szkoła I stopnia

Wykaz obejmuje zawody: cukiernik, fryzjer, kucharz i sprzedawca oraz klasy wielozawodowe WA i WB. Część przedmiotów ogólnych została przypisana tylko do określonych zawodów albo klas wielozawodowych. Podręczniki zawodowe dla sprzedawców mają być zamawiane przez nauczyciela na początku roku szkolnego.

### Technikum

Wykaz obejmuje kierunki technik usług fryzjerskich i technik handlowiec. Różnią się między innymi zakresem biologii i geografii. W pierwszych klasach technika handlowca podręczniki do przedmiotów zawodowych mają być zamawiane przez nauczyciela na początku roku szkolnego.

### Informacja wspólna

Szkoła informuje, że wiele podręczników może być dostępnych w bibliotece, a część będzie zamawiana grupowo. Portal nie powinien więc sugerować zakupu całego wykazu bez wcześniejszego sprawdzenia uwag.

## Dobre praktyki

1. Informacja potrzebna do podjęcia decyzji powinna być dostępna w HTML, a PDF powinien pozostać dokumentem źródłowym. PDF-y są trudniejsze do użycia na małym ekranie, znalezienia w wyszukiwarce i obsługi technologiami asystującymi.
2. Cel odnośnika powinien wynikać z jego treści. Zamiast „kliknij tutaj” należy podać typ szkoły, format, rozmiar i liczbę stron.
3. Użytkownik powinien najpierw wybrać typ szkoły, potem zawód lub kierunek, a następnie klasę. Taki porządek odpowiada budowie szkolnych wykazów i ogranicza ryzyko zakupu niewłaściwej części.
4. Komunikaty o bibliotece i zamówieniach grupowych powinny pojawić się przed linkami do plików oraz przy kierunkach, których bezpośrednio dotyczą.
5. Pełne dane bibliograficzne nie powinny być ręcznie kopiowane do portalu. Oficjalny PDF pozostaje nadrzędny, a portal objaśnia jego strukturę i prowadzi do właściwego miejsca.

## Przyjęta koncepcja

- dwa wyraźne punkty wejścia: Branżowa Szkoła I stopnia oraz Technikum,
- warstwa HTML z rozwijanymi listami książek dla każdego zawodu i kierunku,
- szczególne oznaczenie zamówień grupowych,
- opisane linki do oficjalnych PDF-ów z formatem, rozmiarem i liczbą stron,
- lista kontrolna przed zakupem,
- dodanie nazw zawodów i kierunków do wyszukiwarki portalu,
- lokalne kopie obu PDF-ów, aby wykazy nie przestały działać po zmianie adresu w EduPage; obok nich pozostaje link do dokumentu źródłowego,
- obowiązek ponownego pobrania plików i aktualizacji list HTML po każdej zmianie wykazu na stronie szkoły.

Lokalne kopie zapisane 4 sierpnia 2026 r.:

- Branżowa Szkoła I stopnia: `public/documents/podreczniki-2026-2027/podreczniki-branzowa-szkola-2026-2027.pdf`, SHA-256 `2404440caa7c31940b8df19eacb79c341e2fbcdc6b1da4fc48cca982f096a6f4`,
- Technikum: `public/documents/podreczniki-2026-2027/podreczniki-technikum-2026-2027.pdf`, SHA-256 `f8577dd4b131a3c391245b1a14443b0599a70c73144c07c127c56c980095edfd`.

## Źródła dobrych praktyk

- Gov.pl, dostępność dokumentów tekstowych: https://www.gov.pl/web/dostepnosc-cyfrowa/jak-zwiekszyc-dostepnosc-cyfrowa-dokumentow-tekstowych
- GOV.UK, Publishing accessible documents: https://www.gov.uk/guidance/publishing-accessible-documents
- GOV.UK Design System, Attachment: https://design-guide.publishing.service.gov.uk/components/attachment/
- W3C, Link Purpose (In Context): https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html
