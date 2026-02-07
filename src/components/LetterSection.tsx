import { Heart, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LetterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-cream relative"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border/50 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Quote className="absolute top-4 left-4 w-8 h-8 text-rose/30" />
          <Quote className="absolute bottom-4 right-4 w-8 h-8 text-rose/30 rotate-180" />
          
          <div className="text-center mb-8">
            <h2 className="font-romantic text-3xl md:text-5xl text-primary mb-2">
              My Dearest Love
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart key={i} className="w-4 h-4 text-rose fill-rose" />
              ))}
            </div>
          </div>
          
          <div className="space-y-6 text-foreground leading-relaxed text-base md:text-lg">
            <p>
              There are so many things I wish I could say to you in person, 
              but since the distance keeps us apart, let these words travel 
              across the miles to reach your heart...
            </p>
            
            <p>
              Every night when I look at the sky, I know somewhere, you're 
              looking at the same moon. That thought alone makes the wait 
              bearable. <span className="italic text-muted-foreground">Kitni doori hai, phir bhi dil kitna paas.</span>
            </p>
            
            <p>
              I miss the little things — your laugh during our late-night calls, 
              the way you say "goodnight" when it's already morning for you, 
              and how we count down to every "see you soon."
            </p>
            
            <p>
              Time zones taught us patience. Distance taught us trust. 
              And love? Love taught us that being apart doesn't mean being away.
            </p>
            
            <p>
              Every day I choose you. Through the silence of missed calls, 
              through the ache of empty arms, through every "I wish you were here" — 
              <span className="font-semibold text-primary"> I choose you</span>.
            </p>
            
            <p className="text-center italic text-muted-foreground">
              "Tere bina adhoora hoon, par tere saath... I'm home."
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <p className="font-romantic text-2xl text-deep-rose">
              With all my love, forever and always
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
