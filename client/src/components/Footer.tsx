import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Globe, Zap, Users2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-muted/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* UN SDGs Section */}
          <Card className="p-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold" data-testid="text-sdgs-title">
                Contributing to UN Sustainable Development Goals
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2" data-testid="sdg-3">
                  <div className="w-12 h-12 rounded-full bg-chart-3/20 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-chart-3" />
                  </div>
                  <Badge variant="outline">SDG 3</Badge>
                  <p className="text-xs text-center text-muted-foreground">
                    Good Health & Well-being
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2" data-testid="sdg-9">
                  <div className="w-12 h-12 rounded-full bg-chart-4/20 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-chart-4" />
                  </div>
                  <Badge variant="outline">SDG 9</Badge>
                  <p className="text-xs text-center text-muted-foreground">
                    Innovation & Infrastructure
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2" data-testid="sdg-10">
                  <div className="w-12 h-12 rounded-full bg-chart-5/20 flex items-center justify-center">
                    <Users2 className="h-6 w-6 text-chart-5" />
                  </div>
                  <Badge variant="outline">SDG 10</Badge>
                  <p className="text-xs text-center text-muted-foreground">
                    Reduced Inequalities
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2" data-testid="sdg-17">
                  <div className="w-12 h-12 rounded-full bg-chart-1/20 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-chart-1" />
                  </div>
                  <Badge variant="outline">SDG 17</Badge>
                  <p className="text-xs text-center text-muted-foreground">
                    Partnerships for Goals
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Separator />

          {/* Project Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3" data-testid="text-project-info">Project Information</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CSCI 461 - AI for Sustainable Development</li>
                <li>Professor Bistra Dilkina</li>
                <li>University of Southern California</li>
                <li>Fall 2025</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3" data-testid="text-research-focus">Research Focus</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Domain Generalization</li>
                <li>Medical AI Robustness</li>
                <li>Contrastive Learning</li>
                <li>Healthcare Equity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3" data-testid="text-datasets">Datasets Used</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>MIMIC-CXR (MIT)</li>
                <li>ChestX-ray14 (NIH)</li>
                <li>14-Label Classification</li>
                <li>Multi-source Validation</li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary" data-testid="text-footer-logo">AI4SD</span>
              <span>•</span>
              <span>Robust Domain-Generalizable AI for Chest X-Ray Disease Classification</span>
            </div>
            <div className="text-center md:text-right">
              <p data-testid="text-copyright">
                © {currentYear} AI4SD Research Team. Academic research project for sustainable healthcare AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}