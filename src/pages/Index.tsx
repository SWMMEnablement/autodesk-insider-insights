import { Hero } from "@/components/Hero";
import { AuthorSection } from "@/components/AuthorSection";
import { ReasonsSection } from "@/components/ReasonsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AuthorSection />
      <ReasonsSection />
    </div>
  );
};

export default Index;
