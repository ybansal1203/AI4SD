import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function NotebookSection() {
  const notebookPath = '/KAGGLE_final.ipynb';

  const downloadNotebook = () => {
    const link = document.createElement('a');
    link.href = notebookPath;
    link.download = 'KAGGLE_final.ipynb';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="notebook" className="py-12 sm:py-16 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Interactive Notebook
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Download our complete machine learning pipeline for chest X-ray analysis
            </p>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Notebook</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button onClick={downloadNotebook} variant="default" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Notebook
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
