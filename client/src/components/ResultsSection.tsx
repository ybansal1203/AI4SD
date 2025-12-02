import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { TrendingUp, Award, Target, Eye } from "lucide-react";
import { useState } from "react";

// Phase-1 baseline results from PDF - exact values
const phase1Results = [
  { model: "DenseNet-121", macroAUROC: 0.6865, macroAUPRC: 0.1434, tn: 4558, fp: 2075, fn: 208, tp: 327 },
  { model: "ResNet-50", macroAUROC: 0.6759, macroAUPRC: 0.1342, tn: 4359, fp: 2274, fn: 202, tp: 333 },
  { model: "ViT-B/16", macroAUROC: 0.5699, macroAUPRC: 0.1069, tn: 3601, fp: 3032, fn: 243, tp: 292 },
];

const modelComparison = [
  { metric: "Macro-AUROC", densenet: 0.6865, resnet: 0.6759, vit: 0.5699 },
  { metric: "Macro-AUPRC", densenet: 0.1434, resnet: 0.1342, vit: 0.1069 },
];

const confusionMatrixData = [
  { model: "DenseNet-121", tn: 4558, fp: 2075, fn: 208, tp: 327 },
  { model: "ResNet-50", tn: 4359, fp: 2274, fn: 202, tp: 333 },
  { model: "ViT-B/16", tn: 3601, fp: 3032, fn: 243, tp: 292 },
];

