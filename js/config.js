/* =====================================================================
   Löpstockholm – tracking-konfiguration (ENDA filen du behöver ändra)
   ---------------------------------------------------------------------
   GA4_MEASUREMENT_ID : GA4 → Admin → Data streams → Web → "Measurement ID"
   META_PIXEL_ID      : Meta Events Manager → Data sources → Pixel → "Dataset ID"
   Så länge värdena är platshållare körs sajten i DEMO-läge:
   inga externa skript laddas, men alla events loggas i dataLayer och
   syns i eventpanelen (lägg till ?debug=1 i adressen).
   ===================================================================== */
window.LS_CONFIG = {
  GA4_MEASUREMENT_ID: 'G-XXXXXXX',
  META_PIXEL_ID: '000000000000000',
  CURRENCY: 'SEK',
  CONSENT_VERSION: '2026-11'
};
