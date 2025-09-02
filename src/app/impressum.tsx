export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Impressum</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 1<br />
            12345 Musterstadt<br />
            Deutschland
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>
            Telefon: 01234 / 567890<br />
            E-Mail: info@franke-motorsport.de
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 1<br />
            12345 Musterstadt
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
        <p className="text-xs text-gray-500 mt-8">Vorlage. Bitte mit Ihren echten Daten ersetzen!</p>
      </div>
    </main>
  )
}
