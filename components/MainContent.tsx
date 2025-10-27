'use client'

import { Clock, TrendingUp, Circle } from 'lucide-react'
import MatchCard from './MatchCard'
import { matches } from '@/data/matches'

interface MainContentProps {
  addBet: (bet: any) => void
  selectedBets: any[]
}

export default function MainContent({ addBet, selectedBets }: MainContentProps) {
  return (
    <main className="flex-1 p-4 lg:p-6 overflow-y-auto h-[calc(100vh-130px)]">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Welcome to Sportsbet</h2>
          <p className="text-lg mb-4">Bet on your favourite sports and get the best odds</p>
          <button className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
        <div className="absolute right-0 top-0 opacity-10 text-[200px]">⚽</div>
      </div>

      {/* Live Now Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Circle className="w-3 h-3 fill-red-500 text-red-500 animate-pulse" />
            <h3 className="text-xl font-bold">Live Now</h3>
            <span className="text-sm text-gray-400">(12 events)</span>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {matches.filter(m => m.isLive).map(match => (
            <MatchCard
              key={match.id}
              match={match}
              addBet={addBet}
              selectedBets={selectedBets}
            />
          ))}
        </div>
      </div>

      {/* Starting Soon */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold">Starting Soon</h3>
            <span className="text-sm text-gray-400">(24 events)</span>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {matches.filter(m => !m.isLive && m.category === 'starting-soon').map(match => (
            <MatchCard
              key={match.id}
              match={match}
              addBet={addBet}
              selectedBets={selectedBets}
            />
          ))}
        </div>
      </div>

      {/* Featured Events */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold">Featured Events</h3>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {matches.filter(m => m.category === 'featured').map(match => (
            <MatchCard
              key={match.id}
              match={match}
              addBet={addBet}
              selectedBets={selectedBets}
            />
          ))}
        </div>
      </div>

      {/* Upcoming Matches */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Upcoming Matches</h3>
          <a href="#" className="text-sm text-primary hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {matches.filter(m => m.category === 'upcoming').map(match => (
            <MatchCard
              key={match.id}
              match={match}
              addBet={addBet}
              selectedBets={selectedBets}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
