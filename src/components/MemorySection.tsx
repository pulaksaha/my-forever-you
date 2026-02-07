import { Heart, Sparkles, MapPin, Home, ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Memory {
  icon: React.ReactNode;
  title: string;
  description: string;
  placeholder: string;
}

const memories: Memory[] = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "When You Became Important",
    description: "I can't pinpoint the exact moment. It just happened — slowly, then all at once. You weren't just someone I talked to anymore.",
    placeholder: "Our first photo together",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Miles Apart, Still Together",
    description: "Different cities, different skies. But every goodnight text felt like you were right here. The distance never stood a chance.",
    placeholder: "A memory from the distance",
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Why Pallabi Feels Like Home",
    description: "Home isn't a place anymore. It's your voice at 2 AM, your laugh, the way you say my name. It's just… you.",
    placeholder: "Your favorite photo of us",
  },
];

const MemorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(memories.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll(".memory-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-4 gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-romantic text-3xl md:text-5xl text-gradient mb-3">
            Our Little Moments
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            The ones I hold closest to my heart
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {memories.map((memory, index) => (
            <div
              key={index}
              data-index={index}
              className={`memory-card bg-card rounded-xl shadow-md overflow-hidden border border-border/20 transition-all duration-700 hover:shadow-lg ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Photo placeholder */}
              <div className="aspect-square bg-blush/30 flex flex-col items-center justify-center gap-2 border-b border-border/20">
                <ImageIcon className="w-10 h-10 text-rose/30" />
                <p className="text-xs text-muted-foreground text-center px-4">
                  {memory.placeholder}
                </p>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-blush/50 rounded-md text-primary">
                    {memory.icon}
                  </div>
                  <h3 className="font-romantic text-xl text-foreground">
                    {memory.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
