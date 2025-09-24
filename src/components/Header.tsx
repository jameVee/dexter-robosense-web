import { Button } from "@/components/ui/button";
import dsLogo from "@/assets/ds-logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={dsLogo} alt="DEXTER SENSE Logo" className="h-12 w-auto" />
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