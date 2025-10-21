import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Franke Motorsport - DSGVO konform',
  description: 'DSGVO-konforme Datenschutzerklärung von Franke Motorsport: Transparente Informationen zum Umgang mit personenbezogenen Daten, Cookies, Analytics und Social Media.',
  keywords: ['datenschutz', 'dsgvo', 'privacy', 'franke motorsport', 'personenbezogene daten', 'cookies', 'datenschutzerklärung', 'instagram', 'social media'],
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  openGraph: {
    title: 'Datenschutzerklärung | Franke Motorsport',
    description: 'DSGVO-konforme Datenschutzerklärung von Franke Motorsport - Transparent und nutzerfreundlich.',
    url: 'https://www.franke-motorsport.de/datenschutz',
    type: 'website',
    locale: 'de_DE',
  },
  // Twitter Meta-Tags entfernt da kein aktiver Account
  alternates: {
    canonical: 'https://www.franke-motorsport.de/datenschutz',
  },
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Navigation zurück */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
          <p className="text-gray-600 text-lg">
            Informationen zum Umgang mit Ihren personenbezogenen Daten
          </p>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Verantwortlicher</h2>
            <p className="text-gray-700 mb-4">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800">
                Michael Kersten<br />
                Franke Motorsport<br />
                E-Mail: webmaster@franke-motorsport.de
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Allgemeine Hinweise</h2>
            <p className="text-gray-700 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Server-Log-Dateien</h3>
            <p className="text-gray-700 mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Cookies</h3>
            <p className="text-gray-700 mb-4">
              Diese Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. 
              Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Externe Dienste</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">RSS-Feeds und News-Aggregation</h3>
            <p className="text-gray-700 mb-4">
              Diese Website aggregiert öffentlich verfügbare RSS-Feeds von externen Motorsport-Websites. 
              Dabei werden keine personenbezogenen Daten übertragen oder gespeichert. Die Inhalte werden 
              automatisch abgerufen und angezeigt, ohne dass eine Verbindung zwischen Ihrem Besuch und 
              den externen Quellen hergestellt wird.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Verwendete RSS-Quellen:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Motorsport.com - öffentlicher RSS-Feed</li>
              <li>RaceFans.net - öffentlicher RSS-Feed</li>
              <li>Reddit (r/simracing, r/karting) - öffentliche JSON-API</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der 
              Bereitstellung aktueller Motorsport-Informationen)
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Google AdSense</h3>
            <p className="text-gray-700 mb-4">
              Diese Website verwendet Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited. 
              AdSense verwendet Cookies und Web Beacons (unsichtbare Grafiken), die eine Analyse der Benutzung der Website ermöglichen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Twitch</h3>
            <p className="text-gray-700 mb-4">
              Wir binden Videos und Streams der Plattform Twitch ein. Anbieter ist die Twitch Interactive, Inc., 
              350 Bush Street, 2nd Floor, San Francisco, CA 94104, USA.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">YouTube</h3>
            <p className="text-gray-700 mb-4">
              Wir binden Videos der Plattform YouTube ein. Anbieter ist die Google Ireland Limited, 
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Instagram</h3>
            <p className="text-gray-700 mb-4">
              Unsere Website verweist auf unser Instagram-Profil und kann Instagram-Inhalte einbinden. 
              Anbieter ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Datenverarbeitung:</strong> Wenn Sie auf Links zu unserem Instagram-Profil 
              (@franke_motorsport) klicken, werden Sie zu Instagram weitergeleitet. Dabei kann Instagram 
              Ihr Nutzerverhalten analysieren und personenbezogene Daten wie IP-Adresse, Browsertyp und 
              Besuchszeit erfassen.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Zweck:</strong> Bereitstellung von Social Media Inhalten, Marketing und Reichweitenmessung.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der 
              Social Media Präsenz und Kundenkommunikation).
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Datenschutzerklärung von Instagram:</strong> 
              <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800 underline">
                https://help.instagram.com/519522125107875
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Widerspruch:</strong> Sie können der Datenverarbeitung durch Instagram widersprechen, 
              indem Sie die entsprechenden Einstellungen in Ihrem Instagram-Account vornehmen oder Instagram 
              nicht besuchen.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>unentgeltlich Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger oder unvollständiger Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>der Datenverarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Kontakt</h2>
            <p className="text-gray-700 mb-4">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800">
                E-Mail: webmaster@franke-motorsport.de<br />
                Betreff: Datenschutzanfrage
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 text-sm">
              <strong>Stand:</strong> September 2025<br />
              Diese Datenschutzerklärung kann jederzeit angepasst werden. 
              Die aktuelle Version finden Sie immer auf dieser Seite.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
