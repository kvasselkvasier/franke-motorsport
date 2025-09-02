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
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Racing Shops</h2>
      <div className="grid grid-cols-1 gap-3">
        {shopLinks.map((shop, index) => (
          <a
            key={index}
            href={shop.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border-l-4 border-red-500"
          >
            <span className="text-2xl">{shop.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-white">{shop.name}</h3>
              <p className="text-gray-400 text-sm">{shop.description}</p>
            </div>
            <span className="text-red-500 font-bold">→</span>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4">
        * Affiliate Partner - Unterstützt den Kanal ohne Mehrkosten
      </p>
    </div>
  )
}
