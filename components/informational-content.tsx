"use client"

export function InformationalContent() {
  return (
    <div className="mt-12 max-w-[1580px] mx-auto">
      {/* Main Guide Section */}
      <section className="bg-brand-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-strong mb-8 border border-white/30">
        <div className="relative px-6 py-8 bg-black/50 backdrop-blur-md">
          <div className="relative z-10 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                Your Ultimate <span className="text-brand-accent">Irish Bookmaker</span> Selection Guide
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Choosing the perfect bookmaker requires expert insight and thorough analysis. Our comprehensive guide
                eliminates the guesswork with professional reviews and detailed comparisons.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Discovering Your Ideal Betting Partner</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Each punter has distinct preferences and specific needs. Begin by determining which sports and
                    betting markets capture your interest most, then confirm that your selected providers offer
                    extensive coverage across those categories.
                  </p>
                  <p>
                    Furthermore, examine each provider's pricing structure and return rates carefully. Enhanced odds
                    substantially boost your potential returns and overall betting performance.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Capitalizing on Bonus Opportunities</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Today's competitive betting landscape drives providers to continuously enhance their promotional
                    offerings to attract and maintain loyal customers. Welcome packages have evolved significantly,
                    delivering exceptional value to newcomers who master the art of strategic bonus utilization.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Understanding Irish Gambling Regulations</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Ireland's gambling landscape operates under strict regulatory frameworks designed to protect
                    consumers while ensuring fair play across all platforms. Licensed operators must comply with
                    comprehensive guidelines covering everything from financial security to customer data protection.
                  </p>
                  <p>
                    This regulatory oversight provides peace of mind for Irish players, knowing their chosen platforms
                    meet the highest industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Informative Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-brand-accent">Why Choose Irish Licensed Bookmakers?</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Irish licensed bookmakers offer unparalleled security and consumer protection. With strict regulatory
                  oversight from the Revenue Commissioners, these platforms ensure fair play, secure transactions, and
                  responsible gambling practices.
                </p>
                <p>
                  Additionally, Irish operators provide localized customer support, familiar payment methods, and
                  comprehensive coverage of Irish sports including GAA, rugby, and horse racing from premier Irish
                  tracks.
                </p>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold mb-2 text-sm">
                  THIS MATERIAL IS COPYRIGHT PROTECTED. ALL SERVICES AND PROMOTIONS ARE EXCLUSIVELY FOR IRISH CITIZENS
                  AGED 18 AND ABOVE.
                </p>
                <p className="text-red-200 text-xs">
                  FURTHER RESTRICTIONS MAY APPLY INCLUDING IDENTITY VERIFICATION, LOCATION RESTRICTIONS, AND CITIZENSHIP
                  REQUIREMENTS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
