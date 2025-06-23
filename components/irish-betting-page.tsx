"use client"

import { useState } from "react"
import { TopSitesModal } from "./top-sites-modal"
import { CookieConsentBanner } from "./cookie-consent-banner"
import { InformationalContent } from "./informational-content"
import { AdvertiserDisclosurePopup } from "./advertiser-disclosure-popup"
import { TermsConditionsPopup } from "./terms-conditions-popup"
import { bettingSites } from "../data/mock-data"
import { LiveFixturesTicker } from "./live-fixtures-ticker"
import { MainHeroSection } from "./main-hero-section"
import { PageLayoutWrapper } from "./page-layout-wrapper"
import { BettingSitesList } from "./betting-sites-list"

export default function IrishBettingPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <PageLayoutWrapper>
        <MainHeroSection
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
          onTermsModalOpen={() => setIsTermsModalOpen(true)}
        />

        <div className="w-full">
          <LiveFixturesTicker />
        </div>

        {/* Sites List - тепер включає header як частину першої картки */}
        <BettingSitesList />

        <InformationalContent />
      </PageLayoutWrapper>

      <TopSitesModal bettingSites={bettingSites} casinoSites={[]} />
      <CookieConsentBanner />
      <AdvertiserDisclosurePopup isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsConditionsPopup isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
