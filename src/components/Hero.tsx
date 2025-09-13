'use client'

import Image from 'next/image'
import imgSrc from '../assets/IMG_0970.jpeg'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import Background3D from './Background3D'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-cyan-100/20 dark:from-blue-900/20 dark:to-cyan-900/20"></div>
        
        {/* 3D Background Animation */}
        <Background3D />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">✨ Available for new opportunities</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Safiullah</span>
                <br />
                <span className="text-gray-900 dark:text-white">Sarfraz</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                ML Engineer crafting the future with{' '}
                <span className="gradient-text font-semibold">AI & LLMs</span>
                {' '}• Teaching the next gen at LUMS 🎓
              </p>
              
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
                Turning complex problems into elegant solutions through machine learning, 
                generative AI, and full-stack development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:sarfrazsafiullah3@gmail.com" 
                className="btn-primary inline-flex items-center justify-center gap-2 text-center"
              >
                <Mail size={20} />
                Email
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/safiullah-sarfraz-937149273/" 
                  className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
                <a 
                  href="mailto:sarfrazsafiullah3@gmail.com" 
                  className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Mail size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
                <a 
                  href="tel:+923099889595" 
                  className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Phone size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full animate-spin-slow opacity-50 blur-md delay-1000"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 p-2">
        <Image
          src={imgSrc}
                  alt="Safiullah Sarfraz"
                  width={400}
                  height={400}
                  className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3.99</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">GPA</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">AI/ML</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  )
}

