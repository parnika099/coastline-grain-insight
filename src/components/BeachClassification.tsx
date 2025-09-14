import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Waves, TreePine, CheckCircle } from "lucide-react";

export const BeachClassification = () => {
  const beachTypes = [
    {
      name: "Berm",
      icon: Mountain,
      active: false,
      description: "Upper beach ridge formation",
      confidence: 23,
    },
    {
      name: "Intertidal",
      icon: Waves,
      active: true,
      description: "Wave-influenced zone",
      confidence: 89,
    },
    {
      name: "Dune",
      icon: TreePine,
      active: false,
      description: "Wind-deposited sand hills",
      confidence: 12,
    },
  ];
  
  return (
    <Card className="bg-card border-accent/10 shadow-coastal">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl text-foreground flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-success animate-sand-shimmer" />
          Beach Type Classification
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {beachTypes.map((type, index) => {
          const IconComponent = type.icon;
          
          return (
            <div 
              key={type.name} 
              className={`p-4 rounded-lg border transition-all duration-300 ${
                type.active 
                  ? 'bg-accent/10 border-accent/30 shadow-foam' 
                  : 'bg-muted/30 border-border hover:bg-muted/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    type.active ? 'bg-accent/20' : 'bg-muted'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      type.active ? 'text-accent animate-wave-gentle' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      type.active ? 'text-accent' : 'text-foreground'
                    }`}>
                      {type.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
                
                {type.active && (
                  <Badge className="bg-success/10 text-success border-success/20">
                    Active
                  </Badge>
                )}
              </div>
              
              {/* Confidence meter */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className={`font-semibold ${
                    type.active ? 'text-accent' : 'text-muted-foreground'
                  }`}>
                    {type.confidence}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${
                      type.active 
                        ? 'bg-gradient-to-r from-accent to-seafoam-bright' 
                        : 'bg-muted-foreground/30'
                    }`}
                    style={{ width: `${type.confidence}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};