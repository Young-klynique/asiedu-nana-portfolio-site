
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Calendar, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialLiteracyProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" className="mb-6" asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">Academic Research</Badge>
            <h1 className="text-4xl font-bold mb-4">Financial Literacy Among Publishing Students: A 2025 Analysis</h1>
            <p className="text-lg text-muted-foreground">
              An comprehensive research project examining financial literacy levels among Publishing Studies students and its impact on career preparedness in the publishing industry.
            </p>
          </div>

          {/* Project Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Duration</h4>
                  <p className="text-muted-foreground">January 2025 - Present</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Status</h4>
                  <Badge>In Progress</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Objective</h4>
                <p>
                  To assess the current level of financial literacy among Publishing Studies students and analyze how this knowledge affects their career preparation and professional development in the publishing industry.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Research Methodology */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Research Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Research Design</h4>
                <p>Mixed-method approach combining quantitative surveys and qualitative interviews</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sample Size</h4>
                <p>150 Publishing Studies students across 5 universities in Ghana</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Collection Methods</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Online questionnaires assessing financial knowledge</li>
                  <li>In-depth interviews with final-year students</li>
                  <li>Focus group discussions</li>
                  <li>Analysis of course curricula</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Preliminary Findings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Financial Knowledge Gaps</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>68% of students lack understanding of freelance taxation</li>
                  <li>45% unaware of copyright royalty systems</li>
                  <li>72% need guidance on publishing industry salary negotiations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Career Impact</h4>
                <p>
                  Students with higher financial literacy scores show 40% more confidence in pursuing publishing careers and demonstrate better understanding of industry business models.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Future Implications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Future Implications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Curriculum Recommendations</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Integration of financial literacy modules in publishing courses</li>
                  <li>Workshops on publishing industry economics</li>
                  <li>Guest lectures from publishing finance professionals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expected Completion</h4>
                <p>June 2025 - Results will be presented at the National Publishing Conference</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracyProject;
