import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 New Pools Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Maximize Your DeFi Yields
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stake your tokens in our high-yield farming pools and earn competitive rewards. Built on secure smart
            contracts with transparent, audited protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/pools">
                Start Farming <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/staking">View Staking</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.4B+</div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45%</div>
              <div className="text-muted-foreground">Average APY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">12K+</div>
              <div className="text-muted-foreground">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24</div>
              <div className="text-muted-foreground">Active Pools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Why Choose IntuFarm?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for DeFi natives who demand security, transparency, and maximum yields
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Audited Security</CardTitle>
                <CardDescription>
                  All smart contracts are audited by leading security firms and battle-tested in production
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">High Yields</CardTitle>
                <CardDescription>
                  Competitive APYs across multiple pools with auto-compounding rewards and optimized strategies
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Instant Rewards</CardTitle>
                <CardDescription>
                  Real-time reward distribution with no lock-up periods and flexible withdrawal options
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Pools Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold font-sans mb-2">Top Performing Pools</h2>
              <p className="text-muted-foreground">Highest yielding opportunities available now</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/pools">View All Pools</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-sans">ETH-USDC</CardTitle>
                    <CardDescription>Ethereum / USD Coin</CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary">Hot</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">APY</span>
                    <span className="font-bold text-primary">42.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">TVL</span>
                    <span className="font-semibold">$124.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your Stake</span>
                    <span className="font-semibold">$0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-sans">BTC-ETH</CardTitle>
                    <CardDescription>Bitcoin / Ethereum</CardDescription>
                  </div>
                  <Badge variant="secondary">Stable</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">APY</span>
                    <span className="font-bold text-primary">38.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">TVL</span>
                    <span className="font-semibold">$89.3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your Stake</span>
                    <span className="font-semibold">$0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-sans">USDC-USDT</CardTitle>
                    <CardDescription>Stablecoin Pair</CardDescription>
                  </div>
                  <Badge variant="outline">Low Risk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">APY</span>
                    <span className="font-bold text-primary">15.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">TVL</span>
                    <span className="font-semibold">$256.7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your Stake</span>
                    <span className="font-semibold">$0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">I</span>
                </div>
                <span className="text-xl font-bold font-sans">IntuFarm</span>
              </div>
              <p className="text-muted-foreground">
                The future of decentralized yield farming, built for maximum returns and security.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/pools" className="hover:text-primary transition-colors">
                    Pools
                  </Link>
                </li>
                <li>
                  <Link href="/staking" className="hover:text-primary transition-colors">
                    Staking
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/docs" className="hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-primary transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/audits" className="hover:text-primary transition-colors">
                    Audits
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/discord" className="hover:text-primary transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="/twitter" className="hover:text-primary transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/telegram" className="hover:text-primary transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="/github" className="hover:text-primary transition-colors">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 IntuFarm. All rights reserved. Built on Ethereum.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
