
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src={import.meta.env.BASE_URL + "lovable-uploads/e77403db-4651-4996-abd0-d447a22c1c0f.png"}
              alt="Asiedu Nana Kwame"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary"
            />
          </div>

          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Hello! I'm Asiedu Nana Kwame
          </h1>

          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            A passionate Publishing Studies student dedicated to the art of storytelling,
            print media, and digital publishing. Explore my work and academic projects!
          </p>

          <p className="text-lg font-semibold text-primary mb-8">
            Shaping the Future of Publishing, one page at a time
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/projects">
                <BookOpen className="mr-2 h-5 w-5" />
                View My Projects
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Project */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Project</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">
                Financial Literacy Among Publishing Students: A 2025 Analysis
              </CardTitle>
              <CardDescription>
                Academic Research Project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                An in-depth analysis exploring the relationship between financial literacy
                and career preparedness among Publishing Studies students. This research
                examines current trends and provides insights for academic curriculum development.
              </p>
              <Button variant="link" asChild>
                <Link to="/projects">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
