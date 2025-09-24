import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-background via-accent/20 to-sky-light/30 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Training</span>{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Humanoid Robots
                </span>{" "}
                <span className="text-foreground">to Move</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We create advanced datasets for training humanoid robots through cutting-edge motion capture technology. 
                We don't manufacture robots — we teach them how to move like humans.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-strong hover:shadow-medium transition-all">
                Explore Our Technology
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5-6x</div>
                <div className="text-sm text-muted-foreground">Demand vs Supply Gap</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$1.6B</div>
                <div className="text-sm text-muted-foreground">Market Size 2024</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">33%</div>
                <div className="text-sm text-muted-foreground">Annual Growth Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-hero-gradient rounded-3xl blur-2xl opacity-20 scale-95"></div>
            <img 
              src={heroRobot} 
              alt="Advanced humanoid robot with dexterous hands in laboratory setting"
              className="relative rounded-3xl shadow-strong w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;