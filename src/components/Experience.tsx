'use client'

import { Briefcase, Building2, Users, Zap, Calendar, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('experience')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Nymble Leap",
      period: "Mar 2025 – Present",
      location: "Lahore, Pakistan",
      type: "Full-time",
      current: true,
      description: [
        "Developing AI-powered legal research & drafting assistant using LLMs, RAG, and LangChain",
        "Built MVP for AI Voice-Bot reservations (Vapi, Retell, Bland AI)",
        "Automated testing workflows for LLM-based systems to improve reliability"
      ],
      skills: ["LLMs", "RAG", "LangChain", "AI Voice-Bot", "Python"],
      icon: Briefcase,
      gradient: "from-blue-600 to-blue-700"
    },
    {
      title: "Adjunct Faculty",
      company: "Lahore University of Management Sciences",
      period: "Aug 2025 – Present",
      location: "Lahore, Pakistan",
      type: "Contract",
      current: true,
      description: [
        "Leading Bootcamp for MS AI Batch 2025, strengthening students' AI foundations",
        "Designing curriculum for advanced AI concepts and practical applications"
      ],
      skills: ["Teaching", "AI", "Curriculum Design", "Mentoring"],
      icon: Users,
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      title: "Teaching Assistant - AI 602 (LLM Systems)",
      company: "LUMS",
      period: "Jan 2025 – Jul 2025",
      location: "Lahore, Pakistan",
      type: "Part-time",
      current: false,
      description: [
        "Designed labs on LLM quantization, Agentic AI, RAG, fine-tuning, prompt engineering",
        "Supervised capstones across healthcare, education, retail, and legal advisory",
        "Guided end-to-end development of production-ready LLM solutions"
      ],
      skills: ["LLM Systems", "Teaching", "Research", "Project Management"],
      icon: Building2,
      gradient: "from-indigo-600 to-indigo-700"
    },
    {
      title: "Research Intern",
      company: "CITY at LUMS",
      period: "May 2024 – Jun 2025",
      location: "Lahore, Pakistan",
      type: "Internship",
      current: false,
      description: [
        "Built multi-agent path finding for warehouses using fine-tuned GPT-3.5 Turbo controller",
        "Added feedback loop to correct collisions and ensure safe, optimal paths",
        "Generated datasets via BFS and Conflict-Based Search (CBS)"
      ],
      skills: ["Multi-Agent Systems", "Path Finding", "GPT-3.5", "Research"],
      icon: Zap,
      gradient: "from-purple-600 to-purple-700"
    },
    {
      title: "Research Intern",
      company: "Center for Speech and Language Technologies (CSaLT)",
      period: "Jan 2024 – May 2024",
      location: "Lahore, Pakistan",
      type: "Internship",
      current: false,
      description: [
        "Fine-tuned LLMs (Mistral 7B) for medical dialogue and analysis",
        "Built verified dataset; evaluated with BLEU and BERTScore",
        "Contributed to defining reliable model evaluation systems"
      ],
      skills: ["LLM Fine-tuning", "NLP", "Medical AI", "Model Evaluation"],
      icon: Building2,
      gradient: "from-cyan-600 to-cyan-700"
    },
    {
      title: "Brain-Computer Interface Intern",
      company: "LUMS",
      period: "Jul 2024",
      location: "Lahore, Pakistan",
      type: "Internship",
      current: false,
      description: [
        "Worked on ECG/EEG analysis and real-time classification under faculty mentorship",
        "Applied AI/ML algorithms to Brain-Computer Interface challenges"
      ],
      skills: ["BCI", "Signal Processing", "ECG/EEG", "Real-time Systems"],
      icon: Zap,
      gradient: "from-teal-600 to-teal-700"
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From research labs to industry applications, building cutting-edge AI solutions 
            and teaching the next generation of innovators.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block ${
                  exp.current 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}></div>

                {/* Experience Card */}
                <div className="lg:ml-20">
                  <div className="card-modern p-8 group hover:scale-[1.02] transition-all duration-500">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Icon & Status */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="w-full h-full text-white" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          
                          {exp.current && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              Current
                            </div>
                          )}
                          
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-modern p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">2+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
            
            <div className="card-modern p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">300+</h3>
              <p className="text-gray-600 dark:text-gray-300">Students Taught</p>
            </div>
            
            <div className="card-modern p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-300">Research Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  