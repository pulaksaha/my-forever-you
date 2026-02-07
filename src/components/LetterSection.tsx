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
              Our story was never perfect. We were together once, in those early days 
              when life felt simple and everything felt possible. Then life took me away, 
              and slowly we both accepted that maybe this was the end of us. No hope, 
              no expectations—<span className="italic text-muted-foreground">bas ek silence jo time ke saath normal lagne laga.</span>
            </p>
            
            <p>
              For a long time, you were just a quiet memory. Not something that hurt 
              every day, but something I carried with me. <span className="italic text-muted-foreground">Kabhi kabhi yaad aa jaati thi, bina wajah, bina shor ke.</span>
            </p>
            
            <p>
              And then life surprised us. We found our way back to each other—not 
              because we planned it, but because some people are never really gone. 
              Meeting you again didn't feel new. It felt right. <span className="italic text-muted-foreground">Jaise kuch adhoora tha jo finally complete hua.</span>
            </p>
            
            <p>
              We're not the same people anymore, but the comfort is the same. The 
              connection is the same. And now I know—some stories don't end. They 
              just pause, and wait for the right moment to begin again.
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
            <p className="font-romantic text-xl text-primary mb-1">
              With all my heart
            </p>
            <p className="font-romantic text-lg text-deep-rose">
              yours truly, pulak
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
