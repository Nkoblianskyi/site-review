"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  league: string
}

export function LiveFixturesTicker() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMatches = async () => {
    try {
      const res = await fetch("https://www.scorebat.com/video-api/v3/")
      const data = await res.json()

      if (!data.response) return

      const allMatches = data.response.slice(0, 15).map((match: any, index: number) => {
        const [homeTeam, awayTeam] = match.title.split(" - ")
        const dateObj = new Date(match.date)

        return {
          id: `match-${index}`,
          homeTeam: homeTeam?.trim() || "TBD",
          awayTeam: awayTeam?.trim() || "TBD",
          date: dateObj.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
          }),
          time: dateObj.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          league: match.competition || "Friendly",
        }
      })

      setMatches(allMatches)
    } catch (error) {
      setMatches([
        {
          id: "1",
          homeTeam: "Man United",
          awayTeam: "Liverpool",
          date: "15 Jun",
          time: "20:00",
          league: "Premier League",
        },
        {
          id: "2",
          homeTeam: "Barcelona",
          awayTeam: "Real Madrid",
          date: "16 Jun",
          time: "21:30",
          league: "La Liga",
        },
        {
          id: "3",
          homeTeam: "Bayern Munich",
          awayTeam: "Dortmund",
          date: "17 Jun",
          time: "19:00",
          league: "Bundesliga",
        },
        {
          id: "4",
          homeTeam: "PSG",
          awayTeam: "Marseille",
          date: "18 Jun",
          time: "22:00",
          league: "Ligue 1",
        },
        {
          id: "5",
          homeTeam: "Chelsea",
          awayTeam: "Arsenal",
          date: "19 Jun",
          time: "16:00",
          league: "Premier League",
        },
        {
          id: "6",
          homeTeam: "Juventus",
          awayTeam: "AC Milan",
          date: "20 Jun",
          time: "19:15",
          league: "Serie A",
        },
        {
          id: "7",
          homeTeam: "Ajax",
          awayTeam: "PSV",
          date: "21 Jun",
          time: "18:00",
          league: "Eredivisie",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
    const interval = setInterval(fetchMatches, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-white/95 backdrop-blur-sm text-slate-600 py-2 text-center rounded-lg mb-6 shadow-medium border max-w-[1580px] mx-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-brand-primary border-t-transparent"></div>
          <span className="text-sm font-medium">Loading fixtures...</span>
        </div>
      </div>
    )
  }

  if (matches.length === 0) return null

  return (
    <div className="relative overflow-hidden mb-0 max-w-[1580px] mx-auto">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-medium border border-white/50 overflow-hidden">
        {/* Scrolling content */}
        <div className="relative overflow-hidden h-12">
          <div className="ticker-track h-full flex items-center pl-32">
            {matches
              .concat(matches)
              .concat(matches)
              .map((match, index) => (
                <div
                  key={`${match.id}-${index}`}
                  className="flex-shrink-0 px-4 py-2 border-l border-slate-200 min-w-[280px] text-center whitespace-nowrap"
                >
                  <div className="font-semibold text-sm text-slate-800 mb-1">
                    {match.homeTeam} vs {match.awayTeam}
                  </div>
                  <div className="flex items-center justify-center gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {match.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {match.time}
                    </div>
                    <div className="text-brand-primary font-medium">{match.league}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Fixed label with Irish flag */}
        <div className="absolute left-0 top-0 bottom-0 bg-brand-primary text-white font-semibold px-4 py-2 text-sm rounded-r-lg z-10 flex items-center shadow-medium">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Irish Flag" width={20} height={20} className="w-5 h-5" />
            <div className="text-center leading-tight">
              <div className="text-xs font-bold">LIVE</div>
              <div className="text-xs">FIXTURES</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 100s linear infinite;
          width: max-content;
        }
        
        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
