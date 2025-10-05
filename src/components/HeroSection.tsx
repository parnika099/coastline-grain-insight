import { MapPin, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/beach-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-ocean opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-float-up">
        <Badge className="mb-4 bg-seafoam-bright/20 text-seafoam-bright border-seafoam-bright/30 animate-wave-gentle">
          <Activity className="w-4 h-4 mr-2" />
          Live Data Collection
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Coastal Sand Analysis
          <span className="block text-3xl md:text-4xl font-light text-seafoam-light mt-2">
            Real-time Beach Monitoring
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Advanced autonomous system for beach sand grain size estimation and classification. 
          Monitoring coastal dynamics through precision analysis of sediment composition and distribution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-seafoam-bright hover:bg-seafoam-light text-foreground px-8 py-3 text-lg font-semibold shadow-foam">
            View Live Data
          </Button>
          
          <div className="flex items-center text-primary-foreground/80 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Marina Beach, Chennai • 13.0524°N, 80.2825°E</span>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-seafoam-light/40 rounded-full animate-wave-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};