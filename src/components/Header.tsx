'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  if (!mounted) return null

  const navItems = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👨‍💻" },
    { href: "#education", label: "Education", icon: "🎓" },
    { href: "#experience", label: "Experience", icon: "💼" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#skills", label: "Skills", icon: "⚡" },
    { href: "#contact", label: "Contact", icon: "📬" },
  ]

  const NavItems = ({ mobile = false }) => (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`group relative transition-all duration-300 ${
              mobile 
                ? 'flex items-center gap-3 text-lg py-3 px-4 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/50' 
                : 'px-4 py-2 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/50'
            } text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium`}
            onClick={() => mobile && setMobileMenuOpen(false)}
          >
            {mobile && <span className="text-xl">{item.icon}</span>}
            {item.label}
            {!mobile && (
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            )}
          </Link>
        </li>
      ))}
    </>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
          >
            <Sparkles className="w-6 h-6 text-indigo-500 group-hover:rotate-12 transition-transform duration-300" />
            Safiullah Sarfraz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              <NavItems />
            </ul>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl glass hover:scale-110 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass hover:scale-110 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] glass border-l border-white/20 dark:border-gray-800/50 p-6 animate-fade-in-right">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold gradient-text flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Menu
                </h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {/* Navigation */}
              <ul className="space-y-2">
                <NavItems mobile />
              </ul>

              {/* Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  <p>Made with ❤️ by Safiullah</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

