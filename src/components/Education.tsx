'use client'

import { GraduationCap, Award, BookOpen, Sparkles, Calendar, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Education() {
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

    const section = document.getElementById('education')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const educations = [
    {
      period: "2021 - 2025",
      degree: "BS in Computer Science",
      institution: "Lahore University of Management Sciences",
      location: "Lahore, Pakistan",
      gpa: "3.99/4.00",
      cgpa: "3.95/4.00",
      honors: ["Dean's Honour List (2021-2025)", "Award of High Distinction"],
      courses: ["Advanced ML", "Computer Vision", "Generative AI", "Deep Learning", "Big Data & MLOps", "Algorithms", "Operating Systems"],
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-500",
      type: "major"
    },
    {
      period: "2021 - 2025",
      degree: "Minor in Computational Finance",
      institution: "Lahore University of Management Sciences",
      location: "Lahore, Pakistan",
      gpa: "4.00/4.00",
      cgpa: "",
      honors: ["Perfect GPA"],
      courses: ["Quantitative Finance", "Actuarial Science", "Portfolio Management", "Financial Derivatives", "Mathematics of Finance"],
      icon: BookOpen,
      gradient: "from-emerald-500 to-teal-500",
      type: "minor"
    },
    {
      period: "2017 - 2021",
      degree: "Cambridge A-Levels",
      institution: "Aitchison College",
      location: "Lahore, Pakistan",
      gpa: "",
      cgpa: "",
      honors: ["Academic Blazer Award", "2nd Position Punjab Physics Tournament"],
      courses: ["Physics (A*)", "Chemistry (A*)", "Biology (A)", "Mathematics (A)"],
      icon: Award,
      gradient: "from-indigo-500 to-purple-500",
      type: "secondary"
    }
  ]

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Academic Journey
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of academic excellence, consistently pushing boundaries and achieving top honors 
            in computer science and computational finance.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block"></div>

          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div 
                key={index}
                className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"></div>

                {/* Education Card */}
                <div className="lg:ml-20">
                  <div className="card-modern p-8 group hover:scale-[1.02] transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon & Period */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <edu.icon className="w-full h-full text-white" />
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-300 mb-2">
                              <MapPin className="w-4 h-4" />
                              {edu.institution}
                            </div>
                            {edu.location && (
                              <p className="text-gray-500 dark:text-gray-400">{edu.location}</p>
                            )}
                          </div>

                          {/* GPA Display */}
                          {edu.gpa && (
                            <div className="mt-4 lg:mt-0">
                              <div className="text-right">
                                <div className="text-2xl font-bold gradient-text">{edu.gpa}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {edu.type === 'major' ? 'Major GPA' : edu.type === 'minor' ? 'Minor GPA' : 'GPA'}
                                </div>
                                {edu.cgpa && (
                                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    CGPA: {edu.cgpa}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Honors */}
                        {edu.honors.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Honors & Awards</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.honors.map((honor, i) => (
                                <span 
                                  key={i}
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-medium"
                                >
                                  <Sparkles className="w-3 h-3" />
                                  {honor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key Courses */}
                        {edu.courses.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Courses</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, i) => (
                                <span 
                                  key={i}
                                  className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="card-modern p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Academic Excellence</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">3.99</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Major GPA</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4.0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Minor GPA</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dean's List</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  