import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, ZoomIn, Image } from "lucide-react";
import sandGrains1 from "@/assets/sand-grains-1.jpg";
import sandGrains2 from "@/assets/sand-grains-2.jpg";
import sandAnalysis from "@/assets/sand-analysis.jpg";

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    {
      src: sandGrains1,
      title: "Microscopic Sand Grains",
      description: "Diverse grain sizes and mineral compositions",
      magnification: "40x",
      timestamp: "2024-09-14 14:23:15"
    },
    {
      src: sandGrains2,
      title: "Fine Particle Analysis", 
      description: "Detailed texture and surface characteristics",
      magnification: "60x",
      timestamp: "2024-09-14 14:25:32"
    },
    {
      src: sandAnalysis,
      title: "Classification Results",
      description: "Segmented and categorized particles",
      magnification: "25x",
      timestamp: "2024-09-14 14:27:48"
    }
  ];
  
  return (
    <Card className="bg-card shadow-coastal">
      <CardHeader>
        <CardTitle className="text-xl text-foreground flex items-center gap-2">
          <Camera className="w-5 h-5 text-accent animate-sand-shimmer" />
          Sand Grain Gallery
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Main Image Display */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-border">
          <img 
            src={images[selectedImage].src}
            alt={images[selectedImage].title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-foreground">
                <div>
                  <h4 className="font-semibold">{images[selectedImage].title}</h4>
                  <p className="text-sm text-muted-foreground">{images[selectedImage].description}</p>
                </div>
                <div className="bg-background/90 p-2 rounded-full">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Metadata */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div className="text-muted-foreground">Magnification</div>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {images[selectedImage].magnification}
            </Badge>
          </div>
          <div className="space-y-1">
            <div className="text-muted-foreground">Captured</div>
            <div className="text-foreground font-mono text-xs">
              {images[selectedImage].timestamp}
            </div>
          </div>
        </div>
        
        {/* Thumbnail Gallery */}
        <div className="flex gap-3 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden rounded-md border-2 transition-all duration-300 ${
                selectedImage === index 
                  ? 'border-accent shadow-foam' 
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <img 
                src={image.src}
                alt={image.title}
                className="w-20 h-20 object-cover transition-transform duration-300 hover:scale-110"
              />
              {selectedImage === index && (
                <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                  <Image className="w-4 h-4 text-accent" />
                </div>
              )}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};