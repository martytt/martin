'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'
import BetSlip from '@/components/BetSlip'

export default function Home() {
  const [selectedBets, setSelectedBets] = useState<any[]>([])

  const addBet = (bet: any) => {
    const existingBet = selectedBets.find(b => b.id === bet.id)
    if (existingBet) {
      setSelectedBets(selectedBets.filter(b => b.id !== bet.id))
    } else {
      setSelectedBets([...selectedBets, bet])
    }
  }

  const removeBet = (betId: string) => {
    setSelectedBets(selectedBets.filter(b => b.id !== betId))
  }

  const clearBets = () => {
    setSelectedBets([])
  }

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent addBet={addBet} selectedBets={selectedBets} />
        <BetSlip
          bets={selectedBets}
          removeBet={removeBet}
          clearBets={clearBets}
        />
      </div>
    </div>
  )
}
