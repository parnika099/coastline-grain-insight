import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Volleyball, 
  Building2, 
  Waves, 
  Footprints,
  Sparkles,
  Shell,
  Palmtree
} from "lucide-react";

export const SandUsesActivities = () => {
  const sandUses = [
    {
      icon: Building2,
      title: "Construction Material",
      description: "Fine to medium sand is ideal for concrete mixing and construction purposes.",
      suitability: "Excellent",
    },
    {
      icon: Sparkles,
      title: "Glass Manufacturing",
      description: "High quartz content (68%) makes this sand suitable for glass production.",
      suitability: "Very Good",
    },
    {
      icon: Footprints,
      title: "Beach Nourishment",
      description: "Perfect grain size for beach restoration and erosion control projects.",
      suitability: "Excellent",
    },
  ];

  const activities = [
    {
      icon: Volleyball,
      title: "Beach Volleyball",
      description: "Well-sorted fine sand provides excellent cushioning and ball response.",
      condition: "Optimal",
    },
    {
      icon: Shell,
      title: "Sandcastle Building",
      description: "Good compaction properties with 76% humidity make it perfect for sculpting.",
      condition: "Perfect",
    },
    {
      icon: Waves,
      title: "Beach Walking & Jogging",
      description: "Firm intertidal zone sand offers stable surface for exercise.",
      condition: "Excellent",
    },
    {
      icon: Palmtree,
      title: "Beach Camping",
      description: "Stable sand composition and good drainage make it suitable for camping.",
      condition: "Good",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sand Uses */}
      <Card className="bg-card shadow-coastal">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-warning animate-sand-shimmer" />
            Sand Usage Applications
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Based on Chennai beach sand composition and grain size analysis
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {sandUses.map((use, index) => {
            const IconComponent = use.icon;
            
            return (
              <div
                key={use.title}
                className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-warning/10">
                    <IconComponent className="w-5 h-5 text-warning" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{use.title}</h4>
                      <Badge 
                        className={`text-xs ${
                          use.suitability === "Excellent" 
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-primary/10 text-primary border-primary/20"
                        }`}
                      >
                        {use.suitability}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{use.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Recommended Activities */}
      <Card className="bg-card shadow-coastal">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Palmtree className="w-5 h-5 text-accent animate-wave-gentle" />
            Recommended Beach Activities
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Activities suited for current sand and weather conditions
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            
            return (
              <div
                key={activity.title}
                className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{activity.title}</h4>
                      <Badge 
                        className={`text-xs ${
                          activity.condition === "Perfect" || activity.condition === "Optimal"
                            ? "bg-success/10 text-success border-success/20"
                            : activity.condition === "Excellent"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-accent/10 text-accent border-accent/20"
                        }`}
                      >
                        {activity.condition}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
