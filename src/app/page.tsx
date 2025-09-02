import StreamPlayer from '@/components/StreamPlayer'
import ShopLinks from '@/components/ShopLinks'
import DonateButton from '@/components/DonateButton'
import AdSense from '@/components/AdSense'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-center gap-4">
          {/* Logo */}
          <Logo size={48} />
          <h1 className="text-3xl font-black text-red-500 font-[var(--font-orbitron)] tracking-wider uppercase">
            FRANKE MOTORSPORT
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        <StreamPlayer />
        
        {/* Werbeplatz 1 - Banner unter Stream */}
        <AdSense 
          adSlot="1234567890" 
          adFormat="horizontal"
          fullWidth={true}
          className="my-6"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <ShopLinks />
          <DonateButton />
        </div>
        
        {/* Werbeplatz 2 - Banner am Ende */}
        <AdSense 
          adSlot="0987654321" 
          adFormat="rectangle"
          className="mt-8"
        />
        <div className="text-center mt-8">
          <a href="/impressum" className="text-xs text-gray-400 hover:text-red-400 underline transition-colors">Impressum</a>
        </div>
      </div>
    </main>
  )
}