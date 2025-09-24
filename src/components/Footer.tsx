const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DEXTER SENSE</h3>
                <p className="text-background/70 text-sm">Robot Training Innovation</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Advanced motion capture solutions for training the next generation of humanoid robots.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-background">Solutions</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Motion Capture</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Dataset Generation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Training Pipelines</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-background">Company</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-background">Connect</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Research Papers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 DEXTER SENSE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;