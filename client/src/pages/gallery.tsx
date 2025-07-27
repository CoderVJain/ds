import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Garden Dreams",
    subtitle: "Where our love bloomed"
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Golden Hour",
    subtitle: "Our favorite time"
  },
  {
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Dancing Hearts",
    subtitle: "Moving to love's rhythm"
  },
  {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Ocean Dreams",
    subtitle: "Endless as our love"
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "City Romance",
    subtitle: "Love in every corner"
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Eternal Bond",
    subtitle: "Together forever"
  }
];

export default function Gallery() {
  return (
    <section className="page-section active">
      <div className="min-h-screen py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold gradient-text mb-6">
              Our Beautiful Memories
            </h2>
            <p className="font-dancing text-2xl text-purple-700 max-w-2xl mx-auto">
              Every moment with you is a treasure, every memory a masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item relative group cursor-pointer rounded-2xl overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-playfair text-xl font-semibold">{image.title}</h3>
                    <p className="font-dancing text-lg">{image.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/letter">
              <Button className="bg-gradient-to-r from-purple-700 to-rose-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Read My Letter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
