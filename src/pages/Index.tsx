import { HeroSection } from "@/components/HeroSection";
import { RealTimeData } from "@/components/RealTimeData";
import { BeachClassification } from "@/components/BeachClassification";
import { BeachInformation } from "@/components/BeachInformation";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoverTelemetry } from "@/components/RoverTelemetry";
import { SandUsesActivities } from "@/components/SandUsesActivities";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Rover Status First */}
        <div className="max-w-md mx-auto lg:max-w-none">
          <RoverTelemetry />
        </div>
        
        {/* Sand Analysis and Beach Classification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RealTimeData />
          <BeachClassification />
        </div>
        
        {/* Beach Information */}
        <BeachInformation />
        
        {/* Photo Gallery */}
        <PhotoGallery />
        
        {/* Sand Uses and Activities */}
        <SandUsesActivities />
      </main>
      
      {/* Chatbot */}
      <Chatbot />
      
      <Footer />
    </div>
  );
};

export default Index;