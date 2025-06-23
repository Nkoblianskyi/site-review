"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const limit = isMobile ? 215 : 350
    const shouldShow = site.terms.length > limit
    setShowReadMore(shouldShow)
  }, [site.terms, isMobile])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  return (
    <div className="block animate-fade-in">
      {/* Table Header - тільки для першого елемента на desktop/tablet */}
      {rank === 1 && (
        <div className="hidden md:block bg-brand-dark/95 backdrop-blur-sm text-white rounded-lg shadow-medium border border-white/30">
          <div className="h-10 flex items-center px-4">
            <div className="flex-[0_0_30%] text-center">
              <span className="text-sm font-bold tracking-wide">BOOKMAKER</span>
            </div>
            <div className="flex-[0_0_25%] text-center">
              <span className="text-sm font-bold tracking-wide">WELCOME BONUS</span>
            </div>
            <div className="flex-[0_0_12%] text-center">
              <span className="text-sm font-bold tracking-wide">SCORE</span>
            </div>
            <div className="flex-[0_0_20%] text-center">
              <span className="text-sm font-bold tracking-wide">USER RATING</span>
            </div>
            <div className="flex-[0_0_13%] text-center">
              <span className="text-sm font-bold tracking-wide">VISIT SITE</span>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div
        className={`hidden lg:block bg-white/95 backdrop-blur-sm rounded-lg border ${rank === 1 ? "border-green-primary border-2" : "border-white/50"} shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer card-hover`}
      >
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content - remove left padding adjustments */}
          <div className="h-28 flex items-center py-4 px-6">
            {/* BOOKMAKER - 28% with badges in absolute top-left corner */}
            <div className="flex-[0_0_30%] pr-2 flex justify-center items-center h-full relative">
              {/* Logo with top margin to avoid overlap */}
              <div className="bg-white rounded-lg p-3 shadow-soft border mt-6">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-36 xl:w-44 h-16 xl:h-20 object-contain"
                />
              </div>
            </div>

            {/* Badges positioned absolutely at the very top-left corner of the entire card */}
            <div className="absolute top-0 left-0 flex gap-1 z-30">
              <div className="bg-green-700 text-white px-2 py-1 rounded-br-lg text-xs font-bold shadow-medium">
                #{rank}
              </div>
              {rank <= 4 && (
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-1 rounded-b-lg text-xs font-bold shadow-medium whitespace-nowrap">
                  {rank === 1 && "TOP RATED"}
                  {rank === 2 && "TOP BRAND"}
                  {rank === 3 && "TOP GROWTH"}
                  {rank === 4 && "TOP CHOICE"}
                </div>
              )}
            </div>

            {/* BONUS OFFER - 24% */}
            <div className="flex-[0_0_25%] px-2 text-center flex flex-col justify-center h-full">
              <div className="text-xs text-gray-600 uppercase font-medium mb-1">Welcome Bonus</div>
              <div className="text-lg xl:text-xl font-bold text-gray-800 mb-1">{site.bonus}</div>
              <div className="text-lg xl:text-xl font-bold text-brand-primary">{site.welcomeOffer}</div>
            </div>

            {/* SCORE - 12% */}
            <div className="flex-[0_0_12%] px-2 text-center flex flex-col justify-center h-full">
              <div className="text-4xl xl:text-5xl font-bold leading-none mb-1 text-brand-primary">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-xs font-medium text-gray-600">Our Score</div>
            </div>

            {/* USER RATING - 20% */}
            <div className="flex-[0_0_20%] px-2 text-center flex flex-col justify-center h-full">
              <div className="text-xs text-gray-600 mb-1">({formatVotes(site.votes)} reviews)</div>
              <div className="flex justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 xl:w-5 h-4 xl:h-5 ${
                      i < Math.floor(site.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">Excellent</div>
            </div>

            {/* VISIT SITE - 14% */}
            <div className="flex-[0_0_13%] pl-2 text-center flex flex-col justify-center items-center h-full">
              <Button className="bg-brand-accent hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg text-sm w-full h-10 mb-2 transition-all duration-300 shadow-medium">
                GET BONUS
              </Button>
              <div className="text-xs text-gray-600 font-medium">Visit {site.name}</div>
            </div>
          </div>
        </Link>
        {/* Terms section - remove left padding adjustment */}
        <div className="bg-gray-50 border-t border-gray-200 text-gray-600 py-3 rounded-b-lg px-6">
          <div className="text-center">
            <div
              className={`text-[10px] leading-relaxed transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-brand-primary hover:text-brand-secondary underline mt-2 text-[10px] font-medium transition-colors"
              >
                {isTermsExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden bg-white/95 backdrop-blur-sm rounded-lg border border-white/50 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer card-hover">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className={`pt-4 pb-4 ${rank <= 4 ? "pl-8 pr-4" : "px-4"}`}>
            <div className="grid grid-cols-12 gap-2 items-center">
              {/* Logo - 3 колонки */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-white rounded-lg p-2 shadow-soft border w-full mt-6">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                </div>
              </div>

              {/* Badges positioned absolutely at the very top-left corner of the entire card */}
              <div className="absolute top-0 left-0 flex gap-1 z-30">
                <div className="bg-green-700 text-white px-2 py-0.5 rounded-br-lg text-xs font-bold shadow-medium">
                  #{rank}
                </div>
                {rank <= 4 && (
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-0.5 rounded-b-lg text-xs font-bold shadow-medium whitespace-nowrap">
                    {rank === 1 && "TOP RATED"}
                    {rank === 2 && "TOP BRAND"}
                    {rank === 3 && "TOP GROWTH"}
                    {rank === 4 && "TOP CHOICE"}
                  </div>
                )}
              </div>

              {/* Bonus - 3 колонки */}
              <div className="col-span-3 text-center">
                <div className="text-xs text-gray-600 uppercase font-medium mb-1">Bonus</div>
                <div className="text-sm font-bold text-gray-800 mb-1">{site.bonus}</div>
                <div className="text-sm font-bold text-brand-primary">{site.welcomeOffer}</div>
              </div>

              {/* Score - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="bg-brand-primary rounded-lg p-2 text-white shadow-medium">
                  <div className="text-xl font-bold leading-none">{site.rating.toFixed(1)}</div>
                </div>
              </div>

              {/* Rating - 2 колонки */}
              <div className="col-span-2 text-center">
                <div className="text-xs text-gray-600 mb-1">({formatVotes(site.votes)})</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(site.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Button - 2 колонки */}
              <div className="col-span-2 text-center">
                <Button className="bg-brand-accent hover:bg-yellow-600 text-black font-bold px-2 py-1 rounded-lg text-xs w-full transition-all duration-300 shadow-medium">
                  GET BONUS
                </Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms */}
        <div
          className={`bg-gray-50 border-t border-gray-200 text-gray-600 py-2 rounded-b-lg ${rank <= 4 ? "pl-8 pr-4" : "px-4"}`}
        >
          <div className="text-center">
            <div
              className={`text-[10px] leading-relaxed transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-brand-primary hover:text-brand-secondary underline mt-1 text-[10px] font-medium"
              >
                {isTermsExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg border border-white/50 shadow-medium hover:shadow-medium transition-all duration-300 relative overflow-hidden cursor-pointer">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="p-3 relative">
            {/* Badges positioned absolutely at the very top-left corner */}
            <div className="absolute top-0 left-0 flex gap-1 z-30">
              <div className="bg-green-700 text-white px-1.5 py-0.5 rounded-br text-xs font-bold shadow-medium">
                #{rank}
              </div>
              {rank <= 4 && (
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-1.5 py-0.5 rounded-b text-xs font-bold shadow-medium whitespace-nowrap">
                  {rank === 1 && "TOP"}
                  {rank === 2 && "BRAND"}
                  {rank === 3 && "GROWTH"}
                  {rank === 4 && "CHOICE"}
                </div>
              )}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-2 items-center mt-6">
              {/* Logo Column */}
              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-2 border shadow-soft">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-8 w-auto object-contain" />
                </div>
              </div>

              {/* Bonus Column */}
              <div className="text-center">
                <div className="text-xs text-gray-600 uppercase font-medium mb-1">BONUS</div>
                <div className="text-sm font-bold text-gray-800 leading-tight mb-1">{site.bonus}</div>
                <div className="text-sm font-bold text-brand-primary leading-tight">{site.welcomeOffer}</div>
              </div>

              {/* Button Column */}
              <div className="flex justify-center">
                <Button className="bg-brand-accent hover:bg-yellow-600 text-black font-bold px-2 py-1 rounded-lg text-xs transition-all duration-300 shadow-medium w-full">
                  GET BONUS
                </Button>
              </div>
            </div>

            {/* Rating Row */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-gray-200">
              <div className="text-center">
                <div className="text-lg font-bold text-brand-primary leading-none mb-1">{site.rating.toFixed(1)}</div>
                <div className="text-xs text-gray-600 font-medium">Our Score</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        i < Math.floor(site.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-gray-600 font-medium">({formatVotes(site.votes)})</div>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms */}
        <div className="bg-gray-50 border-t border-gray-200 py-2 px-3 rounded-b-lg">
          <div className="text-center">
            <div
              className={`text-gray-600 text-[9px] leading-relaxed transition-all duration-300 ${!isTermsExpanded ? "line-clamp-2" : ""}`}
            >
              {site.terms}
            </div>
            {showReadMore && (
              <button
                onClick={handleTermsClick}
                className="text-brand-primary hover:text-brand-secondary underline text-[9px] font-medium mt-1"
              >
                {isTermsExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
