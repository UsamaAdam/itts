"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Twitter,
  Calendar,
  FileText,
  Blocks,
  Cpu,
  Braces,
  MessageSquare,
  Smartphone,
  PenTool,
  ShieldCheck,
} from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can add a console.log here if you want to verify it's working
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1a488e] via-[#97b2de] to-[#1a488e]">
            Innovation Through Technology, Success Through Collaboration
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              Telecommunications | IT Infrastructure | Data & Cloud Computing | Cybersecurity
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-[#97b2de] to-[#1a488e] hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a488e] to-[#97b2de]">
                              Our Competencies 
              </span>
              <span className="ml-2 text-white"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Blocks className="w-10 h-10 text-purple-500" />}
                title="Data Center Solutions"
                description="Enterprise-grade data center infrastructure, cloud integration, and managed services engineered for scalability, security, and high availability. Our solutions support mission critical workloads, redundant power, disaster recovery, and 24/7 monitoring, ensuring performance and business continuity at every level."
              />
              <ServiceCard
                icon={<Cpu className="w-10 h-10 text-pink-500" />}
                title="Telecom Solutions"
                description="Advanced telecom services powered by 4G and 4.5G technologies, delivering high-speed, low-latency connectivity. From robust network infrastructure to voice, data, and mobile solutions, we enable seamless communication for enterprises and consumers alike."
              />
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title="IT Infrastructure"
                description="Robust and scalable IT infrastructure services—including networking, servers, hardware solutions, and virtualization designed to ensure business continuity, operational efficiency, and future-ready growth."
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title="Data & Cloud Computing"
                description="Flexible and secure cloud computing for data storage, processing, and analytics. Leverage the power of the cloud to scale effortlessly. Our services support hybrid and multi-cloud environments, enabling seamless integration, real-time collaboration, and enhanced business agility."
              />
              <ServiceCard
                icon={<ShieldCheck className="w-10 h-10 text-purple-500" />}
                title="Cybersecurity"
                description="End-to-end cybersecurity solutions to protect your digital assets offering threat detection, risk assessment, firewall and web application firewall (WAF) implementation, governance compliance, and real-time response to ensure data integrity, regulatory alignment, and business resilience."
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title="Software Development"
                description="Custom software development to your business goals from web and mobile applications to enterprise systems with a focus on performance, usability, and innovation. E-commerce platforms, online shopping portals, we deliver scalable solutions that enhance user experience, and drive digital transformation."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#97b2de] to-[#1a488e]">
              Our Journey
              </span>
              <span className="ml-2 text-white"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Digital Banking & E-Wallet Data Centers"
                description=" We provide fully customized data centers, high availability, disaster recovery. Our infrastructure includes reliable hardware, power, services, and computation resources to support mission-critical financial services with unparalleled uptime and security."
                tags={["DC", "Computation", "E-Wallet", "Banking"]}
              />
              <ProjectCard
                title="5x PCI-DSS, 1x PCI S3, 1x ISO 127001"
                description="We deliver secure and compliant data centers for digital banking and e-wallet services, equipped with 5x PCI-DSS, 1x PCI S3, and 1x ISO 127001 certifications."
                tags={["Compliant", "PCI-DSS 4", "ISO", "GDPR"]}
                image="/images/cross-chain-bridge.jpg"
              />
              <ProjectCard
                title="1x Streaming Data Center"
                description="We provide a comprehensive, high-performance streaming data center solution, offering massive computational resources and full administration. Our services ensure management, and security for the entire data center, enabling streaming operations with top-tier reliability and protection."
                tags={["Servers", "Load balancing", "Live"]}
                image="/images/decentralized-identity.jpg"
              />
              <ProjectCard
                title="2x Cybersecurity"
                description="Providing blue teaming services for a major telecom company, we adopted open-source solutions such as SIEM, PAM, and IAM, alongside enterprise EDR and MFA systems. Westrengthened their security posture, enabling proactive defense and threat monitoring for enhanced and protection."
                tags={["WAF", "Firewall", "XDR/EDR", "PAM/SIEM"]}
                image="/images/solidity-generator.jpg"
              />
                <ProjectCard
                title="7x Business setup"
                description="We facilitated the complete business setup for 7 companies, handling company registration and providing end-to-end services, including supply chain, procurement, recruitment, office equipment setup, and network. Our approach ensured smooth operations from day one, efficient business launch and growth."
                tags={["Registration", "Office", "Bank account"]}
                image="/images/solidity-generator.jpg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a488e] to-[#97b2de]">
              Please reach out to us
              </span>
              <span className="ml-2 text-white"></span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Send Message
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Prefer to schedule a meeting?</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
    href="mailto:contact@the-itts.com?subject=Meeting%20Request&body=Hi%2C%0D%0A%0D%0AI%20would%20like%20to%20schedule%20a%20meeting.%20Please%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThanks!"

                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="https://drive.google.com/file/d/12aOAJIbVOmOiUWIdMRiMthJlUWGG-pk2/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/company/the-itts/" label="LinkedIn" />
            <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault()
                // You can add a console.log here if you want to verify it's working
                console.log("Mobile icon click prevented")
              }}
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} ITTS All rights reserved.</p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">{title}</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">{description}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:contact@the-itts.com" className="text-purple-400 hover:text-purple-300">
        contact@the-itts.com
      </a>
      <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 block mt-1">
    +964 750 197 5006
  </a>
    </div>
  )
}

