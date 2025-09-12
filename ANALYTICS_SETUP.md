# Vercel Analytics Setup

## Übersicht
Die Webseite verwendet Vercel Web Analytics und Speed Insights für umfassendes Tracking von:
- **Web Analytics**: Pageviews, Unique Visitors, Referrer, etc.
- **Speed Insights**: Core Web Vitals, Performance-Metriken

## Integrierte Features

### 1. Web Analytics (`@vercel/analytics`)
- **Automatisches Tracking**: Alle Seitenaufrufe werden automatisch erfasst
- **Privacy-Friendly**: DSGVO-konform, keine Cookies erforderlich
- **Real-time Data**: Live-Dashboard im Vercel Dashboard

### 2. Speed Insights (`@vercel/speed-insights`)
- **Core Web Vitals**: LCP, FID, CLS Metriken
- **Performance Monitoring**: Ladezeiten und User Experience
- **Automatische Berichte**: Integration in Vercel Dashboard

## Implementierung
```tsx
// In src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Dashboard-Zugriff
1. **Vercel Dashboard** → franke-motorsport Project
2. **Analytics Tab** → Web Analytics & Speed Insights
3. **Real-time Metriken** verfügbar nach Deployment

## DSGVO-Konformität
- ✅ **Keine Cookies**: Analytics arbeitet cookieless
- ✅ **Privacy-First**: Keine persönlichen Daten gespeichert
- ✅ **EU-Server**: Daten werden in EU-Rechenzentren verarbeitet
- ✅ **Anonymisiert**: Nur aggregierte Daten verfügbar

## Verfügbare Metriken

### Web Analytics:
- Pageviews & Unique Visitors
- Top Pages & Referrer
- Countries & Devices
- Browser & OS Statistics

### Speed Insights:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)

## Aktivierung
Analytics wird automatisch aktiviert nach:
1. ✅ **Packages installiert**: `@vercel/analytics` & `@vercel/speed-insights`
2. ✅ **Code integriert**: Komponenten in Layout hinzugefügt
3. ✅ **Deployment**: Auf Vercel deployed

Nach dem nächsten Deployment sind alle Metriken im Vercel Dashboard verfügbar.
