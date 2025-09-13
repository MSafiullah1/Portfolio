'use client'

import { Brain, Code, TrendingUp, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function About() {
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

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about generative models, LLMs, and transformers. Building real-world applications with RAG systems and chatbots.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Full-Stack Development", 
      description: "Experienced in scalable web applications using the MERN stack, with a focus on clean, maintainable code.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Computational Finance",
      description: "Exploring the intersection of AI and finance through algorithmic trading, portfolio management, and quantitative analysis.",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-900 dark:to-indigo-900/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Get to know me
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ML Engineer and CS graduate from LUMS with a passion for turning complex problems 
            into elegant AI solutions. Currently teaching the next generation while building the future.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="card-modern p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a Machine Learning Engineer and recent Computer Science graduate from LUMS 
                  with a minor in Computational Finance. With a <strong className="gradient-text">Major GPA of 3.99/4.00</strong>, 
                  I've consistently pushed the boundaries of what's possible with AI and ML.
                </p>
                <p>
                  My experience spans developing cutting-edge AI models in natural language processing, 
                  computer vision, and deep learning. I'm particularly passionate about generative models 
                  like Stable Diffusion, language models, and transformers.
                </p>
                <p>
                  Beyond technology, I'm deeply interested in finance and the stock market—especially 
                  the intersection of AI and finance through algorithmic trading, portfolio management, 
                  and quantitative analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3.99</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Major GPA</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4.0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Minor GPA</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Research Projects</div>
              </div>
              <div className="card-modern p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Teaching</div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className={`grid md:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="card-modern p-8 group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ready to collaborate on cutting-edge AI projects or discuss innovative solutions? 
              I'm always excited to connect with fellow innovators and problem-solvers.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
  
  