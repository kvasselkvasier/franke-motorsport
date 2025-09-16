'use client';

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Nur auf der Client-Seite ausführen
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://franke-motorsport.de/#organization",
          "name": "Franke Motorsport",
          "legalName": "Franke Motorsport Team",
          "url": "https://franke-motorsport.de",
          "logo": {
            "@type": "ImageObject",
            "url": "https://franke-motorsport.de/franke-motorsport-logo.PNG",
            "width": 512,
            "height": 512,
            "caption": "Franke Motorsport Official Logo"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://franke-motorsport.de/franke-motorsport-banner.PNG",
            "width": 1200,
            "height": 350,
            "caption": "Franke Motorsport Team Banner"
          },
          "description": "Authentisches Familien-Racing-Team seit 2024, spezialisiert auf Simracing, Kartsport, Live-Streaming und Community Building. Von der PlayStation bis zur echten Rennstrecke - Setup-Guides, Racing-Tipps und Learning-Moments ohne Filter.",
          "foundingDate": "2024",
          "knowsAbout": [
            "Simracing",
            "Kartsport", 
            "Motorsport",
            "Live Streaming",
            "Gaming",
            "Racing Setups",
            "Community Management",
            "Content Creation",
            "Familien-Racing",
            "Authentisches Racing",
            "Racing-Tipps",
            "Setup-Guides",
            "Learning-Moments",
            "PlayStation Racing",
            "Kartslalom",
            "Rundstreckenrennen",
            "Multi-Platform Content"
          ],
          "specialty": [
            "Authentisches Familien-Racing",
            "Professional Simracing",
            "Kart Racing",
            "Live Entertainment",
            "Racing Education",
            "Setup Development",
            "Multi-Platform Content Creation",
            "Community Building",
            "PlayStation Racing Expertise"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Germany"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "DE",
            "addressLocality": "Deutschland"
          },
          "sameAs": [
            "https://twitch.tv/frankemotorsport",
            "https://youtube.com/@frankemotorsport",
            "https://instagram.com/franke_motorsport"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["German", "English"],
              "url": "https://franke-motorsport.de/impressum"
            }
          ],
          "brand": {
            "@type": "Brand",
            "name": "Franke Motorsport",
            "description": "Premium Motorsport Entertainment Brand"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://franke-motorsport.de/#website",
          "url": "https://franke-motorsport.de",
          "name": "Franke Motorsport",
          "alternateName": "Franke Motorsport Official Website",
          "description": "Offizielle Website von Franke Motorsport - Premium Simracing Team, Kartsport Action, Live-Streams und aktuelle Motorsport News aus Deutschland",
          "publisher": {
            "@id": "https://franke-motorsport.de/#organization"
          },
          "inLanguage": "de-DE",
          "isAccessibleForFree": true,
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://franke-motorsport.de/?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            {
              "@type": "WatchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://twitch.tv/frankemotorsport"
              },
              "object": {
                "@type": "VideoObject",
                "name": "Franke Motorsport Live Stream"
              }
            }
          ]
        },
        {
          "@type": "SportsTeam",
          "@id": "https://franke-motorsport.de/#sportsTeam",
          "name": "Franke Motorsport Racing Team",
          "sport": ["Motor Racing", "Sim Racing", "Kart Racing"],
          "memberOf": {
            "@type": "SportsOrganization",
            "name": "German Motorsport Community"
          },
          "location": {
            "@type": "Country",
            "name": "Germany"
          },
          "description": "Professionelles Racing Team für Simracing und Kartsport mit Fokus auf Content Creation und Community Building"
        }
      ]
    });

    // Entferne vorheriges Script falls vorhanden
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Füge neues Script hinzu
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // Diese Komponente rendert nichts sichtbares
}
