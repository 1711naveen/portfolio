'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { 
  GoHome, 
  GoProjectRoadmap, 
  GoSun, 
  GoMoon,
  GoX
} from 'react-icons/go';
import { HiMenu } from 'react-icons/hi';
import { TiDocumentText } from "react-icons/ti";
import { IoIosGitBranch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GradientText } from './ui';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { 
    name: 'Home', 
    href: '/', 
    icon: GoHome, 
    section: 'hero',
    description: 'Return to homepage'
  },
  { 
    name: 'About', 
    href: '/#about', 
    icon: MdPerson, 
    section: 'about',
    description: 'Learn about Naveen Yadav\'s background and experience'
  },
  { 
    name: 'Projects', 
    href: '/#projects', 
    icon: GoProjectRoadmap, 
    section: 'projects',
    description: 'View portfolio projects and case studies'
  },
  { 
    name: 'Skills', 
    href: '/#skills', 
    icon: GiSkills, 
    section: 'skills',
    description: 'Explore technical skills and expertise'
  },
  { 
    name: 'Resume', 
    href: '/resume', 
    icon: TiDocumentText, 
    section: null,
    description: 'Download or view professional resume'
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking && !scrollTimeout.current) { // Don't update during click navigation
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 20);
          
          // Update active section based on scroll position with stability
          const sections = [
            { id: 'hero', navSection: 'hero', offset: 0 },
            { id: 'about', navSection: 'about', offset: 50 },
            { id: 'experience', navSection: 'about', offset: 50 },
            { id: 'projects', navSection: 'projects', offset: 50 },
            { id: 'skills', navSection: 'skills', offset: 50 },
            { id: 'contact', navSection: 'skills', offset: 50 }
          ];
          
          let currentNavSection = 'hero';
          const viewportHeight = window.innerHeight;
          const scrollPosition = scrollY + viewportHeight * 0.25; // Use 25% of viewport height as trigger
          
          // Find the section currently in view
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section) {
              const sectionTop = section.offsetTop - sections[i].offset;
              if (scrollPosition >= sectionTop) {
                currentNavSection = sections[i].navSection;
                break;
              }
            }
          }
          
          // Only update if section actually changed to prevent flickering
          setActiveSection(prev => prev !== currentNavSection ? currentNavSection : prev);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.section) {
      // Clear any pending scroll timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      setActiveSection(item.section); // Immediately update active section
      scrollToSection(item.section);
      
      // Prevent scroll detection from overriding for a brief moment
      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 1000); // 1 second delay before scroll detection resumes normal operation
    }
    setIsOpen(false);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'backdrop-blur-md bg-white/80 dark:bg-black/80 shadow-lg border-b border-white/20 dark:border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" onClick={() => scrollToSection('hero')}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl md:text-2xl font-bold cursor-pointer"
              >
                <GradientText>Naveen Yadav.</GradientText>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = item.section === activeSection;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.section ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`relative flex items-center px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 group ${
                          isActive 
                            ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400' 
                            : 'hover:bg-white/20 dark:hover:bg-white/10'
                        }`}
                        aria-label={item.description}
                        title={item.description}
                      >
                        <item.icon className={`mr-2 h-4 w-4 transition-transform ${
                          isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`} />
                        {item.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={false}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10 group"
                        aria-label={item.description}
                        title={item.description}
                      >
                        <item.icon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              {/* GitHub Link */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              >
                <Link
                  href="https://github.com/1711naveen/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-400 text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <IoIosGitBranch className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (navItems.length + 1) * 0.1 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'light' ? (
                  <GoMoon className="h-4 w-4" />
                ) : (
                  <GoSun className="h-4 w-4" />
                )}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'light' ? (
                  <GoMoon className="h-4 w-4" />
                ) : (
                  <GoSun className="h-4 w-4" />
                )}
              </motion.button>

              {/* Hamburger Menu */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/20 dark:bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <GoX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden backdrop-blur-md bg-white/90 dark:bg-black/90 border-t border-white/20 dark:border-white/10"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = item.section === activeSection;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.section ? (
                        <button
                          onClick={() => handleNavClick(item)}
                          className={`relative flex items-center w-full px-4 py-3 rounded-lg text-left text-base font-medium transition-all duration-200 ${
                            isActive 
                              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400' 
                              : 'hover:bg-white/20 dark:hover:bg-white/10'
                          }`}
                          aria-label={item.description}
                          title={item.description}
                        >
                          <item.icon className={`mr-3 h-5 w-5 transition-transform ${
                            isActive ? 'scale-110' : ''
                          }`} />
                          {item.name}
                          {isActive && (
                            <div className="absolute right-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          )}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10"
                          aria-label={item.description}
                          title={item.description}
                        >
                          <item.icon className="mr-3 h-5 w-5" />
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="https://github.com/1711naveen/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center w-full px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-orange-400 to-pink-400 text-white"
                  >
                    <IoIosGitBranch className="mr-3 h-5 w-5" />
                    View Source
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
