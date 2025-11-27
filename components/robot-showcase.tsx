"use client"

import { useState } from "react"

interface Robot {
  id: number
  name: string
  type: string
  status: "active" | "idle" | "charging"
  power: number
  efficiency: number
  icon: string
}

const robots: Robot[] = [
  {
    id: 1,
    name: "SENTINEL-X1",
    type: "Defense Unit",
    status: "active",
    power: 95,
    efficiency: 88,
    icon: "🤖",
  },
  {
    id: 2,
    name: "ATLAS-PRIME",
    type: "Heavy Lifter",
    status: "active",
    power: 87,
    efficiency: 92,
    icon: "🦾",
  },
  {
    id: 3,
    name: "NOVA-SCOUT",
    type: "Reconnaissance",
    status: "idle",
    power: 45,
    efficiency: 96,
    icon: "🚁",
  },
  {
    id: 4,
    name: "QUANTUM-CORE",
    type: "AI Command",
    status: "active",
    power: 100,
    efficiency: 99,
    icon: "💻",
  },
]

export default function RobotShowcase() {
  const [selectedRobot, setSelectedRobot] = useState(robots[0])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Fleet Systems
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Robot Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {robots.map((robot) => (
                <button
                  key={robot.id}
                  onClick={() => setSelectedRobot(robot)}
                  className={`p-6 rounded-lg border transition-all cursor-pointer ${
                    selectedRobot.id === robot.id
                      ? "bg-primary/20 border-primary glow-neon"
                      : "bg-card border-primary/20 hover:border-primary/50"
                  }`}
                >
                  <div className="text-5xl mb-2">{robot.icon}</div>
                  <h3 className="text-sm font-bold text-primary">{robot.name}</h3>
                  <p className="text-xs text-foreground/60">{robot.type}</p>
                  <div className="mt-3 pt-3 border-t border-primary/20">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        robot.status === "active"
                          ? "bg-green-500/20 text-accent"
                          : robot.status === "idle"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {robot.status.toUpperCase()}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-primary/20 rounded-lg p-6 glow-neon">
              <div className="mb-6">
                <div className="text-6xl mb-4">{selectedRobot.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-1">{selectedRobot.name}</h3>
                <p className="text-foreground/60">{selectedRobot.type}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/70">Power Output</span>
                    <span className="text-sm font-semibold text-primary">{selectedRobot.power}%</span>
                  </div>
                  <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${selectedRobot.power}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/70">Efficiency</span>
                    <span className="text-sm font-semibold text-accent">{selectedRobot.efficiency}%</span>
                  </div>
                  <div className="w-full bg-accent/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-secondary"
                      style={{ width: `${selectedRobot.efficiency}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-foreground/50 mb-3">SPECIFICATIONS</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">Response Time</span>
                      <span className="text-primary">12ms</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">AI Learning Rate</span>
                      <span className="text-primary">Real-time</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">Network Latency</span>
                      <span className="text-primary">&lt;50ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
