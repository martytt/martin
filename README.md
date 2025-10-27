# Sportsbet Clone

A replica of the Sportsbet.com.au website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with dark theme
- Live betting interface with real-time updates
- Multiple sports categories (Football, Basketball, Tennis, Cricket, etc.)
- Interactive bet slip with single and multi bet options
- Odds calculation and potential payout display
- Sports categories sidebar with live event indicators
- Featured events and upcoming matches sections
- Mobile-friendly responsive layout

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI**: React 18

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Main navigation header
│   ├── Sidebar.tsx      # Sports categories sidebar
│   ├── MainContent.tsx  # Main content area
│   ├── MatchCard.tsx    # Individual match display
│   └── BetSlip.tsx      # Betting slip component
├── data/
│   └── matches.ts       # Mock match data
└── package.json
```

## Features Overview

### Header
- Logo and navigation
- Search functionality
- Login/Join buttons
- Quick access to live events, featured matches, and popular bets

### Sidebar
- Sports categories A-Z
- Live event indicators
- Quick links (My Bets, Favourites, Results, etc.)
- Promotional banners

### Main Content
- Live matches with real-time scores
- Starting soon events
- Featured matches
- Upcoming fixtures
- Interactive betting odds

### Bet Slip
- Single and multi bet support
- Stake input with payout calculation
- Multiple bet management
- Clear all functionality
- Odds multiplication for multi bets

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary: Green (#00A651)
- Accent: Yellow (#FDB913)
- Dark theme variants

### Match Data
Edit `data/matches.ts` to add or modify sports events, odds, and categories.

## License

This is a demonstration project created for educational purposes.
