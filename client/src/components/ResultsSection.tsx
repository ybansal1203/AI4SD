import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { TrendingUp, Award, Target, Eye } from "lucide-react";
import { useState } from "react";

// Research results data based on AI4SD project findings
const baselineResults = [
  { dataset: "MIMIC-CXR", auc: 0.847, label: "Source Domain" },
  { dataset: "ChestX-ray14", auc: 0.712, label: "Target Domain" }
];

const improvedResults = [
  { dataset: "MIMIC-CXR", auc: 0.851, label: "Source Domain" },
  { dataset: "ChestX-ray14", auc: 0.789, label: "Target Domain" }
];

const diseasePerformance = [
  { disease: "Pneumonia", baseline: 0.734, improved: 0.812 },
  { disease: "Cardiomegaly", baseline: 0.689, improved: 0.765 },
  { disease: "Atelectasis", baseline: 0.698, improved: 0.743 },
  { disease: "Consolidation", baseline: 0.712, improved: 0.789 },
  { disease: "Edema", baseline: 0.745, improved: 0.823 },
  { disease: "Pleural Effusion", baseline: 0.671, improved: 0.758 },
];

const trainingProgress = [
  { epoch: 0, baseline: 0.650, improved: 0.680 },
  { epoch: 5, baseline: 0.685, improved: 0.720 },
  { epoch: 10, baseline: 0.712, improved: 0.789 },
  { epoch: 15, baseline: 0.712, improved: 0.789 },
  { epoch: 20, baseline: 0.711, improved: 0.791 },
];

export default function ResultsSection() {
  const [selectedView, setSelectedView] = useState<'overview' | 'diseases' | 'training'>('overview');

  const handleViewChange = (view: 'overview' | 'diseases' | 'training') => {
    setSelectedView(view);
    console.log(`Selected results view: ${view}`);
  };

  const generalizationGapReduction = ((0.789 - 0.712) / (0.847 - 0.712) * 100).toFixed(1);

  return (
    <section id="results" className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-results-title">
              Experimental Results & Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-results-description">
              Demonstrating significant improvement in cross-domain generalization for chest X-ray classification
            </p>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-elevate" data-testid="card-gap-reduction">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-chart-3" />
                  Gap Reduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-3" data-testid="text-gap-reduction">
                  {generalizationGapReduction}%
                </div>
                <p className="text-sm text-muted-foreground">
                  Generalization gap reduction on target domain
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-performance-improvement">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5 text-chart-4" />
                  Performance Gain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-4" data-testid="text-performance-gain">
                  +0.077
                </div>
                <p className="text-sm text-muted-foreground">
                  AUC improvement on ChestX-ray14 dataset
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-statistical-significance">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-chart-5" />
                  Statistical Significance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-5" data-testid="text-p-value">
                  p&lt;0.001
                </div>
                <p className="text-sm text-muted-foreground">
                  Highly significant improvement achieved
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
              Performance Overview
            </Button>
            <Button
              variant={selectedView === 'diseases' ? "default" : "outline"}
              onClick={() => handleViewChange('diseases')}
              data-testid="button-diseases-view"
            >
              Disease-Specific Results
            </Button>
            <Button
              variant={selectedView === 'training' ? "default" : "outline"}
              onClick={() => handleViewChange('training')}
              data-testid="button-training-view"
            >
              Training Progress
            </Button>
          </div>

          {/* Overview Results */}
          {selectedView === 'overview' && (
            <div className="space-y-8 animate-in fade-in-50 duration-300" data-testid="content-overview">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle>Baseline Model Performance</CardTitle>
                    <CardDescription>Standard DenseNet-121 without domain generalization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={baselineResults}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dataset" />
                        <YAxis domain={[0.6, 0.9]} />
                        <Tooltip />
                        <Bar dataKey="auc" fill="hsl(var(--chart-1))" />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Source Domain (MIMIC-CXR):</span>
                        <Badge variant="secondary">AUC 0.847</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Target Domain (ChestX-ray14):</span>
                        <Badge variant="destructive">AUC 0.712</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardHeader>
                    <CardTitle>Improved Model Performance</CardTitle>
                    <CardDescription>With data augmentation and contrastive learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={improvedResults}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dataset" />
                        <YAxis domain={[0.6, 0.9]} />
                        <Tooltip />
                        <Bar dataKey="auc" fill="hsl(var(--chart-3))" />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Source Domain (MIMIC-CXR):</span>
                        <Badge variant="secondary">AUC 0.851</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Target Domain (ChestX-ray14):</span>
                        <Badge variant="default">AUC 0.789</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

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
                      <h4 className="font-medium mb-3">Quantitative Improvements</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Reduced generalization gap by {generalizationGapReduction}%</li>
                        <li>• Maintained source domain performance</li>
                        <li>• Significant improvement on target domain (p&lt;0.001)</li>
                        <li>• Consistent gains across all disease categories</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Qualitative Observations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Grad-CAM shows improved attention on relevant regions</li>
                        <li>• Better robustness to image quality variations</li>
                        <li>• Reduced sensitivity to equipment differences</li>
                        <li>• More consistent performance across patient demographics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Disease-Specific Results */}
          {selectedView === 'diseases' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300" data-testid="content-diseases">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Disease-Specific Performance Comparison</CardTitle>
                  <CardDescription>AUC scores for individual thoracic conditions on ChestX-ray14</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={diseasePerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="disease" angle={-45} textAnchor="end" height={80} />
                      <YAxis domain={[0.6, 0.9]} />
                      <Tooltip />
                      <Bar dataKey="baseline" fill="hsl(var(--chart-1))" name="Baseline" />
                      <Bar dataKey="improved" fill="hsl(var(--chart-3))" name="Improved" />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Consistent improvement across all disease categories demonstrates robustness of our approach
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Training Progress */}
          {selectedView === 'training' && (
            <div className="space-y-6 animate-in fade-in-50 duration-300" data-testid="content-training">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle>Training Progress on Target Domain</CardTitle>
                  <CardDescription>AUC score evolution during training on ChestX-ray14</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={trainingProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="epoch" />
                      <YAxis domain={[0.6, 0.9]} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="baseline" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={2}
                        name="Baseline Model"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="improved" 
                        stroke="hsl(var(--chart-3))" 
                        strokeWidth={2}
                        name="Improved Model"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Improved model shows faster convergence and higher final performance
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