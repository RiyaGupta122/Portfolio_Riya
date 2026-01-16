import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code2, Brain, BarChart3, Users, Award, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { personalInfo, about, skills, projects, experience, education } from '../mock';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    // Trigger animations on mount and scroll
    const triggerAnimations = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add('visible');
        }
      });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      triggerAnimations();
    };

    // Trigger on mount
    setTimeout(triggerAnimations, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = '/Riya_Gupta_Resume.pdf';
    link.download = 'Riya_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-cyan-500/5' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              RG
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20"
              >
                Resume
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                {personalInfo.headline}
              </h2>
              
              <p className="text-lg text-slate-400 leading-relaxed">
                {personalInfo.intro}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30 group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={handleResumeDownload}
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.links.email}`}
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/20">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {about.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-on-scroll space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Technical & AI/ML */}
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400">Technical & AI/ML</CardTitle>
                  <CardDescription>Core technical competencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools & Libraries */}
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Libraries & Tools</CardTitle>
                  <CardDescription>Technology stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business & Professional */}
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400">Business & Professional</CardTitle>
                  <CardDescription>Soft skills & leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.business.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300 border-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="animate-on-scroll space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Explore my portfolio of AI/ML projects showcasing practical applications across various domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2 group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center pt-8">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
              >
                More projects available on GitHub
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            {experience.map((exp) => (
              <Card key={exp.id} className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-cyan-400">{exp.role}</CardTitle>
                      <CardDescription className="text-lg text-slate-300">{exp.company}</CardDescription>
                    </div>
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-on-scroll space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Education & Certifications
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-200">{education.degree}</h3>
                  <p className="text-slate-400">{education.institution}</p>
                  <p className="text-cyan-400">{education.year}</p>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {education.certifications.map((cert, index) => (
                      <li key={index} className="space-y-1">
                        <h4 className="font-semibold text-slate-200">{cert.name}</h4>
                        <p className="text-sm text-slate-400">{cert.issuer} • {cert.year}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-slate-400 max-w-2xl mx-auto">
                I'm always open to discussing new projects, opportunities, or just having a chat about AI/ML and data science!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Linkedin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400">LinkedIn</h3>
                    <p className="text-sm text-slate-400">Let's connect professionally</p>
                  </CardContent>
                </Card>
              </a>

              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-400">GitHub</h3>
                    <p className="text-sm text-slate-400">Explore my code</p>
                  </CardContent>
                </Card>
              </a>

              <a
                href={`mailto:${personalInfo.links.email}`}
                className="group"
              >
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400">Email</h3>
                    <p className="text-sm text-slate-400">Drop me a message</p>
                  </CardContent>
                </Card>
              </a>
            </div>
            
            <div className="text-center pt-8">
              <Button
                onClick={handleResumeDownload}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 {personalInfo.name}. Built with passion for innovation.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.links.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;