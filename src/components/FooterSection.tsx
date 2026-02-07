import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-20 md:py-28 px-4 gradient-romantic relative">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className="w-3 h-3 text-rose fill-rose animate-float-heart"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          
          <h2 className="font-romantic text-2xl md:text-4xl text-gradient mb-4 leading-relaxed">
            Distance didn't weaken us.
            <br />
            It taught me how deeply I love you.
          </h2>
        </div>

        <div className="space-y-3">
          <p className="text-muted-foreground text-lg">
            Happy Propose Day, <span className="font-romantic text-primary">Pallabi</span>.
          </p>
          
          <div className="pt-6">
            <p className="font-romantic text-xl md:text-2xl text-primary">
              — Yours, always.
            </p>
            <Heart className="w-4 h-4 text-rose fill-rose mx-auto mt-3 animate-pulse-soft" />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rose/10">
          <p className="text-xs text-muted-foreground/50">
            Made with love, just for you 💕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
