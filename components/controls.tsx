"use client"

import { useState } from "react"

interface ControlState {
  movement: { x: number; y: number }
  rotation: number
  power: number
  mode: "manual" | "auto" | "diagnostic"
  speed: number
}

export default function Controls() {
  const [controlState, setControlState] = useState<ControlState>({
    movement: { x: 0, y: 0 },
    rotation: 0,
    power: 80,
    mode: "manual",
    speed: 60,
  })

  const [isActive, setIsActive] = useState(false)

  const handleJoystickMove = (direction: "up" | "down" | "left" | "right") => {
    const newMovement = { ...controlState.movement }
    const step = 10

    switch (direction) {
      case "up":
        newMovement.y = Math.max(-100, newMovement.y - step)
        break
      case "down":
        newMovement.y = Math.min(100, newMovement.y + step)
        break
      case "left":
        newMovement.x = Math.max(-100, newMovement.x - step)
        break
      case "right":
        newMovement.x = Math.min(100, newMovement.x + step)
        break
    }

    setControlState({ ...controlState, movement: newMovement })
  }

  const handleRotation = (angle: number) => {
    setControlState({
      ...controlState,
      rotation: (controlState.rotation + angle) % 360,
    })
  }

  const resetControls = () => {
    setControlState({
      movement: { x: 0, y: 0 },
      rotation: 0,
      power: 80,
      mode: "manual",
      speed: 60,
    })
  }

  return (
    <section id="controls" className="py-20 px-4 bg-primary/5 border-y border-primary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Robot Control System
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Joystick Control */}
          <div className="bg-card border border-primary/20 rounded-lg p-8 glow-neon">
            <h3 className="text-lg font-semibold text-primary mb-6">Movement Control</h3>

            {/* Joystick Visualization */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center relative">
                {/* Center circle */}
                <div
                  className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full cursor-move glow-neon flex items-center justify-center"
                  style={{
                    transform: `translate(${controlState.movement.x * 1.5}px, ${controlState.movement.y * 1.5}px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-0.5 h-full bg-primary/10"></div>
                  <div className="absolute h-0.5 w-full bg-primary/10"></div>
                </div>
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div></div>
              <button
                onClick={() => handleJoystickMove("up")}
                className="p-3 bg-primary/20 border border-primary/50 rounded-lg hover:bg-primary/30 text-foreground font-semibold transition-all"
              >
                ▲
              </button>
              <div></div>

              <button
                onClick={() => handleJoystickMove("left")}
                className="p-3 bg-primary/20 border border-primary/50 rounded-lg hover:bg-primary/30 text-foreground font-semibold transition-all"
              >
                ◄
              </button>
              <button
                onClick={resetControls}
                className="p-3 bg-accent/20 border border-accent/50 rounded-lg hover:bg-accent/30 text-foreground text-sm font-semibold transition-all"
              >
                RESET
              </button>
              <button
                onClick={() => handleJoystickMove("right")}
                className="p-3 bg-primary/20 border border-primary/50 rounded-lg hover:bg-primary/30 text-foreground font-semibold transition-all"
              >
                ►
              </button>

              <div></div>
              <button
                onClick={() => handleJoystickMove("down")}
                className="p-3 bg-primary/20 border border-primary/50 rounded-lg hover:bg-primary/30 text-foreground font-semibold transition-all"
              >
                ▼
              </button>
              <div></div>
            </div>

            {/* Position Display */}
            <div className="bg-background border border-primary/20 rounded-lg p-4 text-sm font-mono">
              <div className="flex justify-between text-primary mb-2">
                <span>X: {controlState.movement.x.toFixed(0)}</span>
                <span>Y: {controlState.movement.y.toFixed(0)}</span>
              </div>
              <div className="text-accent">Rotation: {controlState.rotation.toFixed(0)}°</div>
            </div>
          </div>

          {/* Right Panel - System Controls */}
          <div className="space-y-6">
            {/* Mode Selection */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 glow-neon">
              <h3 className="text-lg font-semibold text-primary mb-4">Operation Mode</h3>
              <div className="grid grid-cols-3 gap-3">
                {["manual", "auto", "diagnostic"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() =>
                      setControlState({
                        ...controlState,
                        mode: mode as ControlState["mode"],
                      })
                    }
                    className={`p-3 rounded-lg border font-semibold transition-all text-sm uppercase ${
                      controlState.mode === mode
                        ? "bg-primary/30 border-primary text-primary"
                        : "border-primary/20 text-foreground/70 hover:border-primary/50"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Power Management */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 glow-neon">
              <h3 className="text-lg font-semibold text-primary mb-4">Power Management</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/70">Output Level</span>
                    <span className="text-sm font-semibold text-primary">{controlState.power}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={controlState.power}
                    onChange={(e) =>
                      setControlState({
                        ...controlState,
                        power: Number.parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-primary/20 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground/70">Speed Control</span>
                    <span className="text-sm font-semibold text-accent">{controlState.speed} kph</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={controlState.speed}
                    onChange={(e) =>
                      setControlState({
                        ...controlState,
                        speed: Number.parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-accent/20 rounded-full appearance-none cursor-pointer accent-accent"
                  />
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 glow-neon">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary">System Status</h3>
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    isActive
                      ? "bg-red-500/20 border border-red-500 text-red-400"
                      : "bg-green-500/20 border border-green-500 text-green-400"
                  }`}
                >
                  {isActive ? "SHUTDOWN" : "ACTIVATE"}
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Status</span>
                  <span className={isActive ? "text-accent" : "text-muted-foreground"}>
                    {isActive ? "ONLINE" : "OFFLINE"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Connectivity</span>
                  <span className="text-primary">Strong</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Last Update</span>
                  <span className="text-primary">2.3s ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
