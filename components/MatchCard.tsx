'use client'

import { Clock, Circle, TrendingUp } from 'lucide-react'

interface Match {
  id: string
  sport: string
  league: string
  homeTeam: string
  awayTeam: string
  time: string
  isLive: boolean
  liveScore?: string
  odds: {
    home: number
    draw?: number
    away: number
  }
  category: string
  popular?: boolean
}

interface MatchCardProps {
  match: Match
  addBet: (bet: any) => void
  selectedBets: any[]
}

export default function MatchCard({ match, addBet, selectedBets }: MatchCardProps) {
  const isBetSelected = (betId: string) => {
    return selectedBets.some(bet => bet.id === betId)
  }

  const createBet = (team: string, odds: number, type: string) => ({
    id: `${match.id}-${type}`,
    matchId: match.id,
    sport: match.sport,
    league: match.league,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    selection: team,
    odds: odds,
    type: type,
  })

  return (
    <div className="bg-dark-lighter rounded-lg border border-dark-light hover:border-primary/30 transition overflow-hidden">
      {/* Match Header */}
      <div className="p-4 border-b border-dark-light">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-gray-400">{match.sport}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-400">{match.league}</span>
          </div>
          <div className="flex items-center space-x-2">
            {match.popular && (
              <div className="flex items-center space-x-1 bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                <TrendingUp className="w-3 h-3" />
                <span className="text-xs font-medium">Popular</span>
              </div>
            )}
            {match.isLive ? (
              <div className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded-full">
                <Circle className="w-2 h-2 fill-white animate-pulse" />
                <span className="text-xs font-bold">LIVE</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-xs">{match.time}</span>
              </div>
            )}
          </div>
        </div>

        {/* Teams */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-medium">{match.homeTeam}</span>
            {match.liveScore && <span className="text-primary font-bold text-lg">{match.liveScore.split('-')[0]}</span>}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">{match.awayTeam}</span>
            {match.liveScore && <span className="text-primary font-bold text-lg">{match.liveScore.split('-')[1]}</span>}
          </div>
        </div>
      </div>

      {/* Betting Options */}
      <div className="p-4">
        <div className="text-xs text-gray-400 mb-2">Match Winner</div>
        <div className={`grid ${match.odds.draw ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
          <button
            onClick={() => addBet(createBet(match.homeTeam, match.odds.home, 'home'))}
            className={`p-3 rounded-lg border transition ${
              isBetSelected(`${match.id}-home`)
                ? 'bg-primary border-primary text-white'
                : 'bg-dark-light border-dark hover:border-primary/50'
            }`}
          >
            <div className="text-xs text-gray-400 mb-1">Home</div>
            <div className="font-bold text-lg">{match.odds.home.toFixed(2)}</div>
          </button>

          {match.odds.draw && (
            <button
              onClick={() => addBet(createBet('Draw', match.odds.draw!, 'draw'))}
              className={`p-3 rounded-lg border transition ${
                isBetSelected(`${match.id}-draw`)
                  ? 'bg-primary border-primary text-white'
                  : 'bg-dark-light border-dark hover:border-primary/50'
              }`}
            >
              <div className="text-xs text-gray-400 mb-1">Draw</div>
              <div className="font-bold text-lg">{match.odds.draw.toFixed(2)}</div>
            </button>
          )}

          <button
            onClick={() => addBet(createBet(match.awayTeam, match.odds.away, 'away'))}
            className={`p-3 rounded-lg border transition ${
              isBetSelected(`${match.id}-away`)
                ? 'bg-primary border-primary text-white'
                : 'bg-dark-light border-dark hover:border-primary/50'
            }`}
          >
            <div className="text-xs text-gray-400 mb-1">Away</div>
            <div className="font-bold text-lg">{match.odds.away.toFixed(2)}</div>
          </button>
        </div>

        <button className="w-full mt-3 py-2 text-sm text-primary hover:text-primary-light font-medium">
          +{Math.floor(Math.random() * 150 + 50)} more markets
        </button>
      </div>
    </div>
  )
}
