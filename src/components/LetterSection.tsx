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
      className="py-20 md:py-28 px-4 bg-cream relative"
    >
      <div className="max-w-2xl mx-auto">
        <div
          className={`bg-card rounded-2xl shadow-lg p-8 md:p-10 border border-border/30 relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Quote className="absolute top-4 left-4 w-6 h-6 text-rose/20" />
          
          <div className="text-center mb-8">
            <h2 className="font-romantic text-3xl md:text-4xl text-primary mb-2">
              Dear <span className="text-deep-rose">Pallabi</span>,
            </h2>
            <div className="flex justify-center gap-1">
              <Heart className="w-3 h-3 text-rose fill-rose" />
            </div>
          </div>
          
          <div className="space-y-5 text-foreground leading-relaxed text-base md:text-lg">
            <p>
              I don't really know how to start this. Maybe because every word 
              feels small when I try to describe what you mean to me.
            </p>
            
            <p>
              I miss you — not in the loud, dramatic way, but in the quiet 
              moments. When I'm eating alone, when I see something funny, 
              when the night gets too silent. <span className="italic text-muted-foreground">Tum yaad aati ho, har chhoti si cheez mein.</span>
            </p>
            
            <p>
              Our late-night calls, fighting over who'll hang up first, 
              counting days to the next time we meet — it's not easy. 
              But with you, I've learned that love isn't about being close. 
              It's about choosing to stay, even when it's hard.
            </p>
            
            <p>
              And I choose you. Every single day. Through the waiting, the 
              missing, the timezone math — I choose you, Pallabi.
            </p>
            
            <p className="text-center italic text-muted-foreground pt-2">
              "Tumse door hoon, par tumse juda nahi."
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-romantic text-xl text-primary">
              With all my heart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
