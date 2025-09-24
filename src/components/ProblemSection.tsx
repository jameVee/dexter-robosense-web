import { Card, CardContent } from "@/components/ui/card";
import dataVisualization from "@/assets/data-visualization.jpg";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            The Critical <span className="text-primary">Data Bottleneck</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Humanoid robotics faces a fundamental challenge: the lack of high-quality, synchronized datasets for training robot manipulation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-8 shadow-medium border-0 bg-background">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Imitation Learning Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Training robots through imitation learning requires synchronized "hand + scene" data collection, 
                    which is complex, time-consuming, and extremely expensive to produce at scale.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-medium border-0 bg-background">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-sky-medium/10 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-sky-medium rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Industry Reality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Toyota Research Institute spent 12 months collecting just 350 hours of data with 50 operators 
                    across 564 scenes. The demand for quality datasets is 5-6 times higher than current availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-sky-gradient rounded-3xl blur-2xl opacity-20 scale-95"></div>
            <img 
              src={dataVisualization} 
              alt="Motion capture data visualization showing robotic hand movements"
              className="relative rounded-3xl shadow-strong w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground italic max-w-4xl mx-auto leading-relaxed">
            "There are two things that will unlock general purpose humanoid robots: humanlike, dexterous hands 
            and an AI control system which can manipulate them..."
          </blockquote>
          <cite className="text-primary font-medium text-lg mt-4 block">
            Ben Reed, Chief Marketing Officer, Sanctuary AI
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;