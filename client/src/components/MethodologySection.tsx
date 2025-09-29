import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Brain, TrendingUp, Eye } from "lucide-react";
import { useState } from "react";
import contrastiveLearningImage from "@assets/generated_images/Contrastive_learning_diagram_263d44e3.png";

export default function MethodologySection() {
  const [selectedPhase, setSelectedPhase] = useState<1 | 2>(1);

  const handlePhaseClick = (phase: 1 | 2) => {
    setSelectedPhase(phase);
    console.log(`Selected phase ${phase}`);
  };

  return (
    <section id="methodology" className="py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-methodology-title">
              Two-Phase Research Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-methodology-description">
              Our systematic approach quantifies the generalization gap and implements domain-invariant solutions
            </p>
          </div>

          {/* Phase Selection */}
          <div className="flex justify-center gap-4">
            <Button
              variant={selectedPhase === 1 ? "default" : "outline"}
              onClick={() => handlePhaseClick(1)}
              className="flex items-center gap-2"
              data-testid="button-phase-1"
            >
              <Database className="h-4 w-4" />
              Phase 1: Baseline & Problem Quantification
            </Button>
            <Button
              variant={selectedPhase === 2 ? "default" : "outline"}
              onClick={() => handlePhaseClick(2)}
              className="flex items-center gap-2"
              data-testid="button-phase-2"
            >
              <Brain className="h-4 w-4" />
              Phase 2: Domain Generalization
            </Button>
          </div>

          {/* Phase 1 Content */}
          {selectedPhase === 1 && (
            <div className="space-y-8 animate-in fade-in-50 duration-300" data-testid="content-phase-1">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-chart-1" />
                      Datasets
                    </CardTitle>
                    <CardDescription>Two complementary datasets for robust evaluation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Source Domain</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>MIMIC-CXR:</strong> High-quality, single-source dataset from U.S. medical center. 
                        Used for training and internal validation.
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Target Domain</Badge>
                      <p className="text-sm text-muted-foreground">
                        <strong>ChestX-ray14 (NIH):</strong> Heterogeneous, multi-source dataset representing 
                        real-world deployment scenarios. Used for final testing.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-chart-2" />
                      Model Architecture
                    </CardTitle>
                    <CardDescription>Proven CNN architecture for medical imaging</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>DenseNet-121</Badge>
                      <Badge>14-Label Classification</Badge>
                      <Badge>Transfer Learning</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Training on MIMIC-CXR for thoracic disease classification including 
                      Pneumonia, Cardiomegaly, and 12 other conditions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-chart-3" />
                    Expected Baseline Results
                  </CardTitle>
                  <CardDescription>Quantifying the generalization gap</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We hypothesize a significant performance drop (AUC score) when the baseline model 
                    transitions from MIMIC-CXR test set to ChestX-ray14 test set, demonstrating the 
                    critical need for domain generalization techniques.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Success Metric:</strong> Establishing baseline performance gap as foundation 
                      for measuring improvement in Phase 2
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Phase 2 Content */}
          {selectedPhase === 2 && (
            <div className="space-y-8 animate-in fade-in-50 duration-300" data-testid="content-phase-2">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-chart-4" />
                      Advanced Data Augmentation
                    </CardTitle>
                    <CardDescription>Simulating real-world imaging variations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Badge variant="outline">Brightness & Contrast Adjustment</Badge>
                      <Badge variant="outline">Gaussian Noise Addition</Badge>
                      <Badge variant="outline">Low-Resolution Simulation</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Heavy augmentation techniques force the model to learn pathological features 
                      rather than superficial image characteristics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-chart-5" />
                      Supervised Contrastive Learning
                    </CardTitle>
                    <CardDescription>Learning domain-invariant representations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Creating positive-negative pairs from augmented data to shape the embedding space, 
                      pulling together semantically similar views while pushing apart dissimilar samples.
                    </p>
                    <Badge variant="secondary">Domain-Invariant Features</Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Contrastive Learning Visualization */}
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Supervised Contrastive Learning Framework</CardTitle>
                  <CardDescription>Visual representation of our approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <img 
                      src={contrastiveLearningImage} 
                      alt="Supervised Contrastive Learning Diagram"
                      className="max-w-full h-auto rounded-md"
                      data-testid="img-contrastive-learning"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Augmented views of the same image form positive pairs, while different patients 
                    and disease labels create negative pairs, encouraging domain-invariant feature learning.
                  </p>
                </CardContent>
              </Card>

              {/* Evaluation Strategy */}
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Comprehensive Evaluation
                  </CardTitle>
                  <CardDescription>Multi-faceted assessment of model improvement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Quantitative Metrics</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• AUC score comparison on ChestX-ray14</li>
                        <li>• Statistical significance testing</li>
                        <li>• Performance gap reduction measurement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Qualitative Analysis</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Grad-CAM attention visualizations</li>
                        <li>• Focus on relevant lung regions</li>
                        <li>• Improved robustness to noise</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}