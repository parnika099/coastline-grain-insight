import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  Battery, 
  MapPin, 
  Route, 
  Signal,
  Gauge,
  Clock
} from "lucide-react";

export const RoverTelemetry = () => {
  const telemetryData = {
    battery: 87,
    signal: 92,
    distance: 2.4,
    speed: 0.8,
    coordinates: { lat: 13.0524, lng: 80.2825 },
    uptime: "14:32:18",
    status: "Collecting Data"
  };
  
  return (
    <Card className="bg-card shadow-coastal h-fit">
      <CardHeader>
        <CardTitle className="text-xl text-foreground flex items-center gap-2">
          <Bot className="w-5 h-5 text-seafoam-bright animate-wave-gentle" />
          Kurma Rover Status
        </CardTitle>
        <Badge className="w-fit bg-success/10 text-success border-success/20">
          <Signal className="w-3 h-3 mr-1" />
          {telemetryData.status}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Battery & Signal */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Battery className="w-4 h-4 text-success" />
                Battery Level
              </div>
              <span className="text-sm font-bold text-success">{telemetryData.battery}%</span>
            </div>
            <Progress value={telemetryData.battery} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Signal className="w-4 h-4 text-primary" />
                Signal Strength
              </div>
              <span className="text-sm font-bold text-primary">{telemetryData.signal}%</span>
            </div>
            <Progress value={telemetryData.signal} className="h-2" />
          </div>
        </div>
        
        {/* Navigation Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="text-center animate-float-up">
            <div className="bg-muted/50 p-2 rounded-full w-fit mx-auto mb-2">
              <Route className="w-4 h-4 text-accent" />
            </div>
            <div className="text-lg font-bold text-foreground">{telemetryData.distance}km</div>
            <div className="text-xs text-muted-foreground">Distance</div>
          </div>
          
          <div className="text-center animate-float-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-muted/50 p-2 rounded-full w-fit mx-auto mb-2">
              <Gauge className="w-4 h-4 text-warning" />
            </div>
            <div className="text-lg font-bold text-foreground">{telemetryData.speed} m/s</div>
            <div className="text-xs text-muted-foreground">Speed</div>
          </div>
        </div>
        
        {/* Location & Time */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              GPS Coordinates
            </div>
          </div>
          <div className="bg-muted/30 p-2 rounded text-xs font-mono text-foreground">
            {telemetryData.coordinates.lat}°N, {telemetryData.coordinates.lng}°E
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              System Uptime
            </div>
            <div className="font-mono text-foreground">{telemetryData.uptime}</div>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center gap-2 p-3 bg-success/5 rounded-lg border border-success/10">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-success font-medium">All systems operational</span>
        </div>
      </CardContent>
    </Card>
  );
};