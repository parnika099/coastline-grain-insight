import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Waves, Zap } from "lucide-react";

export const RealTimeData = () => {
  // Mock real-time data
  const fineGrainPercentage = 67;
  const coarseGrainPercentage = 33;
  
  return (
    <Card className="bg-card border-primary/10 shadow-coastal">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-foreground flex items-center gap-2">
            <Waves className="w-6 h-6 text-primary animate-wave-gentle" />
            Sand Grain Analysis
          </CardTitle>
          <Badge className="bg-success/10 text-success border-success/20">
            <Zap className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Fine Sand */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Fine Sand (0.1-0.25mm)</span>
            <span className="text-sm font-bold text-primary">{fineGrainPercentage}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-light to-primary rounded-full transition-all duration-1000 animate-tide-rise"
              style={{ width: `${fineGrainPercentage}%` }}
            />
          </div>
        </div>
        
        {/* Coarse Sand */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Coarse Sand (0.25-2.0mm)</span>
            <span className="text-sm font-bold text-accent">{coarseGrainPercentage}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-seafoam-bright rounded-full transition-all duration-1000"
              style={{ width: `${coarseGrainPercentage}%` }}
            />
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2.4k</div>
            <div className="text-xs text-muted-foreground">Particles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">0.18</div>
            <div className="text-xs text-muted-foreground">Avg Size (mm)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +5.2%
            </div>
            <div className="text-xs text-muted-foreground">24h Change</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};