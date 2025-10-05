import { Button } from "@/components/ui/button";
import { 
  Github, 
  Mail, 
  Download, 
  ExternalLink,
  Waves
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-ocean text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Waves className="w-6 h-6 text-seafoam-light animate-wave-gentle" />
              <h3 className="text-xl font-bold">Coastal Analytics</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Advanced autonomous system for real-time beach sand grain analysis and 
              coastal monitoring. Contributing to marine sediment research and 
              environmental understanding.
            </p>
          </div>
          
          {/* Contact & Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-seafoam-light">Project Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80 hover:text-seafoam-light transition-colors">
                <Mail className="w-4 h-4" />
                <span>research@coastalanalytics.org</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80 hover:text-seafoam-light transition-colors">
                <Github className="w-4 h-4" />
                <span>github.com/coastal-analytics</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80 hover:text-seafoam-light transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>Marine Sciences Institute</span>
              </div>
            </div>
          </div>
          
          {/* Data Export */}
          <div className="space-y-4">
            <h4 className="font-semibold text-seafoam-light">Data Access</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Download collected data and analysis results for research purposes.
            </p>
            <div className="space-y-2">
              <Button 
                size="sm" 
                className="w-full bg-seafoam-bright hover:bg-seafoam-light text-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Dataset
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                API Documentation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <div>
            © 2024 Coastal Analytics Research Project. Open source under MIT License.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Marina Beach, Chennai</span>
            <span>•</span>
            <span>Coastal Research Initiative</span>
          </div>
        </div>
      </div>
      
      {/* Animated wave pattern */}
      <div className="h-2 bg-gradient-to-r from-seafoam-light via-primary-light to-accent opacity-60 animate-wave-flow" />
    </footer>
  );
};