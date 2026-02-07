import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 gradient-hero">
      <div className="text-center max-w-4xl mx-auto z-10 animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary animate-heart-beat" />
        </div>
        
        <h1 className="font-romantic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient mb-6 leading-tight">
          Even miles apart, my heart chose you.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Distance is just a test to see how far love can travel. 
          And ours? It crosses every ocean, every time zone, every mile.
        </p>
        
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-4 h-4 text-rose fill-rose animate-float-heart"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
