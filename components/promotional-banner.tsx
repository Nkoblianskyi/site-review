"use client"

import Link from "next/link"
import type { HorizontalBanner as HorizontalBannerType } from "../types"
import Image from "next/image"

interface PromotionalBannerProps {
  banner: HorizontalBannerType
}

export function PromotionalBanner({ banner }: PromotionalBannerProps) {
  return (
    <div className="mb-6 max-w-[1580px] mx-auto">
      <Link
        href={banner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.01] transition-all duration-300"
      >
        <div className="relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Background Image */}
          <Image
            src={banner.backgroundImage || "/placeholder.svg"}
            alt="Banner Background"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Special Offer Flag */}
          <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-tl-lg rounded-br-lg text-xs font-bold z-10 shadow-medium">
            SPECIAL OFFER
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Left: Logo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-medium">
                <img
                  src={banner.logo || "/placeholder.svg"}
                  alt={banner.name}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Center: Bonus Text */}
            <div className="flex-1 text-center px-4">
              <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                {banner.welcomeOffer}
              </div>
            </div>

            {/* Right: Button */}
            <div className="flex items-center flex-shrink-0">
              <button className="bg-brand-accent hover:bg-yellow-600 text-black font-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 shadow-medium hover:shadow-strong whitespace-nowrap">
                CLAIM NOW
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
