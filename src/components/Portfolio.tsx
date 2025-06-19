
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "HR Analytics Presence Insights",
      description: "DAX-powered Power BI dashboard improving attendance trend visibility and workforce analytics for better decision making.",
      tech: ["Power BI", "DAX", "Excel"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "COVID-19 Data Exploration",
      description: "Comprehensive data cleaning, exploratory data analysis, and query-based insights using advanced SQL techniques.",
      tech: ["SQL", "PostgreSQL", "Data Cleaning"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Stock Market Predictive Analysis",
      description: "Machine learning model development using Pandas and NumPy, achieving 73% accuracy in stock price predictions.",
      tech: ["Python", "Pandas", "NumPy", "ML"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Passenger Experience Analysis",
      description: "Interactive Tableau dashboard analyzing British Airways customer feedback with actionable insights for service improvement.",
      tech: ["Tableau", "Excel", "Data Viz"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my data analysis projects demonstrating practical application of 
            business intelligence, data visualization, and machine learning techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-sky-100 to-sky-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-sky-900/40 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-sky-600 text-sky-600 hover:bg-sky-50"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
