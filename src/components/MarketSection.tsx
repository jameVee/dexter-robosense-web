import { Card, CardContent } from "@/components/ui/card";

const MarketSection = () => {
  return (
    <section id="market" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Explosive <span className="text-primary">Market Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The humanoid robotics market is experiencing unprecedented growth, driven by advances in AI and increasing automation demand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 shadow-medium border-0 bg-gradient-to-br from-sky-light/10 to-primary/5 hover:shadow-strong transition-all">
            <CardContent className="p-0 text-center">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">2018</div>
                <div className="text-4xl font-bold text-foreground">$300M</div>
                <div className="text-sm text-muted-foreground">Market Foundation</div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-medium border-0 bg-gradient-to-br from-primary/10 to-sky-medium/10 hover:shadow-strong transition-all scale-105">
            <CardContent className="p-0 text-center">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">2024</div>
                <div className="text-4xl font-bold text-primary">$1.6B</div>
                <div className="text-sm text-muted-foreground">Current Market</div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-medium border-0 bg-gradient-to-br from-sky-medium/10 to-sky-dark/10 hover:shadow-strong transition-all">
            <CardContent className="p-0 text-center">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">2030</div>
                <div className="text-4xl font-bold text-foreground">$4.0B</div>
                <div className="text-sm text-muted-foreground">Projected Growth</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-foreground">Key Growth Drivers</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">33% Annual Growth Rate</h4>
                    <p className="text-muted-foreground">More than 2x faster than S&P 500 growth rate</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-medium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Patent Surge</h4>
                    <p className="text-muted-foreground">China leading with 16,000+ quality robotics patents</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sky-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Motion Capture Growth</h4>
                    <p className="text-muted-foreground">13.4% CAGR in 3D motion capture market</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h4 className="text-xl font-bold text-foreground mb-6">Market Analysis</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">AI/Software Readiness</span>
                  <span className="font-bold text-primary">2023 Ready</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Navigation Systems</span>
                  <span className="font-bold text-foreground">2022 Ready</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Manipulation Tech</span>
                  <span className="font-bold text-sky-medium">2023 Ready</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Data Demand Gap</span>
                  <span className="font-bold text-primary">5-6x Higher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;