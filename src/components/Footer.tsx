'use client'

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Sparkles, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" }
  ]

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/safiullah-sarfraz-937149273/", 
      icon: Linkedin, 
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-700"
    },
    { 
      href: "https://www.instagram.com/1safiullah_/", 
      icon: Instagram, 
      label: "Instagram",
      gradient: "from-pink-600 to-purple-600"
    },
    { 
      href: "https://www.facebook.com/safiullah.sarfraz.1/", 
      icon: Facebook, 
      label: "Facebook",
      gradient: "from-blue-700 to-blue-800"
    },
    { 
      href: "mailto:sarfrazsafiullah3@gmail.com", 
      icon: Mail, 
      label: "Email",
      gradient: "from-gray-600 to-gray-700"
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
                <Sparkles className="w-full h-full text-white" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">Safiullah Sarfraz</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              ML Engineer crafting the future with AI & LLMs. Teaching the next generation 
              while building innovative solutions that make a difference.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+923099889595" className="hover:text-blue-400 transition-colors">
                  +92 3099889595
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:sarfrazsafiullah3@gmail.com" className="hover:text-blue-400 transition-colors">
                  sarfrazsafiullah3@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Connect With Me</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${social.gradient} p-2 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>&copy; {new Date().getFullYear()} Safiullah Sarfraz. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in Pakistan</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </footer>
  )
}

