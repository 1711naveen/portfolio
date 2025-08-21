'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaHeart } from 'react-icons/fa';
import { GlassCard, GradientText, LoadingSpinner } from './ui';
import { fetchGitHubUser, GitHubUser, fetchLeetCodeStats, LeetCodeStats } from '@/lib/api';

const About = () => {
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [leetCodeStats, setLeetCodeStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [github, leetCode] = await Promise.all([
          fetchGitHubUser('1711naveen'),
          fetchLeetCodeStats('1711naveen')
        ]);
        
        setGithubData(github);
        setLeetCodeStats(leetCode);
      } catch (error) {
        console.error('Failed to load data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const achievements = [
    {
      icon: FaCode,
      title: "600+ Problems Solved",
      description: "On LeetCode with consistent daily practice",
      value: leetCodeStats?.totalSolved || "600+",
      color: "text-yellow-400"
    },
    {
      icon: FaTrophy,
      title: "Max Rating 1558",
      description: "Achieved through competitive programming",
      value: leetCodeStats?.reputation || "1558",
      color: "text-purple-400"
    },
    {
      icon: FaGraduationCap,
      title: "7.69 CGPA",
      description: "In Mechanical Engineering (MMMUT)",
      value: "7.69",
      color: "text-blue-400"
    },
    {
      icon: FaHeart,
      title: `${githubData?.public_repos || "20+"} Repositories`,
      description: "Open source projects on GitHub",
      value: githubData?.public_repos || "20+",
      color: "text-pink-400"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Java", "C++", "Python", "JavaScript", "TypeScript"], level: 90 },
    { category: "Frontend", items: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS"], level: 85 },
    { category: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "MongoDB"], level: 80 },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"], level: 75 }
  ];

  return (
    <section id="about" className="section bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-xl font-bold mb-6">
            Introduction - <GradientText>About Me</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Hi, I&apos;m <GradientText className="font-semibold">Naveen Yadav</GradientText>, a{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      MERN Stack Developer
                    </span>{" "}
                    with a passion for technology. I currently work at{" "}
                    <span className="font-semibold">Neural Info Solutions Pvt. Ltd.</span>, where I 
                    develop and maintain scalable web applications.
                  </p>
                  
                  <p>
                    I graduated in <span className="font-semibold">Mechanical Engineering</span> from{" "}
                    <span className="font-semibold">Madan Mohan Malaviya University of Technology</span> in 
                    2023 with a CGPA of <span className="text-blue-500 font-semibold">7.69</span>. 
                    Although my degree is in Mechanical Engineering, I discovered my love for programming 
                    in my first year with a simple &quot;Hello World&quot; in C.
                  </p>

                  <p>
                    I am fluent in languages like{" "}
                    <GradientText className="font-semibold">C, C++, Java, and Python</GradientText> with 
                    Java as my preferred language. I am also skilled in frontend technologies such as{" "}
                    <span className="font-semibold">HTML, CSS, JavaScript, React.js, and Next.js</span>, 
                    as well as backend frameworks like{" "}
                    <span className="font-semibold">Express.js and Spring Boot</span>.
                  </p>

                  <p>
                    Driven by a passion for problem-solving, I have solved over{" "}
                    <span className="text-yellow-500 font-bold">
                      {leetCodeStats?.totalSolved || "600"} problems
                    </span> on{" "}
                    <a 
                      href="https://leetcode.com/u/1711naveen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-400 underline font-semibold"
                    >
                      LeetCode
                    </a> with a maximum rating of{" "}
                    <span className="text-purple-500 font-bold">
                      {leetCodeStats?.reputation || "1558"}
                    </span>.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <GradientText>Technical Skills</GradientText>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-lg">{skill.category}</h4>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-8">
            {/* GitHub Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-6">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <LoadingSpinner size="lg" />
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-4">
                      <GradientText>GitHub Stats</GradientText>
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Repositories</span>
                        <span className="font-bold text-blue-500">
                          {githubData?.public_repos || 0}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Followers</span>
                        <span className="font-bold text-purple-500">
                          {githubData?.followers || 0}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Following</span>
                        <span className="font-bold text-pink-500">
                          {githubData?.following || 0}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </GlassCard>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlassCard className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  <GradientText>Key Achievements</GradientText>
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 dark:bg-black/20"
                    >
                      <div className={`p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20`}>
                        <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{achievement.title}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;