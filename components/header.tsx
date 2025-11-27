"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-neon">
              <span className="text-sm font-bold text-foreground">⚙️</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              NEXUS ROBOTICS
            </span>
          </Link>

          <nav className="hidden md:flex gap-8">
            {["Systems", "Controls", "Technology", "Fleet"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-foreground text-sm font-semibold glow-neon hover:shadow-xl transition-all">
            Launch Control
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
