'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiLeetcode, SiCodeforces } from "react-icons/si"
import { GlassCard, AnimatedButton } from './ui'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/1711naveen',
      icon: FaGithub,
      color: 'text-gray-400 hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/naveenyadav1711',
      icon: FaLinkedin,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/1711naveen',
      icon: SiLeetcode,
      color: 'text-yellow-500 hover:text-yellow-400'
    },
    {
      name: 'Email',
      href: 'mailto:naveenyadav1711@gmail.com',
      icon: FaEnvelope,
      color: 'text-red-500 hover:text-red-400'
    },
    {
      name: 'Codeforces',
      href: 'https://codeforces.com/profile/1711naveen',
      icon: SiCodeforces,
      color: 'text-blue-600 hover:text-blue-500'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/naveen1711',
      icon: FaXTwitter,
      color: 'text-gray-400 hover:text-white'
    }
  ]

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'naveenyadav1711@gmail.com',
      href: 'mailto:naveenyadav1711@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f23_1px,transparent_1px),linear-gradient(to_bottom,#0f0f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

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
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss how we can work together to create something amazing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you want to discuss a potential collaboration or just say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <info.icon className="text-xl text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                    <Link 
                      href={info.href}
                      className="text-white hover:text-blue-400 transition-colors text-sm md:text-base"
                    >
                      {info.value}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full aspect-square bg-gray-800/50 rounded-xl border border-gray-700/50 flex items-center justify-center hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className={`text-2xl transition-colors duration-300 ${social.color}`} />
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {social.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Let&apos;s turn your vision into reality. Contact me today to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resume">
                <AnimatedButton className="px-8 py-3 text-white font-medium">
                  Download Resume
                </AnimatedButton>
              </Link>
              <Link href="mailto:naveenyadav1711@gmail.com">
                <AnimatedButton 
                  variant="outline" 
                  className="px-8 py-3 text-white font-medium border-blue-500/50 hover:bg-blue-500/10"
                >
                  <FaEnvelope className="mr-2" />
                  Email Me
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
