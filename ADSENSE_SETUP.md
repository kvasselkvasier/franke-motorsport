# Google AdSense Setup Guide

## 1. AdSense Account erstellen
1. Besuchen Sie [www.google.com/adsense](https://www.google.com/adsense)
2. Erstellen Sie ein neues Konto
3. Fügen Sie Ihre Website hinzu
4. Warten Sie auf die Genehmigung (kann 1-14 Tage dauern)

## 2. Publisher ID eintragen
Nach der Genehmigung:

1. **Layout.tsx** bearbeiten:
   ```tsx
   // Ersetzen Sie "ca-pub-XXXXXXXXX" mit Ihrer echten Publisher ID
   src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-IHRE_ECHTE_ID"
   ```

2. **AdSense.tsx** bearbeiten:
   ```tsx
   // Ersetzen Sie "ca-pub-XXXXXXXXX" 
   data-ad-client="ca-pub-IHRE_ECHTE_ID"
   ```

## 3. Ad Slots erstellen
1. Im AdSense Dashboard → "Anzeigen" → "Nach Anzeigeneinheiten"
2. Neue Anzeigeneinheit erstellen
3. Ad Slot ID kopieren
4. In `page.tsx` die Platzhalter-IDs ersetzen:
   ```tsx
   <AdSense adSlot="IHRE_ECHTE_SLOT_ID" />
   ```

## 4. Google Analytics (Optional)
1. Google Analytics Account erstellen
2. Tracking ID erhalten
3. In `layout.tsx` "GA_MEASUREMENT_ID" ersetzen

## Wichtige Hinweise ⚠️
- **Nie auf eigene Anzeigen klicken!**
- AdSense braucht Traffic um zu funktionieren
- Erste Einnahmen meist nach 1-2 Monaten
- Mindestens 10.000 Seitenaufrufe/Monat empfohlen
