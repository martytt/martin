'use client'

import { Search, User, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-dark-lighter border-b border-dark-light sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Menu className="w-6 h-6 text-primary md:hidden cursor-pointer" />
              <h1 className="text-2xl font-bold text-primary">Sportsbet</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-sm font-medium hover:text-primary transition">Sports</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition">Racing</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition">Promos</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition">Live Streaming</a>
            </nav>
          </div>

          {/* Search and Account */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-dark-light rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search sports, teams..."
                className="bg-transparent text-sm outline-none w-48"
              />
            </div>
            <button className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-lg font-medium text-sm transition">
              Join Now
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-medium text-sm transition flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Log In</span>
            </button>
          </div>
        </div>

        {/* Quick Links Bar */}
        <div className="mt-3 flex items-center space-x-4 overflow-x-auto pb-2">
          <button className="px-4 py-1.5 bg-primary rounded-full text-sm font-medium whitespace-nowrap">
            Live Now
          </button>
          <button className="px-4 py-1.5 bg-dark-light hover:bg-dark rounded-full text-sm font-medium whitespace-nowrap">
            Featured
          </button>
          <button className="px-4 py-1.5 bg-dark-light hover:bg-dark rounded-full text-sm font-medium whitespace-nowrap">
            Starting Soon
          </button>
          <button className="px-4 py-1.5 bg-dark-light hover:bg-dark rounded-full text-sm font-medium whitespace-nowrap">
            Popular
          </button>
          <button className="px-4 py-1.5 bg-dark-light hover:bg-dark rounded-full text-sm font-medium whitespace-nowrap">
            Multi Builder
          </button>
        </div>
      </div>
    </header>
  )
}
