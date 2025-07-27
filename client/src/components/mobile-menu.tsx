import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <div className="text-2xl font-dancing text-purple-700 cursor-pointer">Home</div>
        </Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)}>
          <div className="text-2xl font-dancing text-purple-700 cursor-pointer">Gallery</div>
        </Link>
        <Link href="/letter" onClick={() => setIsOpen(false)}>
          <div className="text-2xl font-dancing text-purple-700 cursor-pointer">Letter</div>
        </Link>
      </div>
    </div>
  );
}
