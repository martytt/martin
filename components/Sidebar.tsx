'use client'

import { ChevronRight, Circle } from 'lucide-react'

const sports = [
  { name: 'Football', count: 245, icon: '⚽', live: 12 },
  { name: 'Basketball', count: 89, icon: '🏀', live: 8 },
  { name: 'Tennis', count: 156, icon: '🎾', live: 24 },
  { name: 'Cricket', count: 34, icon: '🏏', live: 5 },
  { name: 'Rugby League', count: 45, icon: '🏉', live: 3 },
  { name: 'Rugby Union', count: 28, icon: '🏉', live: 2 },
  { name: 'American Football', count: 67, icon: '🏈', live: 4 },
  { name: 'Ice Hockey', count: 52, icon: '🏒', live: 6 },
  { name: 'Baseball', count: 78, icon: '⚾', live: 15 },
  { name: 'Golf', count: 23, icon: '⛳', live: 1 },
  { name: 'Motor Racing', count: 12, icon: '🏎️', live: 0 },
  { name: 'Boxing/MMA', count: 18, icon: '🥊', live: 0 },
]

const quickLinks = [
  'My Bets',
  'Favourites',
  'Live Streaming',
  'Results',
  'Statistics',
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-dark-lighter border-r border-dark-light h-[calc(100vh-130px)] overflow-y-auto">
      <div className="p-4">
        {/* Quick Links */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Quick Links</h3>
          <div className="space-y-1">
            {quickLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-dark-light transition text-sm"
              >
                <span>{link}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Sports Categories */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Sports A-Z</h3>
          <div className="space-y-1">
            {sports.map((sport) => (
              <a
                key={sport.name}
                href="#"
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-dark-light transition group"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{sport.icon}</span>
                  <div>
                    <div className="text-sm font-medium">{sport.name}</div>
                    <div className="text-xs text-gray-400">{sport.count} markets</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {sport.live > 0 && (
                    <div className="flex items-center space-x-1 bg-red-600 px-2 py-0.5 rounded-full">
                      <Circle className="w-2 h-2 fill-white" />
                      <span className="text-xs font-medium">{sport.live}</span>
                    </div>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary to-primary-dark rounded-lg">
          <h4 className="font-bold text-sm mb-1">New Customer Offer</h4>
          <p className="text-xs mb-3">Bet $10, Get $50 in Bonus Bets</p>
          <button className="w-full bg-white text-primary font-medium text-sm py-2 rounded-lg hover:bg-gray-100 transition">
            Claim Now
          </button>
        </div>
      </div>
    </aside>
  )
}
