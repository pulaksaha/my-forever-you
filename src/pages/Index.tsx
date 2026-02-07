import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import MemorySection from "@/components/MemorySection";
import ProposalSection from "@/components/ProposalSection";
import MusicPlayer from "@/components/MusicPlayer";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background animations */}
      <FloatingHearts />
      <Sparkles />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <LetterSection />
        <MemorySection />
        <ProposalSection />
        <FooterSection />
      </main>

      {/* Music player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
