import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Target, Globe } from "lucide-react";

export default function OverviewSection() {
  return (
    <section id="overview" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-overview-title">
              Bridging the Generalization Gap in Medical AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-overview-description">
              Medical AI models often show a significant performance drop when deployed in clinical environments different from the dataset they were trained on. This "generalization gap" is a major barrier to equitable healthcare, particularly for disadvantaged institutions with older equipment or different patient demographics.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="hover-elevate" data-testid="card-problem">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-destructive" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A model trained on pristine data from state-of-the-art hospitals may fail when applied to 
                noisier images from rural clinics with older equipment. This creates significant disparities 
                in AI-assisted healthcare quality and accessibility.
              </p>
            </CardContent>
          </Card>

          {/* Solution Approach */}
          <Card className="hover-elevate" data-testid="card-solution">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-chart-3" />
                Our Solution
              </CardTitle>
            </CardHeader>
              <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We develop robust deep learning models for multi-label thoracic disease classification. Initially, we quantify the performance degradation of a standard AI model when transitioning from a high-quality, single-source dataset (MIMIC-CXR) to a more diverse, multisource dataset (ChestX-ray14). Then, we implement and validate a domain generalization strategy using advanced data augmentation and supervised contrastive learning to create domain-invariant features that generalize across diverse clinical environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="badge-architectures">ResNet-50 / EfficientNet-B0 / ViT-B/16</Badge>
                <Badge variant="secondary" data-testid="badge-augmentation">Data Augmentation</Badge>
                <Badge variant="secondary" data-testid="badge-contrastive">Contrastive Learning</Badge>
                <Badge variant="secondary" data-testid="badge-multilabel">Multi-label Classification</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Impact & SDGs */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-elevate" data-testid="card-impact">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Expected Impact
                </CardTitle>
                <CardDescription>Real-world benefits of our research</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• More equitable medical AI deployment</li>
                  <li>• Improved diagnostic reliability across institutions</li>
                  <li>• Reduced healthcare disparities</li>
                  <li>• Reproducible domain generalization methodology</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-sdgs">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-accent-foreground" />
                  UN Sustainable Development Goals
                </CardTitle>
                <CardDescription>Aligned with global sustainability objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>SDG 3:</strong> Good Health and Well-being</li>
                  <li>• <strong>SDG 10:</strong> Reduced Inequalities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}