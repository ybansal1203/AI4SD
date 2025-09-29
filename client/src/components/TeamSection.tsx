import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Yash Bansal",
    role: "Project Lead & ML Engineer",
    initials: "YB",
    expertise: ["Deep Learning", "Medical AI", "Domain Adaptation"],
    description: "Leading the research initiative and model development with focus on domain generalization techniques."
  },
  {
    name: "Kyoungeui Hong",
    role: "Data Scientist & Researcher",
    initials: "KH", 
    expertise: ["Data Analysis", "Statistical Modeling", "Computer Vision"],
    description: "Specializing in data preprocessing, augmentation strategies, and statistical validation of results."
  },
  {
    name: "Hanie Kang",
    role: "ML Researcher & Algorithm Developer",
    initials: "HK",
    expertise: ["Contrastive Learning", "Neural Networks", "Medical Imaging"],
    description: "Developing contrastive learning frameworks and novel architectural improvements for medical imaging."
  },
  {
    name: "Juann Kim", 
    role: "Research Scientist & Evaluator",
    initials: "JK",
    expertise: ["Model Evaluation", "Healthcare AI", "Ethics in AI"],
    description: "Focusing on comprehensive model evaluation, ethical considerations, and clinical applicability."
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-team-title">
              Meet the AI4SD Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-description">
              A dedicated group of researchers working towards equitable and robust medical AI systems
            </p>
          </div>


          {/* Individual Team Members */}
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-member-${member.initials.toLowerCase()}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold" data-testid={`text-name-${member.initials.toLowerCase()}`}>
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Context */}
          <Card className="hover-elevate" data-testid="card-project-context">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Project Context
              </CardTitle>
              <CardDescription>CSCI 461 - Artificial Intelligence for Sustainable Development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Course Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Course:</strong> CSCI 461 - AI for Sustainable Development</li>
                    <li><strong>Professor:</strong> Bistra Dilkina</li>
                    <li><strong>Semester:</strong> Fall 2025</li>
                    <li><strong>Institution:</strong> University of Southern California</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Project Timeline</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Duration:</strong> 8 weeks (Week 6-15)</li>
                    <li><strong>Data Collection:</strong> Week 6-7</li>
                    <li><strong>Model Training:</strong> Week 8-10</li>
                    <li><strong>Analysis & Results:</strong> Week 13-14</li>
                    <li><strong>Final Presentation:</strong> Week 15</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-medium mb-2">Research Impact</h4>
                <p className="text-sm text-muted-foreground">
                  This project contributes to the broader goal of creating more equitable healthcare AI systems 
                  that can reliably serve diverse patient populations and clinical settings, supporting multiple 
                  UN Sustainable Development Goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}