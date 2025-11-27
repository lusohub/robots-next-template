export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "AI-Powered",
      description: "Advanced neural networks enabling real-time decision making and autonomous operation",
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Seamless communication across satellite network with sub-50ms latency",
    },
    {
      icon: "🛡️",
      title: "Military Grade",
      description: "Enterprise-level security with quantum encryption and failsafe protocols",
    },
    {
      icon: "⚙️",
      title: "Adaptive Learning",
      description: "Self-optimizing algorithms that improve performance with every mission",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Comprehensive telemetry and performance metrics with predictive maintenance",
    },
    {
      icon: "🔄",
      title: "Modular Design",
      description: "Plug-and-play components for customization and future upgrades",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Advanced Features
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-primary/20 rounded-lg p-6 glow-neon hover:border-primary/50 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:animate-float">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
