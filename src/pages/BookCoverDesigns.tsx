import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const BookCoverDesigns = () => {
  const designs = [
    {
      title: "Contemporary Fiction Cover",
      description: "Modern minimalist design for a contemporary fiction novel, featuring bold typography and geometric elements.",
      course: "Typography Design",
      software: "Adobe InDesign, Photoshop",
      year: "2024",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
    },
    {
      title: "Academic Textbook Cover",
      description: "Professional cover design for an educational textbook on Publishing Studies, emphasizing clarity and academic authority.",
      course: "Book Design Fundamentals",
      software: "Adobe InDesign, Illustrator",
      year: "2024",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
    },
    {
      title: "Poetry Collection Cover",
      description: "Artistic and expressive cover design for a poetry collection, incorporating hand-lettered typography and watercolor elements.",
      course: "Creative Typography",
      software: "Adobe Photoshop, Illustrator",
      year: "2023",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop"
    },
    {
      title: "Children's Book Cover",
      description: "Colorful and playful cover design for a children's story book, featuring illustrated characters and vibrant colors.",
      course: "Illustration for Publishing",
      software: "Adobe Illustrator, Photoshop",
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
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
            
            <h1 className="text-4xl font-bold mb-4">Book Cover Designs</h1>
            <p className="text-xl text-muted-foreground">
              A collection of book cover designs created during my Typography and Design coursework at KNUST.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{design.year}</Badge>
                    <Badge variant="outline">{design.course}</Badge>
                  </div>
                  <CardTitle className="text-xl">{design.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {design.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><strong>Course:</strong> {design.course}</p>
                    <p className="text-sm"><strong>Software:</strong> {design.software}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Full
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

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Design Philosophy</h3>
            <p className="text-muted-foreground">
              My approach to book cover design focuses on creating visual narratives that complement the content while 
              appealing to the target audience. I believe that a great cover should intrigue potential readers and 
              accurately represent the book's tone and genre. Through my coursework, I've developed skills in typography, 
              color theory, and visual hierarchy to create compelling and marketable designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCoverDesigns;