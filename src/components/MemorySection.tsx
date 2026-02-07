import { Heart, Sparkles, MapPin, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

interface Memory {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const memories: Memory[] = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "When You Became Important",
    description: "I can't pinpoint the exact moment. It just happened — slowly, then all at once. You weren't just someone I talked to anymore.",
    image: memory1,
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "The Light You Carry",
    description: "Your love feels soft. Your positivity lifts everything around you. And your smile— it quietly makes my world better.",
    image: memory2,
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "What Never Left",
    description: "Time passed. Life changed. But something between us never faded. It waited. And when we met again, I knew— it was always there.",
    image: memory3,
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
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
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
