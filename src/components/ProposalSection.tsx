import { Heart } from "lucide-react";
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
      className="py-20 md:py-28 px-4 bg-cream relative overflow-hidden"
    >
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {!answered ? (
          <>
            <div className="mb-10">
              <Heart className="w-8 h-8 text-rose fill-rose mx-auto mb-6 animate-pulse-soft" />
              <h2 className="font-romantic text-3xl md:text-5xl text-gradient leading-tight mb-4">
                <span className="text-deep-rose">Pallabi</span>, will you walk this long road with me…
              </h2>
              <p className="font-romantic text-2xl md:text-3xl text-primary">
                today and always?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleAnswer}
                className="group px-8 py-5 text-lg font-romantic bg-primary hover:bg-deep-rose text-primary-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  YES
                  <Heart className="w-4 h-4 fill-current" />
                </span>
              </Button>

              <Button
                onClick={handleAnswer}
                variant="outline"
                className="group px-8 py-5 text-lg font-romantic border-2 border-primary/60 text-primary hover:bg-primary/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                ALWAYS YOU 🤍
              </Button>
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <Heart className="w-10 h-10 text-rose fill-rose mx-auto animate-heart-beat" />
            </div>
            
            <h2 className="font-romantic text-4xl md:text-5xl text-gradient mb-4">
              I already knew the answer…
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              it was always you.
            </p>

            <div className="mt-8">
              <p className="font-romantic text-2xl text-primary">
                Thank you, <span className="text-deep-rose">Pallabi</span> 💕
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProposalSection;
