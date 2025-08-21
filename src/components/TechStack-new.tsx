'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  DiJavascript1, 
  DiNodejs, 
  DiReact, 
  DiMongodb, 
  DiGit, 
  DiPython, 
  DiJava 
} from 'react-icons/di'
import { 
  SiNextdotjs, 
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiVisualstudiocode,
  SiGithub,
  SiFigma,
  SiDocker,
  SiSpringboot,
  SiMysql,
  SiRedis
} from 'react-icons/si'
import { CgCPlusPlus } from 'react-icons/cg'
import { BiLogoPostgresql } from 'react-icons/bi'

const TechStack = () => {
  const languages = [
    { Icon: DiJava, name: 'Java', color: 'text-red-500', level: 90 },
    { Icon: CgCPlusPlus, name: 'C++', color: 'text-blue-500', level: 85 },
    { Icon: DiPython, name: 'Python', color: 'text-yellow-500', level: 80 },
    { Icon: DiJavascript1, name: 'JavaScript', color: 'text-yellow-400', level: 85 },
    { Icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400', level: 80 },
  ]

  const frontend = [
    { Icon: DiReact, name: 'React.js', color: 'text-cyan-400', level: 85 },
    { Icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-100', level: 80 },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-teal-400', level: 90 },
  ]

  const backend = [
    { Icon: DiNodejs, name: 'Node.js', color: 'text-green-500', level: 80 },
    { Icon: SiExpress, name: 'Express.js', color: 'text-gray-300', level: 80 },
    { Icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-400', level: 75 },
    { Icon: DiMongodb, name: 'MongoDB', color: 'text-green-600', level: 80 },
    { Icon: SiMysql, name: 'MySQL', color: 'text-blue-500', level: 75 },
    { Icon: BiLogoPostgresql, name: 'PostgreSQL', color: 'text-blue-400', level: 70 },
    { Icon: SiRedis, name: 'Redis', color: 'text-red-500', level: 65 },
  ]

  const tools = [
    { Icon: DiGit, name: 'Git', color: 'text-orange-500', level: 85 },
    { Icon: SiGithub, name: 'GitHub', color: 'text-gray-100', level: 90 },
    { Icon: SiVisualstudiocode, name: 'VS Code', color: 'text-blue-500', level: 90 },
    { Icon: SiPostman, name: 'Postman', color: 'text-orange-400', level: 80 },
    { Icon: SiFigma, name: 'Figma', color: 'text-purple-400', level: 70 },
    { Icon: SiDocker, name: 'Docker', color: 'text-blue-400', level: 65 },
  ]

  const skillCategories = [
    { title: 'Languages', skills: languages, gradient: 'from-red-500 to-orange-500' },
    { title: 'Frontend', skills: frontend, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', skills: backend, gradient: 'from-green-500 to-teal-500' },
    { title: 'Tools', skills: tools, gradient: 'from-purple-500 to-pink-500' },
  ]

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-300">
            <skill.Icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="w-full">
          <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h3>
          
          {/* Skill Level Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            />
          </div>
          <span className="text-xs text-gray-400">{skill.level}%</span>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f23_1px,transparent_1px),linear-gradient(to_bottom,#0f0f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4"></div>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-16 last:mb-0"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h3>
              <div className={`w-16 h-1 bg-gradient-to-r ${category.gradient} mx-auto`}></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Programming Languages', value: '5+' },
              { label: 'Frameworks', value: '8+' },
              { label: 'Tools & Technologies', value: '15+' },
              { label: 'Years of Experience', value: '2+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
