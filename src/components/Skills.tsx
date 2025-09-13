'use client'

import { Brain, Code, Database, Wrench, Zap, Star, TrendingUp, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      category: "Core Expertise",
      icon: Star,
      gradient: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Natural Language Processing (NLP)", level: 95, description: "Advanced LLM fine-tuning, RAG systems" },
        { name: "Deep Learning", level: 92, description: "PyTorch, TensorFlow, Computer Vision" },
        { name: "Applied Mathematics", level: 90, description: "Statistics, Linear Algebra, Optimization" }
      ]
    },
    {
      category: "Programming Languages",
      icon: Code,
      gradient: "from-emerald-600 to-teal-600",
      skills: [
        { name: "Python", level: 95, description: "Primary language for ML/AI development" },
        { name: "TypeScript", level: 85, description: "Full-stack web development" },
        { name: "JavaScript", level: 85, description: "Frontend and Node.js development" },
        { name: "C/C++", level: 75, description: "Systems programming and algorithms" },
        { name: "SQL", level: 80, description: "Database design and optimization" },
        { name: "HTML/CSS", level: 90, description: "Modern web standards and frameworks" }
      ]
    },
    {
      category: "AI/ML Frameworks",
      icon: Brain,
      gradient: "from-purple-600 to-indigo-600",
      skills: [
        { name: "PyTorch", level: 95, description: "Deep learning and research" },
        { name: "TensorFlow", level: 85, description: "Production ML models" },
        { name: "LangChain", level: 90, description: "LLM application development" },
        { name: "Hugging Face", level: 92, description: "Transformers and model deployment" },
        { name: "scikit-learn", level: 88, description: "Classical ML algorithms" },
        { name: "Pandas", level: 90, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 90, description: "Numerical computing" }
      ]
    },
    {
      category: "Developer Tools",
      icon: Wrench,
      gradient: "from-cyan-600 to-blue-600",
      skills: [
        { name: "Git", level: 90, description: "Version control and collaboration" },
        { name: "Docker", level: 80, description: "Containerization and deployment" },
        { name: "VS Code", level: 95, description: "Primary development environment" },
        { name: "Google Colab", level: 85, description: "ML experimentation and prototyping" },
        { name: "Kaggle", level: 80, description: "Data science competitions" },
        { name: "Streamlit", level: 85, description: "ML app deployment" }
      ]
    }
  ]

  const IconComponent = skillCategories[activeCategory].icon

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Technical Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cutting-edge technologies.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                <CategoryIcon className="w-5 h-5" />
                {category.category}
              </button>
            )
          })}
        </div>

        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="card-modern p-8 mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].gradient} p-4`}>
                <IconComponent className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {skillCategories[activeCategory].category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skillCategories[activeCategory].skills.length} skills in this category
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {skill.description}
                  </p>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].gradient} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-full h-full text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">AI/ML Technologies</div>
          </div>
          
          <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-full h-full text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">6+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Programming Languages</div>
          </div>
          
          <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-full h-full text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Frameworks & Libraries</div>
          </div>
          
          <div className="card-modern p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-full h-full text-white" />
            </div>
            <div className="text-2xl font-bold gradient-text mb-2">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>

        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Collaborate?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's work together to build something amazing with cutting-edge AI and modern web technologies.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}