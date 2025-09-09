export default function ShopLinks() {
  const shopLinks = [
    {
      name: "Amazon Racing",
      description: "Sim-Racing Equipment",
      link: "https://amazon.de/s?k=sim+racing",
      icon: "🛒"
    },
    {
      name: "Fanatec Store", 
      description: "Premium Racing Hardware",
      link: "https://fanatec.com",
      icon: "🏎️"
    },
    {
      name: "Racing Games Shop",
      description: "Spiele & Software",
      link: "#",
      icon: "🎮"
    },
    {
      name: "Karting Equipment",
      description: "Echtes Karting Zubehör", 
      link: "#",
      icon: "�"
    }
  ]

  return (
    <section id="shop" className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Racing Shops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shopLinks.map((shop, index) => (
          <a
            key={index}
            href={shop.link}
            target="_blank"
            rel="noopener noreferrer"
            className="professional-card flex items-center gap-4 hover:shadow-lg transition-all duration-200"
          >
            <span className="text-3xl">{shop.icon}</span>
            <div className="flex-1">
              <h3 className="font-heading font-medium text-gray-900 text-lg">{shop.name}</h3>
              <p className="text-gray-600">{shop.description}</p>
            </div>
            <span className="text-blue-600 font-medium text-xl">→</span>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-6 text-center">
        * Affiliate Partner - Unterstützt den Kanal ohne Mehrkosten
      </p>
    </section>
  )
}
