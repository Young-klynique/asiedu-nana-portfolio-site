
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Image, ExternalLink } from "lucide-react";

const Projects = () => {
  const academicProjects = [
    {
      title: "Financial Literacy Among Publishing Students: A 2025 Analysis",
      description: "An in-depth research project examining financial literacy levels among Publishing Studies students and its impact on career preparedness.",
      type: "Academic Research",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Analysis of Ghana's Textbook Publishing Industry",
      description: "A comprehensive study of the textbook publishing landscape in Ghana, including market trends and opportunities.",
      type: "Market Analysis",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  const portfolioItems = [
    {
      title: "Book Cover Designs",
      description: "Collection of book cover designs created during Typography coursework.",
      type: "Design Portfolio",
      icon: <Image className="h-5 w-5" />
    },
    {
      title: "Layout Samples",
      description: "Various layout designs for academic publications and magazines.",
      type: "Layout Design",
      icon: <Image className="h-5 w-5" />
    }
  ];

  const events = [
    {
      title: "Accra Book Fair 2023",
      description: "Participated in Ghana's premier book fair, networking with industry professionals and showcasing student work.",
      type: "Industry Event",
      icon: <ExternalLink className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Projects & Gallery</h1>
          
          {/* Academic Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Academic Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {academicProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {project.icon}
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {project.description}
                    </CardDescription>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Writing Portfolio */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Design Portfolio
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {item.description}
                    </CardDescription>
                    <Button variant="outline" size="sm">
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Events & Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Image className="h-6 w-6" />
              Events & Experience
            </h2>
            <div className="grid gap-6">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {event.icon}
                      <Badge variant="secondary">{event.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