export default function ResultsSection() {
  const [selectedView, setSelectedView] = useState<'overview' | 'diseases' | 'training'>('overview');

  const handleViewChange = (view: 'overview' | 'diseases' | 'training') => {
    setSelectedView(view);
    console.log(`Selected results view: ${view}`);
  };

  return (
    <section id="results" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-results-title">
              Phase-1 Baseline Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-results-description">
              Phase-1 baseline results establishing reproducible benchmarks for multi-label chest X-ray classification. Comparing DenseNet-121, ResNet-50, and ViT-B/16 architectures under identical training conditions.
            </p>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-elevate" data-testid="card-best-model">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-chart-3" />
                  Best Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-chart-3" data-testid="text-best-model">
                  DenseNet-121
                </div>
                <p className="text-sm text-muted-foreground">
                  Macro-AUROC: 68.65% (0.6865)
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-macro-auroc">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-chart-4" />
                  Macro-AUROC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-4" data-testid="text-macro-auroc">
                  0.6865
                </div>
                <p className="text-sm text-muted-foreground">
                  DenseNet-121 on mini test set
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-macro-auprc">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-chart-5" />
                  Macro-AUPRC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-5" data-testid="text-macro-auprc">
                  0.1434
                </div>
                <p className="text-sm text-muted-foreground">
                  DenseNet-121 on mini test set
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Results View Selection */}
          <div className="flex justify-center gap-2 flex-wrap">
            <Button
              variant={selectedView === 'overview' ? "default" : "outline"}
              onClick={() => handleViewChange('overview')}
              data-testid="button-overview-view"
            >
              Model Comparison
            </Button>
            <Button
              variant={selectedView === 'diseases' ? "default" : "outline"}
              onClick={() => handleViewChange('diseases')}
              data-testid="button-diseases-view"
            >
              Confusion Matrix
            </Button>
            <Button
              variant={selectedView === 'training' ? "default" : "outline"}
              onClick={() => handleViewChange('training')}
              data-testid="button-training-view"
            >
              Phase 2 Plan
            </Button>
          </div>

          {/* Overview Results */}
          {selectedView === 'overview' && (
            <div className="space-y-8 animate-in fade-in-50 duration-300" data-testid="content-overview">
                <Card className="hover-elevate">
                  <CardHeader>
                  <CardTitle>Model Performance Comparison</CardTitle>
                  <CardDescription>Macro-AUROC and Macro-AUPRC on mini test set</CardDescription>
                  </CardHeader>
                  <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={modelComparison}>
                        <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="metric" />
                      <YAxis domain={[0, 0.8]} />
                        <Tooltip />
                      <Bar dataKey="densenet" fill="hsl(var(--chart-1))" name="DenseNet-121" />
                      <Bar dataKey="resnet" fill="hsl(var(--chart-2))" name="ResNet-50" />
                      <Bar dataKey="vit" fill="hsl(var(--chart-3))" name="ViT-B/16" />
                      </BarChart>
                    </ResponsiveContainer>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {phase1Results.map((result, idx) => (
                      <div key={idx} className="bg-muted p-4 rounded-md">
                        <h4 className="font-semibold mb-2">{result.model}</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Macro-AUROC:</span>
                            <Badge variant="secondary">{(result.macroAUROC * 100).toFixed(2)}%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Macro-AUPRC:</span>
                            <Badge variant="secondary">{(result.macroAUPRC * 100).toFixed(2)}%</Badge>
                          </div>
                      </div>
                      </div>
                    ))}
                    </div>
                  </CardContent>
                </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Key Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Architecture Performance</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong>DenseNet-121</strong> performed best with macro-AUROC 0.6865 (68.65%)</li>
                        <li>• <strong>ResNet-50</strong> was close (macro-AUROC 0.6759, 67.59%)</li>
                        <li>• <strong>ViT-B/16</strong> trailed under this short training regime (macro-AUROC 0.5699, 56.99%)</li>
                        <li>• CNNs remain strong with limited data and brief schedules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Observations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Relatively high false-positive burden at 0.5 threshold</li>
                        <li>• Per-class threshold tuning needed in next phase</li>
                        <li>• Transformer typically benefits from more data/epochs or pretraining</li>
                        <li>• Confusion matrix figures emphasize need for calibration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Confusion Matrix Results */}
          {selectedView === 'diseases' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300" data-testid="content-diseases">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Confusion Matrix Results</CardTitle>
                  <CardDescription>Micro confusion matrix aggregated across classes at fixed probability threshold of 0.5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {confusionMatrixData.map((data, idx) => (
                      <div key={idx} className="bg-muted p-4 rounded-md">
                        <h4 className="font-semibold mb-4 text-center">{data.model}</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-center p-2 bg-background rounded">
                            <div className="font-medium text-muted-foreground">TN</div>
                            <div className="text-lg font-bold text-chart-1">{data.tn.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-2 bg-background rounded">
                            <div className="font-medium text-muted-foreground">FP</div>
                            <div className="text-lg font-bold text-destructive">{data.fp.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-2 bg-background rounded">
                            <div className="font-medium text-muted-foreground">FN</div>
                            <div className="text-lg font-bold text-destructive">{data.fn.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-2 bg-background rounded">
                            <div className="font-medium text-muted-foreground">TP</div>
                            <div className="text-lg font-bold text-chart-3">{data.tp.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> The confusion matrix shows relatively high false-positive burden at the 0.5 threshold, 
                      motivating per-class threshold tuning and calibration in Phase 2.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Phase 2 Plan */}
          {selectedView === 'training' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300" data-testid="content-training">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Phase 2: Domain Generalization Plan</CardTitle>
                  <CardDescription>Upcoming implementation of supervised contrastive learning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Training Recipe</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Keep the same train/test split and backbones (DenseNet-121)</li>
                      <li>• Replace or augment the training objective with a supervised contrastive term</li>
                      <li>• Generate two augmented views per image (color jitter, blur, mild noise, flip)</li>
                      <li>• Compute InfoNCE-style contrastive loss over the batch (label-aware positives)</li>
                      <li>• Combine with BCE via weighted sum (λ ∈ [0.1, 0.5])</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Evaluation Plan</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Retrain on the same mini-train with contrastive setup</li>
                      <li>• Re-evaluate on the same mini-test</li>
                      <li>• Report macro-AUROC/AUPRC, micro confusion matrices</li>
                      <li>• Compare directly against Phase-1 baselines</li>
                      <li>• Use Grad-CAM visualizations to assess attention on relevant lung regions</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Expected Outcome:</strong> Statistically significant reduction in the performance gap 
                      between source and target domains, demonstrating improved domain generalization.
                    </p>
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