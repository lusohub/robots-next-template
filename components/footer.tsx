export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-primary mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="hover:text-primary transition-colors cursor-pointer">Combat Units</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Industrial Robots</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Explorers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-accent mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="hover:text-accent transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-accent transition-colors cursor-pointer">API Reference</li>
              <li className="hover:text-accent transition-colors cursor-pointer">SDK</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="hover:text-secondary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>support@nexus.tech</li>
              <li>+1 (555) 123-4567</li>
              <li>24/7 Command Center</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">© 2025 Nexus Robotics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
