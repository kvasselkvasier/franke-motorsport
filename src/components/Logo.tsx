'use client'

import Image from "next/image";

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 48, className = '' }: LogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ minWidth: size, minHeight: size }}>
      <Image
        src="/franke-motorsport-logo.png"
        alt="Franke Motorsport Logo"
        width={size}
        height={size}
        priority
        className="rounded-md shadow"
      />
    </div>
  )
}
