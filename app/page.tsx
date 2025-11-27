import Header from "@/components/header"
import Hero from "@/components/hero"
import RobotShowcase from "@/components/robot-showcase"
import Controls from "@/components/controls"
import Features from "@/components/features"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RobotShowcase />
      <Controls />
      <Features />
      <Footer />
    </main>
  )
}
