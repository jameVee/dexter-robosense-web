import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import videoSGProcessed from "@/assets/video_SG_processed.mp4";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-gradient-to-br from-muted/30 to-sky-light/10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Advanced Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge motion capture technology that generates high-quality, synchronized datasets for humanoid robot training at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-95"></div>
            <video 
              src={videoSGProcessed}
              autoPlay
              loop
              muted
              className="relative rounded-3xl shadow-strong w-full h-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">Motion Capture Excellence</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our proprietary motion capture system creates comprehensive datasets that bridge the gap between human demonstration and robot learning, enabling more efficient and accurate humanoid robot training.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Synchronized hand and scene data collection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sky-medium rounded-full"></div>
                <span className="text-foreground">Real-time motion tracking and analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-sky-dark rounded-full"></div>
                <span className="text-foreground">Scalable dataset generation pipeline</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">AI-optimized training data format</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 shadow-medium border-0 bg-background hover:shadow-strong transition-all">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <h4 className="text-xl font-bold text-foreground">Data Quality</h4>
                <p className="text-muted-foreground">
                  High-resolution, synchronized motion capture data that exceeds industry standards for robot training applications.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-medium border-0 bg-background hover:shadow-strong transition-all">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-sky-medium/10 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-sky-medium rounded-lg"></div>
                </div>
                <h4 className="text-xl font-bold text-foreground">Scalability</h4>
                <p className="text-muted-foreground">
                  Automated pipeline capable of generating datasets at the scale required by modern humanoid robotics companies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-medium border-0 bg-background hover:shadow-strong transition-all">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-sky-dark/10 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-sky-dark rounded-lg"></div>
                </div>
                <h4 className="text-xl font-bold text-foreground">Integration</h4>
                <p className="text-muted-foreground">
                  Seamless integration with existing robot training pipelines and popular machine learning frameworks.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-background rounded-3xl p-12 shadow-medium">
          <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Transform Robot Training?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the leading robotics companies that trust DEXTER SENSE for their humanoid robot training data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-medium">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;