import { Link } from "wouter";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="page-section active romantic-bg">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 animate-pulse">
            Forever & Always
          </h1>
          <p className="font-dancing text-2xl md:text-4xl mb-8 opacity-90">
            A love story written in the stars
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <Heart className="text-rose-400 w-8 h-8 animate-bounce" />
              <span className="font-playfair text-xl">Made with endless love</span>
              <Heart className="text-rose-400 w-8 h-8 animate-bounce" />
            </div>
            
            <Link href="/gallery">
              <Button className="bg-gradient-to-r from-rose-600 to-rose-400 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Our Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
