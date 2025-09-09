import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Franke Motorsport',
  description: 'Impressum und rechtliche Angaben von Franke Motorsport - Simracing, Kartsport und Livestreams.',
  robots: {
    index: true,
    follow: false,
  },
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Impressum</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Michael Kersten<br />
            Westernplan 27<br />
            39108 Magdeburg<br />
            Deutschland
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>
            Telefon: 0163 / 6658400<br />
            E-Mail: webmaster@franke-motorsport.de
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Michael Kersten<br />
            Westernplan 27<br />
            39108 Magdeburg
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
          </p>
        </section>
      </div>
    </main>
  )
}
