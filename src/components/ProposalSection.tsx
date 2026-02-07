import { Heart, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const ProposalSection = () => {
  const [answered, setAnswered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAnswer = () => {
    setAnswered(true);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Heart className="w-20 h-20 text-rose fill-rose" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Heart className="w-16 h-16 text-rose fill-rose" />
      </div>

      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {!answered ? (
          <>
            <div className="mb-8">
              <Sparkles className="w-10 h-10 text-accent mx-auto mb-4 animate-pulse-soft" />
              <h2 className="font-romantic text-4xl md:text-6xl lg:text-7xl text-gradient leading-tight mb-6">
                Will you be my forever, even across all distances?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
                Through every timezone, every mile, every moment apart...
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Button
                onClick={handleAnswer}
                className="group relative px-10 py-6 text-xl font-romantic bg-primary hover:bg-deep-rose text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  YES
                  <Heart className="w-5 h-5 fill-current group-hover:animate-heart-beat" />
                </span>
              </Button>

              <Button
                onClick={handleAnswer}
                variant="outline"
                className="group px-10 py-6 text-xl font-romantic border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  ALWAYS YOU
                  <span className="text-lg">💍</span>
                </span>
              </Button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up">
            <div className="mb-6">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="inline-block w-8 h-8 mx-1 text-rose fill-rose animate-heart-beat"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            
            <h2 className="font-romantic text-5xl md:text-7xl text-gradient mb-6">
              I knew it 🥹❤️
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
              You just made me the happiest person in the world. 
              Even from miles away, my heart is doing a happy dance!
            </p>

            <div className="mt-10">
              <p className="font-romantic text-3xl text-primary animate-pulse-soft">
                Forever yours, across every distance 💕
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProposalSection;
