'use client'

import { Rocket, Brain, Eye, TrendingUp, Database, Users, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "LLM Grader – Automated Assignment Evaluation System",
      period: "Jan 2025 – May 2025",
      category: "ai-ml",
      featured: true,
      description: [
        "AI-powered grading system using LLMs to evaluate Jupyter Notebook assignments",
        "Handled zipped submissions, late penalties, and generated personalized PDF feedback",
        "Securely shared reports via OneDrive; produced consolidated grade files for LMS",
        "Reduced weekly grading effort by ~95% for 100+ submissions"
      ],
      technologies: ["LLMs", "Python", "PDF Generation", "OneDrive API", "Automation"],
      icon: Brain,
      gradient: "from-blue-600 to-cyan-600",
      link: "#",
      github: "#"
    },
    {
      title: "Model Compression Techniques for Deep Learning",
      period: "Nov 2024",
      category: "ai-ml",
      featured: true,
      description: [
        "Implemented pruning, quantization, and knowledge distillation on VGG architectures",
        "Applied unstructured and structured pruning by channel removal based on L2 norms",
        "Compared Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT)",
        "Used logit matching, hint-based distillation, and contrastive representation distillation"
      ],
      technologies: ["PyTorch", "Model Compression", "VGG", "CIFAR-100", "Knowledge Distillation"],
      icon: Brain,
      gradient: "from-purple-600 to-indigo-600",
      link: "#",
      github: "#"
    },
    {
      title: "Landmark 3D Reconstruction and App Deployment",
      period: "Nov 2024 - Dec 2024",
      category: "computer-vision",
      featured: false,
      description: [
        "Developed 3D reconstruction system for landmarks using computer vision techniques",
        "Implemented SIFT for key point detection and FLANN-based KNN matcher",
        "Applied Structure from Motion (SfM) and linear triangulation for 3D point clouds",
        "Deployed as interactive feature in Android app using Flutter Cube"
      ],
      technologies: ["Computer Vision", "SIFT", "SfM", "Flutter", "Android", "3D Reconstruction"],
      icon: Eye,
      gradient: "from-emerald-600 to-teal-600",
      link: "#",
      github: "#"
    },
    {
      title: "Course Recommendation System Using RAG",
      period: "May 2024",
      category: "ai-ml",
      featured: false,
      description: [
        "Developed course and instructor recommendation system using RAG pipeline",
        "Scraped and preprocessed course reviews from university discussion forum",
        "Utilized vector databases for efficient information retrieval",
        "Integrated workload and course material feedback for personalized recommendations"
      ],
      technologies: ["RAG", "Vector Databases", "NLP", "Web Scraping", "Recommendation Systems"],
      icon: Database,
      gradient: "from-blue-600 to-purple-600",
      link: "#",
      github: "#"
    },
    {
      title: "Unit Linked Insurance Product Design",
      period: "Jun 2024 – Jul 2024",
      category: "finance",
      featured: false,
      description: [
        "Designed Unit Linked Insurance Product (ULIP) for hypothetical company Ascend",
        "Assumed 12% expected return rate and developed allocation percentages over time",
        "Conducted sensitivity analysis showing policyholder satisfaction correlation",
        "Recommended revised structure for higher initial allocations to capture market share"
      ],
      technologies: ["Financial Modeling", "Risk Analysis", "Excel", "Statistical Analysis"],
      icon: TrendingUp,
      gradient: "from-green-600 to-emerald-600",
      link: "#",
      github: "#"
    },
    {
      title: "Succession Planning Software Platform",
      period: "Jan 2024 – May 2024",
      category: "web-dev",
      featured: false,
      description: [
        "Developed ML-driven HR management platform in collaboration with Devsinc",
        "Engineered predictive models to assess employee performance KPIs",
        "Implemented role-based access control, 2FA, and data encryption",
        "Integrated mentor-mentee matching and personalized training recommendations"
      ],
      technologies: ["Machine Learning", "MERN Stack", "Security", "HR Analytics", "Predictive Modeling"],
      icon: Users,
      gradient: "from-indigo-600 to-blue-600",
      link: "#",
      github: "#"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-ml', label: 'AI & ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'computer-vision', label: 'Computer Vision', count: projects.filter(p => p.category === 'computer-vision').length },
    { id: 'web-dev', label: 'Web Development', count: projects.filter(p => p.category === 'web-dev').length },
    { id: 'finance', label: 'Finance', count: projects.filter(p => p.category === 'finance').length }
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning AI/ML, computer vision, finance, and web development. 
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-modern p-8 group hover:scale-[1.02] transition-all duration-500 h-full">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''} gap-6 h-full`}>
                  {/* Icon & Meta */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-full h-full text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                        <Tag className="w-3 h-3" />
                        {categories.find(c => c.id === project.category)?.label}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <ul className="space-y-2">
                        {project.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-auto">
                      <a 
                        href={project.link}
                        className="flex-1 btn-primary inline-flex items-center justify-center gap-2 text-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                      <a 
                        href={project.github}
                        className="flex-1 btn-secondary inline-flex items-center justify-center gap-2 text-center"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technology Areas</div>
            </div>
            <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency Gained</div>
            </div>
            <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Users Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  