import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-20 md:py-32 px-4 gradient-romantic relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(7)].map((_, i) => (
              <Heart
                key={i}
                className={`text-rose fill-rose animate-float-heart ${
                  i % 2 === 0 ? "w-4 h-4" : "w-3 h-3"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          
          <h2 className="font-romantic text-3xl md:text-5xl lg:text-6xl text-gradient mb-6 leading-tight">
            Distance made us stronger,
            <br />
            and love made us unstoppable.
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground text-lg md:text-xl italic">
            "Until I can hold your hand in person, I'll hold you in my heart."
          </p>
          
          <div className="pt-8">
            <p className="font-romantic text-2xl md:text-3xl text-primary">
              Yours, always.
            </p>
            <Heart className="w-6 h-6 text-rose fill-rose mx-auto mt-4 animate-heart-beat" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rose/20">
          <p className="text-sm text-muted-foreground">
            Made with{" "}
            <Heart className="inline w-4 h-4 text-rose fill-rose" /> for the one who has my heart
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Happy Propose Day 💕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
