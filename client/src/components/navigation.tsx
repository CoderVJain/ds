import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Heart, Menu } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="font-dancing text-2xl font-bold gradient-text cursor-pointer">
              My Dearest Love
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-purple-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-purple-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Gallery
            </Link>
            <Link href="/letter" className="text-purple-700 hover:text-rose-600 transition-colors duration-300 font-medium">
              Letter
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-purple-700"
            >
              {isMobileMenuOpen ? <Menu className="w-6 h-6" /> : <Heart className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
