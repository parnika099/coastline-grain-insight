import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gem, 
  Thermometer, 
  Wind, 
  Droplets, 
  Clock,
  TrendingUp,
  TrendingDown 
} from "lucide-react";

export const BeachInformation = () => {
  const mineralData = [
    { name: "Quartz", percentage: 68, color: "bg-primary" },
    { name: "Feldspar", percentage: 19, color: "bg-accent" },
    { name: "Mica", percentage: 8, color: "bg-warning" },
    { name: "Shell Fragments", percentage: 5, color: "bg-seafoam-bright" },
  ];
  
  const weatherData = [
    { label: "Temperature", value: "22°C", icon: Thermometer, trend: "up" },
    { label: "Wind Speed", value: "12 km/h", icon: Wind, trend: "down" },
    { label: "Humidity", value: "76%", icon: Droplets, trend: "up" },
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Mineral Composition */}
      <Card className="bg-card shadow-coastal">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Gem className="w-5 h-5 text-primary animate-sand-shimmer" />
            Mineral Composition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mineralData.map((mineral, index) => (
            <div key={mineral.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{mineral.name}</span>
                <Badge variant="outline" className="text-xs">
                  {mineral.percentage}%
                </Badge>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${mineral.color} rounded-full transition-all duration-1000 animate-tide-rise`}
                  style={{ 
                    width: `${mineral.percentage}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                />
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Texture Analysis:</strong> Well-sorted medium sand with moderate sphericity. 
              High quartz content indicates mature sediment transport.
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Weather & Environment */}
      <Card className="bg-card shadow-coastal">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent animate-wave-gentle" />
            Environmental Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {weatherData.map((item, index) => {
              const IconComponent = item.icon;
              const TrendIcon = item.trend === "up" ? TrendingUp : TrendingDown;
              
              return (
                <div key={item.label} className="text-center animate-float-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-muted/50 p-3 rounded-full w-fit mx-auto mb-2">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-lg font-bold text-foreground flex items-center justify-center gap-1">
                    {item.value}
                    <TrendIcon className={`w-3 h-3 ${
                      item.trend === "up" ? "text-success" : "text-warning"
                    }`} />
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              );
            })}
          </div>
          
          {/* Tide Information */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Droplets className="w-4 h-4 text-primary" />
              Tide Schedule
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-success">High Tide</div>
                <div className="text-muted-foreground">2:34 PM • +1.8m</div>
              </div>
              <div>
                <div className="font-medium text-warning">Low Tide</div>
                <div className="text-muted-foreground">8:12 PM • +0.3m</div>
              </div>
            </div>
            
            {/* Simple tide visualization */}
            <div className="mt-3 h-8 bg-muted/30 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-tide-rise" />
              <div className="absolute top-1 left-4 w-2 h-6 bg-primary rounded-full animate-wave-gentle" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};