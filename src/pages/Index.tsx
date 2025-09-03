import { Hero } from "@/components/Hero";
import { AuthorSection } from "@/components/AuthorSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { SoftwareSection } from "@/components/SoftwareSection";
import { PersonalReasonsSection } from "@/components/PersonalReasonsSection";
import { ResourcesSection } from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AuthorSection />
      <ReasonsSection />
      <SoftwareSection />
      <PersonalReasonsSection />
      <ResourcesSection />
    </div>
  );
};

export default Index;
