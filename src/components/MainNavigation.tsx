import { Home, BookOpen, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from './ThemeToggle';
import notifyerLogo from '@/assets/notifyer-logo.png';

export const MainNavigation = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold text-foreground">
                Notifyer
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <Link to="/">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="gap-2 font-medium"
                  data-active={location.pathname === "/"}
                >
                  <Home size={18} />
                  Home
                </Button>
              </Link>
              <Link to="/beginners-guide">
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="gap-2 font-medium hover:bg-accent"
                  data-active={location.pathname === "/beginners-guide"}
                >
                  <BookOpen size={18} />
                  Getting Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="https://app.notifyer.me" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="gap-2">
                <LogIn size={18} />
                Login
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
