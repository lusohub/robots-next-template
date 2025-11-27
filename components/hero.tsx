"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []

    // Create stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(8, 8, 8, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        star.opacity += Math.random() * 0.02 - 0.01
        star.opacity = Math.max(0, Math.min(1, star.opacity))
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-3xl animate-float">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              NEXUS ROBOTICS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70">
            Advanced autonomous systems powered by artificial intelligence and cutting-edge engineering
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-foreground font-semibold glow-neon hover:shadow-2xl transition-all">
              Explore Fleet
            </button>
            <button className="px-8 py-3 border border-primary/50 rounded-lg text-foreground font-semibold hover:bg-primary/10 transition-all">
              Documentation
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-glow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
