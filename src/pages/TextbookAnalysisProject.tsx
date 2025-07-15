
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, TrendingUp, Globe, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const TextbookAnalysisProject = () => {
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
            <Badge variant="secondary" className="mb-4">Market Analysis</Badge>
            <h1 className="text-4xl font-bold mb-4">Analysis of Ghana's Textbook Publishing Industry</h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive study of the textbook publishing landscape in Ghana, examining market trends, challenges, and opportunities for growth in the educational publishing sector.
            </p>
          </div>

          {/* Market Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Market Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Research Period</h4>
                  <p className="text-muted-foreground">September 2024 - December 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Market Size</h4>
                  <p className="text-muted-foreground">GHS 45 million annually</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Scope</h4>
                <p>
                  Analysis covers primary, secondary, and tertiary educational textbooks published and distributed within Ghana, including both local and international publishers operating in the market.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Players */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Major Publishers Analyzed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Local Publishers</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Macmillan Ghana Ltd</li>
                    <li>Adwinsa Publications</li>
                    <li>Okyeame Publications</li>
                    <li>Sedco Publishing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">International Players</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Pearson Education</li>
                    <li>Oxford University Press</li>
                    <li>Cambridge University Press</li>
                    <li>McGraw-Hill Education</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Market Trends */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Market Trends & Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Digital Transformation</h4>
                <p>
                  25% increase in digital textbook adoption since 2022, driven by improved internet connectivity and government digitization initiatives.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Local Content Preference</h4>
                <p>
                  Growing demand for textbooks with Ghanaian context and examples, particularly in social studies and literature subjects.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Challenges Identified</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>High production costs affecting affordability</li>
                  <li>Limited distribution networks in rural areas</li>
                  <li>Piracy and unauthorized reproduction</li>
                  <li>Currency fluctuation affecting imported materials</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Strategic Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">For Publishers</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Invest in hybrid publishing models (print + digital)</li>
                  <li>Develop partnerships with educational technology companies</li>
                  <li>Focus on curriculum-aligned content development</li>
                  <li>Explore print-on-demand to reduce inventory costs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Policymakers</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Strengthen intellectual property enforcement</li>
                  <li>Provide tax incentives for local content development</li>
                  <li>Support digital infrastructure development</li>
                  <li>Establish quality assurance standards for textbooks</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TextbookAnalysisProject;
