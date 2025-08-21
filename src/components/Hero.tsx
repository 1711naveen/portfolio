'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { AnimatedButton, GradientText } from './ui';
import { fetchLeetCodeStats, LeetCodeStats } from '@/lib/api';

const Hero = () => {
  const [leetCodeStats, setLeetCodeStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    const loadLeetCodeStats = async () => {
      try {
        const stats = await fetchLeetCodeStats('1711naveen');
        setLeetCodeStats(stats);
      } catch (error) {
        console.error('Failed to load LeetCode stats:', error);
      }
    };

    loadLeetCodeStats();
  }, []);

  const socialLinks = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/1711naveen',
      icon: SiLeetcode,
      color: 'hover:text-yellow-400',
      stats: leetCodeStats ? `${leetCodeStats.totalSolved} solved` : null
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/naveenyadav1711',
      icon: FaLinkedin,
      color: 'hover:text-blue-400',
      stats: null
    },
    {
      name: 'GitHub',
      url: 'https://github.com/1711naveen',
      icon: FaGithub,
      color: 'hover:text-gray-400',
      stats: null
    },
    {
      name: 'Email',
      url: 'mailto:naveenyadav1711@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-red-400',
      stats: null
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">
                Hi, I am
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <GradientText>Naveen Yadav</GradientText>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200"
            >
              <span>I am </span>
              <GradientText>
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'MERN Stack Expert',
                      'Problem Solver',
                      'LeetCode Enthusiast',
                      'Tech Innovator'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </GradientText>
            </motion.div>

            {/* Brief Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
            >
              Passionate MERN Stack Developer with expertise in building scalable web applications. 
              I&apos;ve solved <strong>{leetCodeStats?.totalSolved || '600+'}</strong> problems on LeetCode 
              and love turning complex ideas into elegant solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/resume" target="_blank">
                <AnimatedButton size="lg" className="w-full sm:w-auto">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download Resume
                </AnimatedButton>
              </Link>
              
              <Link href="#projects">
                <AnimatedButton variant="outline" size="lg" className="w-full sm:w-auto">
                  <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                  View Projects
                </AnimatedButton>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-300 ${link.color} hover:bg-white/20 dark:hover:bg-white/20 hover:border-white/30 dark:hover:border-white/30`}
                >
                  <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium">{link.name}</span>
                  {link.stats && (
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {link.stats}
                    </span>
                  )}
                </motion.a>
              ))}
            </motion.div>

            {/* Quick Stats */}
            {leetCodeStats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-500">
                    {leetCodeStats.totalSolved}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Problems Solved
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-500">
                    {leetCodeStats.acceptanceRate.toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Acceptance Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-500">
                    #{leetCodeStats.ranking.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Global Rank
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-500">
                    {leetCodeStats.reputation}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Max Rating
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl scale-110" />
              
              {/* Profile image */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
                className="relative z-10"
              >
                <Image
                  src="/home.png"
                  alt="Naveen Yadav"
                  width={400}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: 'linear'
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm opacity-60"
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: 'linear'
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm opacity-60"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;