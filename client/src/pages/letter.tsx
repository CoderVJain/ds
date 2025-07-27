import { Link } from "wouter";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Letter() {
  return (
    <section className="page-section active">
      <div className="min-h-screen py-20 px-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold gradient-text mb-6">
              A Letter From My Heart
            </h2>
            <p className="font-dancing text-2xl text-purple-700">
              Words that my heart whispers to yours
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="letter-paper rounded-3xl p-12 md:p-16 royal-border relative">
              {/* Decorative corner elements */}
              <Heart className="absolute top-4 left-4 text-rose-400 w-6 h-6" />
              <Heart className="absolute top-4 right-4 text-rose-400 w-6 h-6" />
              <Heart className="absolute bottom-4 left-4 text-rose-400 w-6 h-6" />
              <Heart className="absolute bottom-4 right-4 text-rose-400 w-6 h-6" />

              <div className="text-center mb-8">
                <p className="font-dancing text-3xl text-purple-700">My Dearest Love,</p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p className="font-playfair text-xl font-medium text-purple-700 first-letter:text-6xl first-letter:font-bold first-letter:text-rose-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  In this digital age, where fleeting messages disappear like morning mist, I wanted to create something permanent, something beautiful, something that captures the essence of what you mean to me.
                </p>

                <p>
                  Every line of code in this website is written with love, every color chosen to reflect the warmth you bring to my life, every animation designed to mirror the way my heart dances when I see you smile.
                </p>

                <p>
                  You are my inspiration, my muse, my greatest adventure. In a world full of ordinary moments, you make everything extraordinary. Your laugh is my favorite melody, your eyes my favorite constellation, your love my greatest treasure.
                </p>

                <p>
                  This website is more than just pixels and code – it's a digital love letter, a virtual garden where our memories bloom, a sacred space where our love story lives forever. Each section holds a piece of my heart, each image a memory we've painted together.
                </p>

                <p className="font-playfair text-xl font-medium text-purple-700">
                  I promise to love you with the intensity of a thousand burning stars, to cherish you with the gentleness of morning dew, and to stand by you with the steadfastness of ancient mountains.
                </p>

                <p>
                  Thank you for being my everything. Thank you for loving me, for believing in us, for making every day feel like a fairytale. You are my forever and always, my once upon a time and happily ever after.
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="font-dancing text-3xl text-rose-600 mb-4">
                  Forever yours,
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <Heart className="text-rose-400 w-6 h-6" />
                  <p className="font-playfair text-2xl font-bold gradient-text">Your Devoted Love</p>
                  <Heart className="text-rose-400 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/">
              <Button className="bg-gradient-to-r from-rose-400 to-rose-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Back to Our Beginning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
