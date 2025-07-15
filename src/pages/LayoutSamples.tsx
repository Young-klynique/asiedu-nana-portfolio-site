import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const LayoutSamples = () => {
  const layouts = [
    {
      title: "Academic Journal Layout",
      description: "Professional layout design for a peer-reviewed academic journal in Publishing Studies, featuring multi-column grid system and scholarly typography.",
      type: "Journal Design",
      pages: "12 pages",
      software: "Adobe InDesign",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop"
    },
    {
      title: "Magazine Feature Spread",
      description: "Dynamic two-page spread for a lifestyle magazine article about modern publishing trends, incorporating infographics and pull quotes.",
      type: "Magazine Layout",
      pages: "2-page spread",
      software: "Adobe InDesign, Illustrator",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586281010691-d081b8b92b13?w=600&h=400&fit=crop"
    },
    {
      title: "University Brochure",
      description: "Tri-fold brochure design for KNUST Publishing Studies program, featuring program highlights, course information, and student testimonials.",
      type: "Brochure Design",
      pages: "6 panels",
      software: "Adobe InDesign, Photoshop",
      year: "2023",
      image: "https://images.unsplash.com/photo-1586953208445-89c5814fb8ad?w=600&h=400&fit=crop"
    },
    {
      title: "Newsletter Template",
      description: "Monthly newsletter template for publishing industry updates, designed for both print and digital distribution with modular sections.",
      type: "Newsletter Design",
      pages: "4 pages",
      software: "Adobe InDesign",
      year: "2023",
      image: "https://images.unsplash.com/photo-1586953208405-1d235b30fa2c?w=600&h=400&fit=crop"
    },
    {
      title: "Research Report Layout",
      description: "Comprehensive layout for a 50-page research report on Ghana's publishing industry, including charts, tables, and appendices.",
      type: "Report Design",
      pages: "50 pages",
      software: "Adobe InDesign, Excel",
      year: "2024",
      image: "https://images.unsplash.com/photo-1586953208462-7c24a9628f74?w=600&h=400&fit=crop"
    },
    {
      title: "Event Program Booklet",
      description: "Program booklet for the 2023 Accra Book Fair, including schedules, speaker profiles, and venue maps with cohesive visual identity.",
      type: "Event Materials",
      pages: "16 pages",
      software: "Adobe InDesign, Illustrator",
      year: "2023",
      image: "https://images.unsplash.com/photo-1586953208406-a8dd617c3c32?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild className="mb-4">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-4xl font-bold mb-4">Layout Design Samples</h1>
            <p className="text-xl text-muted-foreground">
              Professional layout designs for various publications and materials created during my Publishing Studies coursework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {layouts.map((layout, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={layout.image} 
                    alt={layout.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4" />
                    <Badge variant="secondary">{layout.type}</Badge>
                    <Badge variant="outline">{layout.year}</Badge>
                  </div>
                  <CardTitle className="text-xl">{layout.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {layout.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><strong>Pages:</strong> {layout.pages}</p>
                    <p className="text-sm"><strong>Software:</strong> {layout.software}</p>
                    <p className="text-sm"><strong>Type:</strong> {layout.type}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Technical Skills</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Grid system design and typography hierarchy</li>
                <li>• Multi-column layouts and text flow management</li>
                <li>• Integration of images, charts, and infographics</li>
                <li>• Print and digital optimization techniques</li>
                <li>• Brand consistency and style guide adherence</li>
              </ul>
            </div>
            
            <div className="p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Design Approach</h3>
              <p className="text-muted-foreground">
                My layout designs prioritize readability, visual hierarchy, and user experience. 
                I focus on creating clean, professional layouts that effectively communicate 
                information while maintaining aesthetic appeal. Each project considers the target 
                audience, content purpose, and distribution medium to ensure optimal results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSamples;