import { Heart, Calendar, Plane, Star, ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Memory {
  icon: React.ReactNode;
  title: string;
  description: string;
  placeholder: string;
}

const memories: Memory[] = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "The Day We Met",
    description: "The universe had already planned this. One conversation, and I knew my life was about to change forever.",
    placeholder: "Add your special photo here",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Our Long Distance Journey",
    description: "Different cities, different time zones, same heartbeat. We turned 'far apart' into 'always together.'",
    placeholder: "Add your journey photo here",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "What I Love About You",
    description: "Your laugh, your kindness, your strength, the way you make everything feel like home. Everything.",
    placeholder: "Add your favorite photo here",
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
    <section ref={sectionRef} className="py-20 md:py-32 px-4 gradient-romantic">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-romantic text-4xl md:text-6xl text-gradient mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every moment with you is a memory I'll treasure forever
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              data-index={index}
              className={`memory-card bg-card rounded-2xl shadow-lg overflow-hidden border border-border/30 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Photo placeholder */}
              <div className="aspect-[4/3] bg-blush/50 flex flex-col items-center justify-center gap-3 border-b border-border/30">
                <ImageIcon className="w-12 h-12 text-rose/40" />
                <p className="text-sm text-muted-foreground text-center px-4">
                  {memory.placeholder}
                </p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blush rounded-lg text-primary">
                    {memory.icon}
                  </div>
                  <h3 className="font-romantic text-2xl text-foreground">
                    {memory.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {memory.description}
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-3 h-3 text-rose fill-rose"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemorySection;
