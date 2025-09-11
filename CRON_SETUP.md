# Vercel Cron Job Configuration für Hobby Plan

## Problem
Vercel Hobby Plan hat strikte Limits für Cron Jobs:
- Maximal 2 Cron Jobs
- Begrenzte Ausführungszeit
- Begrenzte Ausführungsfrequenz

## Lösungen

### Option 1: Reduzierte Frequenz (Aktuell aktiv)
```json
"crons": [
  {
    "path": "/api/cron/update-news",
    "schedule": "0 8 * * *"
  }
]
```
- **Frequenz:** Einmal täglich um 8:00 Uhr UTC
- **Hobby Plan kompatibel:** ✅ Ja

### Option 2: Cron Jobs komplett deaktivieren
Falls weiterhin Probleme auftreten:

1. Ersetze `vercel.json` mit `vercel-no-cron.json`:
```bash
cp vercel-no-cron.json vercel.json
```

2. News werden dann nur on-demand geladen (beim Seitenbesuch)

### Option 3: Manueller Trigger
Der Cron Job kann auch manuell getriggert werden:
```bash
curl -X POST https://franke-motorsport.de/api/cron/update-news \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

## Überwachung

### Logs checken:
```bash
vercel logs
```

### Status prüfen:
```bash
curl https://franke-motorsport.de/api/cron/update-news
```

## Environment Variables
Für den Hobby Plan benötigt:
- `CRON_SECRET` (optional, für Sicherheit)

## Alternativen zum Cron Job

### 1. Client-Side Refresh
News werden beim Seitenbesuch aktualisiert

### 2. Webhook Integration
Externe Services können den News-Update triggern

### 3. GitHub Actions (Kostenlos)
```yaml
name: Update News
on:
  schedule:
    - cron: '0 8 * * *'
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger News Update
        run: |
          curl -X POST ${{ secrets.VERCEL_URL }}/api/cron/update-news \
            -H "Authorization: Bearer ${{ secrets.CRON_SECRET }}"
```

## Empfehlung für Hobby Plan
- **Verwende Option 1** (Täglicher Cron) 
- Bei Problemen: **Option 2** (Kein Cron)
- Für mehr Kontrolle: **GitHub Actions**
