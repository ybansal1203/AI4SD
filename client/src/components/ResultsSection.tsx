import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { TrendingUp, Award, Target, Eye, BarChart3, Activity } from "lucide-react";
import { useState } from "react";

// Results from Final Presentation - exact values
const supervisedLearningResults = [
  { model: "ViT", f1_micro: 27.84, f1_macro: 7.25, auc_macro: 71.70, map: 18.82 },
  { model: "EfficientNet", f1_micro: 26.13, f1_macro: 5.21, auc_macro: 64.94, map: 15.50 },
  { model: "ResNet50", f1_micro: 19.70, f1_macro: 4.74, auc_macro: 67.83, map: 16.32 },
];

const supervisedContrastiveResults = [
  { model: "ViT", f1_micro: 30.06, f1_macro: 9.41, auc_macro: 74.63, map: 21.79 },
  { model: "EfficientNet", f1_micro: 29.14, f1_macro: 7.60, auc_macro: 67.82, map: 17.47 },
  { model: "ResNet50", f1_micro: 27.95, f1_macro: 6.87, auc_macro: 69.68, map: 18.22 },
];

// Dynamic model comparison based on selected method
const getModelComparison = (method: 'supervised' | 'contrastive') => {
  const results = method === 'contrastive' ? supervisedContrastiveResults : supervisedLearningResults;
  return [
    { metric: "F1 Micro", vit: results[0].f1_micro, efficientnet: results[1].f1_micro, resnet: results[2].f1_micro },
    { metric: "F1 Macro", vit: results[0].f1_macro, efficientnet: results[1].f1_macro, resnet: results[2].f1_macro },
    { metric: "AUC Macro", vit: results[0].auc_macro, efficientnet: results[1].auc_macro, resnet: results[2].auc_macro },
    { metric: "mAP", vit: results[0].map, efficientnet: results[1].map, resnet: results[2].map },
  ];
};

