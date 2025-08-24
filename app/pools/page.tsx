import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Filter, TrendingUp, TrendingDown, Minus } from "lucide-react"
import Link from "next/link"

const pools = [
  {
    id: 1,
    name: "ETH-USDC",
    description: "Ethereum / USD Coin",
    apy: 42.5,
    tvl: "$124.5M",
    yourStake: "$0",
    risk: "Medium",
    status: "Hot",
    change24h: 2.3,
  },
  {
    id: 2,
    name: "BTC-ETH",
    description: "Bitcoin / Ethereum",
    apy: 38.2,
    tvl: "$89.3M",
    yourStake: "$0",
    risk: "Medium",
    status: "Stable",
    change24h: -0.8,
  },
  {
    id: 3,
    name: "USDC-USDT",
    description: "Stablecoin Pair",
    apy: 15.8,
    tvl: "$256.7M",
    yourStake: "$0",
    risk: "Low",
    status: "Low Risk",
    change24h: 0.1,
  },
  {
    id: 4,
    name: "LINK-ETH",
    description: "Chainlink / Ethereum",
    apy: 55.7,
    tvl: "$45.2M",
    yourStake: "$0",
    risk: "High",
    status: "New",
    change24h: 5.2,
  },
  {
    id: 5,
    name: "UNI-ETH",
    description: "Uniswap / Ethereum",
    apy: 48.9,
    tvl: "$67.8M",
    yourStake: "$0",
    risk: "Medium",
    status: "Popular",
    change24h: 1.7,
  },
  {
    id: 6,
    name: "AAVE-USDC",
    description: "Aave / USD Coin",
    apy: 33.4,
    tvl: "$78.9M",
    yourStake: "$0",
    risk: "Medium",
    status: "Stable",
    change24h: -1.2,
  },
]

export default function PoolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">I</span>
                </div>
                <span className="text-xl font-bold font-sans">IntuFarm</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/pools" className="text-foreground hover:text-primary transition-colors">
                Pools
              </Link>
              <Link href="/staking" className="text-muted-foreground hover:text-primary transition-colors">
                Staking
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Connect Wallet</Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-sans mb-2">Liquidity Pools</h1>
              <p className="text-muted-foreground">Stake your tokens and earn rewards from our high-yield pools</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Total Value Locked</div>
                <div className="text-2xl font-bold text-primary">$2.4B</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search pools..." className="pl-10 bg-input border-border" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="grid w-full md:w-auto grid-cols-4 bg-muted">
                <TabsTrigger value="all">All Pools</TabsTrigger>
                <TabsTrigger value="stable">Stable</TabsTrigger>
                <TabsTrigger value="volatile">Volatile</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pools Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pools.map((pool) => (
              <Card
                key={pool.id}
                className="bg-card border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-sans text-lg">{pool.name}</CardTitle>
                      <CardDescription className="text-sm">{pool.description}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={pool.status === "Hot" ? "default" : pool.status === "New" ? "secondary" : "outline"}
                        className={pool.status === "Hot" ? "bg-primary/10 text-primary" : ""}
                      >
                        {pool.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs">
                        {pool.change24h > 0 ? (
                          <TrendingUp className="h-3 w-3 text-primary" />
                        ) : pool.change24h < 0 ? (
                          <TrendingDown className="h-3 w-3 text-destructive" />
                        ) : (
                          <Minus className="h-3 w-3 text-muted-foreground" />
                        )}
                        <span
                          className={
                            pool.change24h > 0
                              ? "text-primary"
                              : pool.change24h < 0
                                ? "text-destructive"
                                : "text-muted-foreground"
                          }
                        >
                          {pool.change24h > 0 ? "+" : ""}
                          {pool.change24h}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">APY</span>
                      <span className="font-bold text-lg text-primary">{pool.apy}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">TVL</span>
                      <span className="font-semibold">{pool.tvl}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Risk Level</span>
                      <Badge
                        variant="outline"
                        className={
                          pool.risk === "Low"
                            ? "border-primary/50 text-primary"
                            : pool.risk === "Medium"
                              ? "border-yellow-500/50 text-yellow-500"
                              : "border-destructive/50 text-destructive"
                        }
                      >
                        {pool.risk}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Your Stake</span>
                      <span className="font-semibold">{pool.yourStake}</span>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90">Stake Tokens</Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        Add Liquidity
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold font-sans mb-8 text-center">Pool Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">24</div>
                <div className="text-sm text-muted-foreground">Active Pools</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">$2.4B</div>
                <div className="text-sm text-muted-foreground">Total Liquidity</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">45.2%</div>
                <div className="text-sm text-muted-foreground">Average APY</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">12.3K</div>
                <div className="text-sm text-muted-foreground">Active Stakers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold font-sans">IntuFarm</span>
          </div>
          <p className="text-muted-foreground">&copy; 2024 IntuFarm. All rights reserved. Built on Ethereum.</p>
        </div>
      </footer>
    </div>
  )
}
