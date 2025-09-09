export default function DonateButton() {
  return (
    <section className="professional-section">
      <h2 className="text-3xl font-heading font-semibold mb-8 text-gray-900">Support our Racing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* PayPal Spenden Button */}
        <a
          href="https://streamelements.com/frankemotorsport/tip"
          target="_blank"
          rel="noopener noreferrer"
          className="professional-card text-center hover:shadow-lg transition-all duration-200 flex flex-col items-center p-6"
        >
          <div className="text-gray-600 mb-3">
            <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <h3 className="font-heading font-medium text-lg mb-2 text-gray-900">PayPal Spende</h3>
          <p className="text-gray-600 text-sm">Unterstütze unsere Leidenschaft</p>
        </a>

        {/* Twitch Bits */}
        <a
          href="https://www.twitch.tv/frankemotorsport"
          target="_blank"
          rel="noopener noreferrer"
          className="professional-card text-center hover:shadow-lg transition-all duration-200 flex flex-col items-center p-6"
        >
          <div className="text-gray-600 mb-3">
            <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
            </svg>
          </div>
          <h3 className="font-heading font-medium text-lg mb-2 text-gray-900">Twitch Bits</h3>
          <p className="text-gray-600 text-sm">Power up our Stream</p>
        </a>

        {/* YouTube Mitgliedschaft */}
        <a
          href="https://www.youtube.com/channel/UCkfLGuxoRnhYV1ZHHvVlL4g/join"
          target="_blank"
          rel="noopener noreferrer"
          className="professional-card text-center hover:shadow-lg transition-all duration-200 flex flex-col items-center p-6"
        >
          <div className="text-gray-600 mb-3">
            <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <h3 className="font-heading font-medium text-lg mb-2 text-gray-900">YouTube Member</h3>
          <p className="text-gray-600 text-sm">Join the Team</p>
        </a>
      </div>

      <div className="mt-8 text-center professional-card">
        <p className="text-lg text-gray-700 font-heading font-medium mb-3">
          Jeder Support bringt uns näher zur Ziellinie!
        </p>
        <p className="text-gray-600">
          Hilf uns dabei, noch besseren Racing-Content zu erstellen und unsere Motorsport-Träume zu verwirklichen!
        </p>
      </div>
    </section>
  )
}
