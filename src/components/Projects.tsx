'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCalendarAlt, FaCode } from 'react-icons/fa';
import { GlassCard, GradientText, LoadingSpinner, AnimatedButton } from './ui';
import { fetchGitHubRepos, GitHubRepo } from '@/lib/api';
import { getTimeAgo } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark/light themes, smooth animations, and API integrations for dynamic content.',
    image: '/home.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'API Integration'],
    github: 'https://github.com/1711naveen/portfolio',
    live: 'https://naveen17.vercel.app/',
    featured: true
  },
  {
    id: 2,
    title: 'Dealer Management API',
    description: 'A comprehensive REST API for managing dealers, vehicles, and payment processing with JWT authentication. Features complete CRUD operations, Spring Security, and PostgreSQL integration.',
    image: '/dealers-backend-image.png',
    technologies: ['Spring Boot', 'Java 17', 'PostgreSQL', 'JWT', 'Swagger', 'Docker'],
    github: 'https://github.com/1711naveen/dealer-management-api',
    live: 'https://dealer-management-api.onrender.com/swagger-ui.html',
    featured: true
  },
  {
    id: 3,
    title: 'Algorithm Visualizer',
    description: 'Interactive tool for visualizing sorting and searching algorithms. Helps students and developers understand algorithm behavior through step-by-step animations.',
    image: '/algorithm.jpeg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Animation'],
    github: 'https://github.com/1711naveen/Sorting-Visualiser',
    live: 'https://your-algorithm-visualizer.vercel.app/',
    featured: true
  }
];

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');

  useEffect(() => {
    const loadGitHubRepos = async () => {
      try {
        const repos = await fetchGitHubRepos('1711naveen');
        // Filter out forks and get most relevant repositories
        const filteredRepos = repos
          .filter(repo => !repo.name.includes('fork') && repo.description)
          .slice(0, 6);
        setGithubRepos(filteredRepos);
      } catch (error) {
        console.error('Failed to load GitHub repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGitHubRepos();
  }, []);

  const getTechColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
      'TypeScript': 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
      'Python': 'bg-green-500/20 text-green-600 dark:text-green-400',
      'Java': 'bg-red-500/20 text-red-600 dark:text-red-400',
      'HTML': 'bg-orange-500/20 text-orange-600 dark:text-orange-400',
      'CSS': 'bg-blue-400/20 text-blue-500 dark:text-blue-300',
      'React': 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
      'Next.js': 'bg-gray-500/20 text-gray-600 dark:text-gray-400',
      'Node.js': 'bg-green-600/20 text-green-700 dark:text-green-300',
    };
    return colors[tech] || 'bg-purple-500/20 text-purple-600 dark:text-purple-400';
  };

  return (
    <section id="projects" className="section bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-xl font-bold mb-6">
            A small selection of <GradientText>recent projects</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 dark:bg-black/20 rounded-full p-2 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('featured')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'featured'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                Featured Projects
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                All Repositories
              </button>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {activeTab === 'featured' && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlassCard className="p-0 overflow-hidden h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <AnimatedButton variant="outline" size="sm" className="w-full">
                          <FaGithub className="mr-2 h-4 w-4" />
                          Code
                        </AnimatedButton>
                      </Link>
                      {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <AnimatedButton size="sm" className="w-full">
                            <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                            Live
                          </AnimatedButton>
                        </Link>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* All GitHub Repositories */}
        {activeTab === 'all' && (
          <div className="space-y-6">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {githubRepos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6 h-full group hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-500/20 rounded-lg">
                            <FaCode className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-purple-500 transition-colors">
                              {repo.name}
                            </h3>
                            <p className="text-sm text-gray-500 flex items-center">
                              <FaCalendarAlt className="mr-1 h-3 w-3" />
                              Updated {getTimeAgo(repo.updated_at)}
                            </p>
                          </div>
                        </div>
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <FaExternalLinkAlt className="h-4 w-4 text-gray-500 hover:text-purple-500" />
                        </Link>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {repo.description || 'No description provided'}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          {repo.language && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTechColor(repo.language)}`}>
                              {repo.language}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <span className="flex items-center">
                            <FaStar className="mr-1 h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center">
                            <FaCodeBranch className="mr-1 h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* View All GitHub Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/1711naveen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton size="lg">
              <FaGithub className="mr-2 h-5 w-5" />
              View All on GitHub
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
