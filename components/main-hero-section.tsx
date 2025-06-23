"use client"
import { Shield, Clock, Award } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-2">
        <div className="bg-brand-dark/55 backdrop-blur-sm rounded-lg shadow-strong border border-white/30 max-w-[1580px] mx-auto">
          <div className="relative px-6 py-1.5">
            <div className="relative z-10 text-center text-white">
              {/* Main Heading */}
              <div className="mb-3">
                <h1 className="text-2xl xl:text-3xl font-bold mb-3 leading-tight">
                  TOP <span className="text-brand-accent">IRISH</span> BOOKMAKERS
                </h1>

                <h2 className="text-lg xl:text-xl font-semibold mb-4 text-gray-200">
                  EXPERTLY REVIEWED FOR {getCurrentMonthYear()}
                </h2>

                <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Discover Ireland's most trusted betting platforms with our comprehensive analysis.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="rounded-lg p-1 text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-brand-accent" />
                  <h3 className="font-bold text-sm">100% Legal</h3>
                </div>
                <div className="rounded-lg p-1 text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    <div className="w-2 h-4 bg-brand-primary rounded"></div>
                    <div className="w-2 h-4 bg-white rounded"></div>
                    <div className="w-2 h-4 bg-brand-accent rounded"></div>
                  </div>
                  <h3 className="font-bold text-sm">IE Regulated</h3>
                </div>
                <div className="rounded-lg p-1 text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-brand-accent" />
                  <h3 className="font-bold text-sm">Fast Payouts</h3>
                </div>
                <div className="rounded-lg p-1 text-center">
                  <Award className="w-6 h-6 mx-auto mb-2 text-brand-accent" />
                  <h3 className="font-bold text-sm">Expert Tested</h3>
                </div>
              </div>

              {/* Bottom Disclaimer */}
              <div className="text-sm text-gray-300 space-y-2">
                <p>*Individual bonus terms apply to each offer. Restricted to New Players. Must be 18+</p>
                <div className="flex justify-center gap-4 text-xs">
                  <button
                    onClick={onAdvertiserModalOpen}
                    className="underline hover:text-brand-accent transition-colors"
                  >
                    Advertiser Disclosure
                  </button>
                  <span>|</span>
                  <button onClick={onTermsModalOpen} className="underline hover:text-brand-accent transition-colors">
                    18+ T&Cs Apply
                  </button>
                  <span>|</span>
                  <span>Play Responsibly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div className="lg:hidden mb-2">
        <div className="bg-brand-dark/95 backdrop-blur-sm rounded-lg shadow-strong border border-white/30 max-w-[1580px] mx-auto">
          <div className="px-4 py-2.5 text-center text-white">
            <h1 className="text-xl md:text-2xl font-bold mb-2">
              TOP <span className="text-brand-accent">IRISH</span> BOOKMAKERS
            </h1>
            <h2 className="text-sm md:text-base font-semibold mb-4 text-gray-200">
              REVIEWED FOR {getCurrentMonthYear()}
            </h2>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="rounded-lg p-2 text-center">
                <Shield className="w-4 h-4 mx-auto mb-1 text-brand-accent" />
                <h3 className="text-xs font-bold">Legal</h3>
              </div>
              <div className="rounded-lg p-2 text-center">
                <Clock className="w-4 h-4 mx-auto mb-1 text-brand-accent" />
                <h3 className="text-xs font-bold">Fast</h3>
              </div>
              <div className="rounded-lg p-2 text-center">
                <Award className="w-4 h-4 mx-auto mb-1 text-brand-accent" />
                <h3 className="text-xs font-bold">Tested</h3>
              </div>
            </div>

            <div className="text-xs text-gray-300">
              <button onClick={onAdvertiserModalOpen} className="underline mr-2">
                Disclosure
              </button>
              |
              <button onClick={onTermsModalOpen} className="underline ml-2">
                18+ T&Cs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
