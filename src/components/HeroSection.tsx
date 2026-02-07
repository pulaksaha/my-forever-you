import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 gradient-hero">
      <div className="text-center max-w-4xl mx-auto z-10 animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary animate-heart-beat" />
        </div>
        
        <h1 className="font-romantic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient mb-6 leading-tight">
          <span className="text-deep-rose">Pallabi</span>, even with miles between us…
          <br />
          my heart chose you.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
          Distance tested us, but love held us together.
        </p>
        
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="w-3 h-3 text-rose fill-rose animate-float-heart"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce opacity-50">
        <div className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary/40 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
