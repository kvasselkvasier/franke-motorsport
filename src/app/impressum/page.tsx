import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum | Franke Motorsport - Rechtliche Angaben',
  description: 'Vollständiges Impressum von Franke Motorsport: Rechtliche Angaben, Kontaktdaten und Verantwortlichkeiten für Simracing, Kartsport und Motorsport-Content.',
  keywords: ['impressum', 'franke motorsport', 'rechtliche angaben', 'kontakt', 'verantwortlich', 'motorsport', 'simracing', 'kartsport'],
  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  openGraph: {
    title: 'Impressum | Franke Motorsport',
    description: 'Rechtliche Angaben und Kontaktinformationen von Franke Motorsport - Deutschlands Premium Motorsport Team.',
    url: 'https://www.franke-motorsport.de/impressum',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary',
    title: 'Impressum | Franke Motorsport',
    description: 'Rechtliche Angaben von Franke Motorsport - Premium Simracing & Kartsport Team.',
  },
  alternates: {
    canonical: 'https://www.franke-motorsport.de/impressum',
  },
};

export default function Impressum() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
          <p className="text-gray-600 text-lg">
            Rechtliche Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Michael Kersten<br />
                Westernplan 27<br />
                39108 Magdeburg<br />
                Deutschland
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Telefon: 0163 / 6658400<br />
                E-Mail: <a href="mailto:webmaster@franke-motorsport.de" className="text-blue-600 hover:text-blue-800">webmaster@franke-motorsport.de</a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Michael Kersten<br />
                Westernplan 27<br />
                39108 Magdeburg
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Inhalt des Onlineangebotes</h3>
            <p className="text-gray-700 mb-4">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftung für Links</h2>
            <p className="text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>
            <p className="text-gray-700">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße 
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
            <p className="text-gray-700 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-gray-700">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch 
              gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
              die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">RSS-Feeds und externe Inhalte</h2>
            <p className="text-gray-700 mb-4">
              Diese Website aggregiert Nachrichten aus öffentlich verfügbaren RSS-Feeds von Motorsport-Websites. 
              Alle Rechte an den aggregierten Inhalten liegen bei den ursprünglichen Urhebern und Quellen.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Verwendete News-Quellen:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li><strong>Motorsport.com</strong> - <a href="https://www.motorsport.com" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">www.motorsport.com</a></li>
              <li><strong>RaceFans</strong> - <a href="https://www.racefans.net" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">www.racefans.net</a></li>
              <li><strong>Reddit Sim Racing</strong> - <a href="https://www.reddit.com/r/simracing" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">reddit.com/r/simracing</a></li>
              <li><strong>Reddit Karting</strong> - <a href="https://www.reddit.com/r/karting" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">reddit.com/r/karting</a></li>
            </ul>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                <strong>Rechtlicher Hinweis zu RSS-Feeds:</strong> Wir nutzen ausschließlich öffentlich verfügbare RSS-Feeds 
                und zeigen nur kurze Auszüge der Artikel an. Alle vollständigen Artikel und Urheberrechte verbleiben 
                bei den ursprünglichen Quellen. Die Nutzung erfolgt zu Informationszwecken und unter Beachtung des 
                Fair-Use-Prinzips. Bei Beanstandungen kontaktieren Sie uns bitte umgehend.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 text-sm">
              <strong>Hinweis:</strong> Sollten Sie trotz sorgfältiger inhaltlicher Kontrolle auf eine 
              Rechtsverletzung aufmerksam werden, bitten wir Sie um einen entsprechenden Hinweis. 
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
