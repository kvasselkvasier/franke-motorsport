'use client'

import { useEffect } from 'react'

interface AdSenseProps {
  adSlot: string
  adFormat?: string
  fullWidth?: boolean
  className?: string
}

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidth = false,
  className = ''
}: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs text-gray-500 mb-2">Werbung</p>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center'
        }}
        data-ad-client="ca-pub-XXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth.toString()}
      ></ins>
    </div>
  )
}
