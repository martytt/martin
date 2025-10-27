'use client'

import { useState } from 'react'
import { X, Trash2 } from 'lucide-react'

interface Bet {
  id: string
  matchId: string
  sport: string
  league: string
  homeTeam: string
  awayTeam: string
  selection: string
  odds: number
  type: string
}

interface BetSlipProps {
  bets: Bet[]
  removeBet: (betId: string) => void
  clearBets: () => void
}

export default function BetSlip({ bets, removeBet, clearBets }: BetSlipProps) {
  const [stake, setStake] = useState<{ [key: string]: number }>({})
  const [betType, setBetType] = useState<'single' | 'multi'>('single')

  const updateStake = (betId: string, value: number) => {
    setStake({ ...stake, [betId]: value })
  }

  const calculatePayout = (betOdds: number, betStake: number) => {
    return (betOdds * betStake).toFixed(2)
  }

  const calculateMultiOdds = () => {
    return bets.reduce((total, bet) => total * bet.odds, 1).toFixed(2)
  }

  const calculateMultiPayout = () => {
    const multiStake = stake['multi'] || 0
    return (parseFloat(calculateMultiOdds()) * multiStake).toFixed(2)
  }

  const getTotalStake = () => {
    if (betType === 'multi') {
      return stake['multi'] || 0
    }
    return Object.values(stake).reduce((sum, val) => sum + val, 0)
  }

  const getTotalPayout = () => {
    if (betType === 'multi') {
      return calculateMultiPayout()
    }
    return bets.reduce((sum, bet) => {
      const betStake = stake[bet.id] || 0
      return sum + parseFloat(calculatePayout(bet.odds, betStake))
    }, 0).toFixed(2)
  }

  return (
    <aside className="w-full md:w-80 lg:w-96 bg-dark-lighter border-l border-dark-light h-[calc(100vh-130px)] overflow-y-auto">
      <div className="sticky top-0 bg-dark-lighter z-10 border-b border-dark-light">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Bet Slip</h3>
            {bets.length > 0 && (
              <button
                onClick={clearBets}
                className="text-sm text-red-500 hover:text-red-400 flex items-center space-x-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>

          {bets.length > 0 && (
            <div className="flex rounded-lg overflow-hidden bg-dark-light">
              <button
                onClick={() => setBetType('single')}
                className={`flex-1 py-2 text-sm font-medium transition ${
                  betType === 'single' ? 'bg-primary text-white' : 'text-gray-400'
                }`}
              >
                Single
              </button>
              <button
                onClick={() => setBetType('multi')}
                className={`flex-1 py-2 text-sm font-medium transition ${
                  betType === 'multi' ? 'bg-primary text-white' : 'text-gray-400'
                }`}
                disabled={bets.length < 2}
              >
                Multi {bets.length > 1 && `(${bets.length})`}
              </button>
            </div>
          )}
        </div>
      </div>

      {bets.length === 0 ? (
        <div className="p-8 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-gray-400 mb-2">Your bet slip is empty</p>
          <p className="text-sm text-gray-500">Select odds to add bets</p>
        </div>
      ) : (
        <div className="p-4">
          {betType === 'single' ? (
            <div className="space-y-3">
              {bets.map((bet) => (
                <div key={bet.id} className="bg-dark-light rounded-lg p-3 border border-dark">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-xs text-gray-400 mb-1">{bet.league}</div>
                      <div className="text-sm font-medium mb-1">
                        {bet.homeTeam} vs {bet.awayTeam}
                      </div>
                      <div className="text-xs text-primary">
                        {bet.selection} @ {bet.odds.toFixed(2)}
                      </div>
                    </div>
                    <button
                      onClick={() => removeBet(bet.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Stake ($)</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={stake[bet.id] || ''}
                        onChange={(e) => updateStake(bet.id, parseFloat(e.target.value) || 0)}
                        className="w-full bg-dark border border-dark-light rounded px-3 py-2 text-sm outline-none focus:border-primary"
                      />
                    </div>
                    {stake[bet.id] > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Potential Payout:</span>
                        <span className="font-bold text-primary">
                          ${calculatePayout(bet.odds, stake[bet.id])}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="bg-dark-light rounded-lg p-3 border border-dark mb-3">
                <div className="text-sm font-medium mb-2">Multi Bet</div>
                <div className="space-y-2">
                  {bets.map((bet) => (
                    <div key={bet.id} className="flex items-start justify-between text-xs">
                      <div className="flex-1">
                        <div className="text-gray-400">{bet.homeTeam} vs {bet.awayTeam}</div>
                        <div className="text-primary">{bet.selection} @ {bet.odds.toFixed(2)}</div>
                      </div>
                      <button
                        onClick={() => removeBet(bet.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-dark-light rounded-lg p-3 border border-dark">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Total Odds:</span>
                  <span className="text-lg font-bold text-primary">{calculateMultiOdds()}</span>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Stake ($)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={stake['multi'] || ''}
                    onChange={(e) => updateStake('multi', parseFloat(e.target.value) || 0)}
                    className="w-full bg-dark border border-dark-light rounded px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {getTotalStake() > 0 && (
            <div className="mt-4 bg-dark-light rounded-lg p-4 border border-dark">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Total Stake:</span>
                <span className="font-medium">${getTotalStake().toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Potential Payout:</span>
                <span className="font-bold text-lg text-primary">${getTotalPayout()}</span>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition">
                Place Bet
              </button>
            </div>
          )}
        </div>
      )}
    </aside>
  )
}
