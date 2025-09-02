export default function DonateButton() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Support</h2>
      
      <div className="space-y-4">
        {/* PayPal Spenden Button */}
        <a
          href="https://streamelements.com/frankemotorsport/tip"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          💳 PayPal Spende
        </a>

        {/* Twitch Bits */}
        <a
          href="https://www.twitch.tv/frankemotorsport"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          💎 Twitch Bits
        </a>

        {/* YouTube Mitgliedschaft */}
        <a
          href="https://www.youtube.com/channel/UCkfLGuxoRnhYV1ZHHvVlL4g/join"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          ⭐ YouTube Mitglied werden
        </a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Jeder Support hilft dabei, besseren Content zu erstellen! 🏁
        </p>
      </div>
    </div>
  )
}
