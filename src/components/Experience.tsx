'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GlassCard } from './ui'

const Experience = () => {
  const experiences = [
    {
      company: "Neural Info Solutions Pvt. Ltd.",
      position: "MERN Stack Developer",
      duration: "July 2024 - Present",
      logo: "/company.png",
      achievements: [
        "Engineered scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN Stack), implementing RESTful APIs and modern architectural patterns.",
        "Collaborated with cross-functional teams to design and implement responsive, user-centric interfaces, enhancing overall user experience.",
        "Optimized application performance by 20% through third-party API integrations and code optimization strategies including caching mechanisms and React component lazy-loading.",
        "Utilized Git and GitHub for version control, ensuring streamlined collaboration and efficient codebase management in an agile development environment."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-950 dark:to-black bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f0f23_1px,transparent_1px),linear-gradient(to_bottom,#0f0f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 hidden lg:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative lg:pl-16 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-0 top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-white dark:border-black group-hover:scale-125 transition-transform duration-300 hidden lg:block shadow-lg shadow-blue-500/50"></div>
                  
                  <GlassCard className="p-6 md:p-8 group-hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Company Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {exp.position}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-800/50 px-3 py-2 rounded-full border border-gray-300/50 dark:border-gray-700/50 whitespace-nowrap">
                        {exp.duration}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                            <span className="text-sm md:text-base leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Used */}
                    <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-800">
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Git', 'RESTful APIs'].map((skill) => (
                          <span key={skill} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 dark:text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