export default function ResultsSection() {
  const [selectedView, setSelectedView] = useState<'overview' | 'diseases' | 'training'>('overview');
  const [selectedMethod, setSelectedMethod] = useState<'supervised' | 'contrastive'>('contrastive');

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
              Experimental Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-results-description">
              Comparing ResNet-50, EfficientNet-B0, and ViT-B/16 architectures under supervised learning and supervised contrastive learning approaches. Results evaluated on ChestX-ray14 test set.
            </p>
          </div>

          {/* Method Selection */}
          <div className="flex justify-center gap-2 flex-wrap mb-6">
            <Button
              variant={selectedMethod === 'supervised' ? "default" : "outline"}
              onClick={() => setSelectedMethod('supervised')}
            >
              Supervised Learning
            </Button>
            <Button
              variant={selectedMethod === 'contrastive' ? "default" : "outline"}
              onClick={() => setSelectedMethod('contrastive')}
            >
              Supervised Contrastive Learning
            </Button>
          </div>

          {/* Best Model Card */}
          <div className="flex justify-center mb-6 max-w-4xl mx-auto">
            <Card className="hover-elevate w-full max-w-md" data-testid="card-best-model">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-chart-3" />
                  Best Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-chart-3" data-testid="text-best-model">
                  ViT-B/16
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedMethod === 'contrastive' ? 'Supervised Contrastive Learning' : 'Supervised Learning'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover-elevate" data-testid="card-f1-micro">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-chart-4" />
                  F1 Micro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-4" data-testid="text-f1-micro">
                  {selectedMethod === 'contrastive' ? '30.06%' : '27.84%'}
                </div>
                <p className="text-sm text-muted-foreground">
                  ViT-B/16 ({selectedMethod === 'contrastive' ? 'Contrastive' : 'Supervised'})
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-f1-macro">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-chart-1" />
                  F1 Macro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-1" data-testid="text-f1-macro">
                  {selectedMethod === 'contrastive' ? '9.41%' : '7.25%'}
                </div>
                <p className="text-sm text-muted-foreground">
                  ViT-B/16 ({selectedMethod === 'contrastive' ? 'Contrastive' : 'Supervised'})
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-auc-macro">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-chart-5" />
                  AUC Macro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-5" data-testid="text-auc-macro">
                  {selectedMethod === 'contrastive' ? '74.63%' : '71.70%'}
                </div>
                <p className="text-sm text-muted-foreground">
                  ViT-B/16 ({selectedMethod === 'contrastive' ? 'Contrastive' : 'Supervised'})
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-map">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="h-5 w-5 text-chart-2" />
                  mAP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-2" data-testid="text-map">
                  {selectedMethod === 'contrastive' ? '21.79%' : '18.82%'}
                </div>
                <p className="text-sm text-muted-foreground">
                  ViT-B/16 ({selectedMethod === 'contrastive' ? 'Contrastive' : 'Supervised'})
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
              Evaluation Metrics
            </Button>
            <Button
              variant={selectedView === 'training' ? "default" : "outline"}
              onClick={() => handleViewChange('training')}
              data-testid="button-training-view"
            >
              Training Details
            </Button>
          </div>

          {/* Overview Results */}
          {selectedView === 'overview' && (
            <div className="space-y-8 animate-in fade-in-50 duration-300" data-testid="content-overview">
                <Card className="hover-elevate">
                  <CardHeader>
                  <CardTitle>Model Performance Comparison</CardTitle>
                  <CardDescription>{selectedMethod === 'contrastive' ? 'Supervised Contrastive Learning' : 'Supervised Learning'} results on ChestX-ray14 test set</CardDescription>
                  </CardHeader>
                  <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={getModelComparison(selectedMethod)}>
                        <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="metric" />
                      <YAxis domain={[0, 80]} />
                        <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="vit" fill="hsl(var(--chart-1))" name="ViT-B/16" />
                      <Bar dataKey="efficientnet" fill="hsl(var(--chart-2))" name="EfficientNet-B0" />
                      <Bar dataKey="resnet" fill="hsl(var(--chart-3))" name="ResNet-50" />
                      </BarChart>
                    </ResponsiveContainer>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    {(selectedMethod === 'contrastive' ? supervisedContrastiveResults : supervisedLearningResults).map((result, idx) => (
                      <div key={idx} className="bg-muted p-4 rounded-md">
                        <h4 className="font-semibold mb-2">{result.model}</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">F1 Micro:</span>
                            <Badge variant="secondary">{result.f1_micro.toFixed(2)}%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">F1 Macro:</span>
                            <Badge variant="secondary">{result.f1_macro.toFixed(2)}%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">AUC Macro:</span>
                            <Badge variant="secondary">{result.auc_macro.toFixed(2)}%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">mAP:</span>
                            <Badge variant="secondary">{result.map.toFixed(2)}%</Badge>
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
                        <li>• <strong>ViT-B/16</strong> achieved highest AUC Macro: {selectedMethod === 'contrastive' ? '74.63%' : '71.70%'} ({selectedMethod === 'contrastive' ? 'contrastive' : 'supervised'})</li>
                        <li>• <strong>EfficientNet-B0</strong> showed strong F1 Micro: {selectedMethod === 'contrastive' ? '29.14%' : '26.13%'}</li>
                        <li>• <strong>ResNet-50</strong> demonstrated solid performance with AUC Macro: {selectedMethod === 'contrastive' ? '69.68%' : '67.83%'}</li>
                        <li>• Contrastive learning provides significant improvements across all metrics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Observations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Linear probing setting: only final classification layer trained</li>
                        <li>• Models initialized with ImageNet pretrained weights</li>
                        <li>• Results evaluated on ChestX-ray14 (target domain, test only)</li>
                        <li>• Strict domain generalization: no target-domain data in training</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Evaluation Metrics Details */}
          {selectedView === 'diseases' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300" data-testid="content-diseases">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Evaluation Metrics</CardTitle>
                  <CardDescription>Comprehensive metrics used to evaluate model performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-semibold mb-2">F1 Micro</h4>
                      <p className="text-sm text-muted-foreground">
                        Compute TP/FP/FN over all labels and samples jointly. Emphasizes performance on frequent labels; good overall indicator.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-semibold mb-2">F1 Macro</h4>
                      <p className="text-sm text-muted-foreground">
                        Compute F1 per disease label, then average over 14 labels. Gives equal weight to common and rare diseases; highlights performance on under-represented conditions.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-semibold mb-2">ROC-AUC Macro</h4>
                      <p className="text-sm text-muted-foreground">
                        Area under ROC curve for each label, then macro average. Threshold-free ranking quality; important when prevalence is low and operating thresholds may change.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-semibold mb-2">mAP (mean Average Precision)</h4>
                      <p className="text-sm text-muted-foreground">
                        Average precision per label from the precision-recall curve, then mean over labels. Focuses on precision-recall trade-off, which is more informative than ROC in highly imbalanced medical data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Training Details */}
          {selectedView === 'training' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300" data-testid="content-training">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Training Configuration</CardTitle>
                  <CardDescription>Experimental setup and training details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Architecture & Initialization</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Models: ResNet-50, EfficientNet-B0, ViT-B/16</li>
                      <li>• All models initialized with ImageNet pretrained weights</li>
                      <li>• Linear Probing Setting: backbone weights frozen, only the final classification layer is trained</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Training Setup</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• NVIDIA A100 GPU</li>
                      <li>• Batch size: 128</li>
                      <li>• 10 epochs (models converged quickly in preliminary runs)</li>
                      <li>• AdamW optimizer</li>
                      <li>• BCEWithLogitsLoss with per-class pos_weight</li>
                      <li>• Mixed precision (AMP) training</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Supervised Contrastive Learning</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Trains a representation model with supervised contrastive loss</li>
                      <li>• Two images are positive pairs if they share at least one disease label</li>
                      <li>• After contrastive pretraining, linear classifier trained on frozen backbone using BCE loss</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Results show that supervised contrastive learning provides significant improvements, 
                      with ViT-B/16 achieving the best performance across all metrics.
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