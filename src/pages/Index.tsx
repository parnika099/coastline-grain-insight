import { HeroSection } from "@/components/HeroSection";
import { RealTimeData } from "@/components/RealTimeData";
import { BeachClassification } from "@/components/BeachClassification";
import { BeachInformation } from "@/components/BeachInformation";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoverTelemetry } from "@/components/RoverTelemetry";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RealTimeData />
          <BeachClassification />
        </div>
        
        <BeachInformation />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <PhotoGallery />
          </div>
          <div>
            <RoverTelemetry />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;