# Löpstockholm – portfolioprojekt (Oskar Axelsson)

Live: https://oskaraxels.github.io/lopstockholm/

En liten demo-sajt om löprundor i Stockholm som jag byggt för att visa digital marknadsföring i praktiken:
landningssida med lead magnet, samtyckesstyrd GA4 + Meta Pixel, dataLayer-events, UTM-hantering och SEO-grunder.
Portfolio-PDF: https://oskaraxels.github.io/lopstockholm/portfolio.pdf

**Självinitierat övningsprojekt – inga riktiga annonser körs och formuläret skickar inga data.**

## Struktur
| Fil | Syfte |
|---|---|
| `index.html` | Startsida (hero, rundor, CTA) |
| `rundor.html` | 3 rundor + bonusrunda |
| `rundpaketet.html` | Landningssida + signup (lead magnet) |
| `tack.html` | Tacksida (noindex) + nedladdning |
| `integritet.html` | Integritet & cookies (GDPR/LEK) |
| `js/config.js` | **Enda stället för mät-ID:n** |
| `js/tracking.js` | Samtycke, Consent Mode v2, dataLayer, GA4/Meta-mappning, UTM, debug-panel |
| `sitemap.xml`, `robots.txt` | SEO |

## Så kopplar du på riktiga ID:n
1. **GA4:** analytics.google.com → Admin → Skapa egendom → Data streams → Web → kopiera *Measurement ID* (`G-…`).
2. **Meta Pixel:** business.facebook.com → Events Manager → Connect data sources → Web → kopiera *Dataset/Pixel ID*.
3. Klistra in i `js/config.js`:
   ```js
   GA4_MEASUREMENT_ID: 'G-ABC123XYZ',
   META_PIXEL_ID: '123456789012345',
   ```
4. Commit + push. Så länge platshållarna (`G-XXXXXXX`, `000000000000000`) står kvar körs sajten i **DEMO-läge**: inga externa skript laddas, men alla events loggas.

## Verifiera
- **Eventpanel:** lägg till `?debug=1` i adressen – alla dataLayer-events visas live, med info om GA4/Meta tar emot dem.
- **GA4:** Admin → DebugView (sajten skickar `debug_mode` när `?debug=1` används) och Reports → Realtime. Markera `generate_lead` som *Key event*.
- **Meta:** Chrome-tillägget *Meta Pixel Helper*, samt Events Manager → Test events.
- Testa alltid både "Godkänn alla" och "Endast nödvändiga" – vid nekat samtycke ska inga anrop gå till google-analytics.com eller facebook.com (kolla Network-fliken).

## Events
| dataLayer / GA4 | Meta | När |
|---|---|---|
| `page_view` | `PageView` | Varje sida, efter samtyckesval |
| `view_item` | `ViewContent` | Landningssidan för Rundpaketet |
| `begin_signup` | `InitiateCheckout` | Första fokus i formuläret |
| `generate_lead` | `Lead` | Godkänt formulär |
| `cta_click` | custom | Klick på CTA-knappar (`data-track`) |
| `select_content` | custom | Klick på rundkort |
| `file_download` | custom | Nedladdning av PDF på tacksidan |

Alla events får med sig UTM-parametrar från sessionen och ett `event_id` (för deduplicering mot en framtida Conversions API).
