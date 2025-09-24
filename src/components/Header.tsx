import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">DEXTER</h1>
              <p className="text-sm text-primary font-medium -mt-1">SENSE</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-foreground hover:text-primary transition-colors">
              The Problem
            </a>
            <a href="#market" className="text-foreground hover:text-primary transition-colors">
              Market
            </a>
            <a href="#solution" className="text-foreground hover:text-primary transition-colors">
              Our Solution
            </a>
            <Button variant="default" className="shadow-medium">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;