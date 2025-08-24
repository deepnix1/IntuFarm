import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lock, Unlock, TrendingUp, Shield, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function StakingPage() {
  const stakingPools = [
    {
      id: 1,
      name: "FARM Token Staking",
      token: "FARM",
      apy: "24.5%",
      tvl: "$45.2M",
      lockPeriod: "No Lock",
      minStake: "1 FARM",
      userStaked: "0 FARM",
      pendingRewards: "0 FARM",
      status: "active",
    },
    {
      id: 2,
      name: "Locked FARM Staking",
      token: "FARM",
      apy: "45.8%",
      tvl: "$28.7M",
      lockPeriod: "30 Days",
      minStake: "10 FARM",
      userStaked: "0 FARM",
      pendingRewards: "0 FARM",
      status: "active",
    },
    {
      id: 3,
      name: "Long-term FARM Staking",
      token: "FARM",
      apy: "78.2%",
      tvl: "$15.9M",
      lockPeriod: "90 Days",
      minStake: "50 FARM",
      userStaked: "0 FARM",
      pendingRewards: "0 FARM",
      status: "active",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4">FARM Staking</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Stake FARM tokens to earn rewards and participate in governance
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">$89.8M</div>
                <div className="text-sm text-muted-foreground">Total Staked</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">42.8%</div>
                <div className="text-sm text-muted-foreground">Average APY</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">8,450</div>
                <div className="text-sm text-muted-foreground">Total Stakers</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">0 FARM</div>
                <div className="text-sm text-muted-foreground">Your Staked</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FARM Token Info */}
        <Card className="bg-card border-border mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">F</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-sans">FARM Token</h3>
                  <p className="text-muted-foreground">IntuFarm Governance Token</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Price</div>
                  <div className="text-lg font-semibold">$12.45</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Market Cap</div>
                  <div className="text-lg font-semibold">$124.5M</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Circulating</div>
                  <div className="text-lg font-semibold">10M FARM</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Your Balance</div>
                  <div className="text-lg font-semibold">0 FARM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staking Pools */}
        <Tabs defaultValue="stake" className="space-y-6">
          <TabsList className="grid w-full md:w-[300px] grid-cols-2">
            <TabsTrigger value="stake">Stake</TabsTrigger>
            <TabsTrigger value="unstake">Unstake</TabsTrigger>
          </TabsList>

          <TabsContent value="stake" className="space-y-6">
            <div className="grid gap-6">
              {stakingPools.map((pool) => (
                <Card key={pool.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      {/* Pool Info */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          {pool.lockPeriod === "No Lock" ? (
                            <Unlock className="h-6 w-6 text-primary" />
                          ) : (
                            <Lock className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold font-sans">{pool.name}</h3>
                          <p className="text-muted-foreground">{pool.token} Token</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge
                            className={
                              pool.lockPeriod === "No Lock"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-yellow-500/10 text-yellow-500"
                            }
                          >
                            {pool.lockPeriod}
                          </Badge>
                        </div>
                      </div>

                      {/* Pool Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">APY</div>
                          <div className="text-lg font-bold text-primary">{pool.apy}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">TVL</div>
                          <div className="text-lg font-semibold">{pool.tvl}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Min Stake</div>
                          <div className="text-lg font-semibold">{pool.minStake}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Your Stake</div>
                          <div className="text-lg font-semibold">{pool.userStaked}</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button className="bg-primary hover:bg-primary/90">Stake</Button>
                        <Button variant="outline">Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unstake" className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Unlock className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No Active Stakes</h3>
                <p className="text-muted-foreground mb-4">
                  You don't have any active stakes to unstake. Start staking to earn rewards.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Start Staking</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Benefits Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold font-sans mb-6">Staking Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Earn Rewards</CardTitle>
                <CardDescription>Earn FARM tokens as rewards for staking and supporting the network</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Governance Rights</CardTitle>
                <CardDescription>Participate in protocol governance and vote on important proposals</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-sans">Fee Sharing</CardTitle>
                <CardDescription>Receive a share of protocol fees generated from farming activities</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
