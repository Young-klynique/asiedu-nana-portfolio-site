
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  const skills = [
    "Editorial Proofreading",
    "Microsoft Word",
    "Content Strategy",
    "Academic Research"
  ];

  const hobbies = [
    "Playing Football",
    "Video Games",
    "Writing",
    "Hiking"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={import.meta.env.BASE_URL + "lovable-uploads/e77403db-4651-4996-abd0-d447a22c1c0f.png"}
                alt="Asiedu Nana Kwame"
                className="w-full max-w-sm rounded-lg mx-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    My Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I'm a Publishing Studies student at Kwame Nkrumah University of Science and Technology,
                    offering B.A Publishing Studies specializing in editorial processes, book design, and
                    digital content distribution. My goal is to bridge traditional publishing with modern technologies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    On the professional side, I'm deeply interested in publishing, multimedia, and AI,
                    with a goal to build a career in digital publishing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Skills & Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Experience & Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Internship at Fine Print</h3>
                <p className="text-muted-foreground">Tema Industrial Area, Accra</p>
              </div>

              <div>
                <h3 className="font-semibold">Coursework</h3>
                <p className="text-muted-foreground">Digital Publishing, Copyright Law, Typography</p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Touch */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Personal Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                When I'm not studying, I love playing football, video games, writing, and hiking.
                These hobbies keep me energized and inspired!
              </p>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby) => (
                  <Badge key={hobby} variant="outline" className="text-sm py-1 px-3">
                    {hobby}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
