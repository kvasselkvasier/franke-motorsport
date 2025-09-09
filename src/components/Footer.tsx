import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-gray-900">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Über uns</a></li>
              <li><a href="#streams" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Live Streams</a></li>
              <li><a href="#videos" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Videos</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Support</a></li>
              <li><a href="#shop" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Shop</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-gray-900">Folge uns</h3>
            <div className="space-y-3">
              <a
                href="https://twitch.tv/frankemotorsport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                </svg>
                <span>Twitch Live</span>
              </a>
              <a
                href="https://youtube.com/@frankemotorsport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 text-gray-900">Franke Motorsport</h3>
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Familien-Racing Team für Simracing, Kartsport und Motorsport. 
              Erlebe mit uns spannende Rennen und teile unsere Leidenschaft für Speed und Adrenalin!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Franke Motorsport | Made with ❤️ for Racing
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/impressum" className="text-gray-500 hover:text-gray-700 transition-colors">Impressum</a>
              <a href="/sitemap.xml" className="text-gray-500 hover:text-gray-700 transition-colors">Sitemap</a>
              <a href="/robots.txt" className="text-gray-500 hover:text-gray-700 transition-colors">Robots</a>
              <a href="/datenschutz" className="text-gray-500 hover:text-gray-700 transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
