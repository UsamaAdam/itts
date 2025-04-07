
"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    company: "Guided by innovation",
    role: "Design and planning",
    period: "Time management",
    location: "Regional and Global",
    type: "Future-Oriented",
    logo: "/file.svg",
    skills: ["Blueprinting", "Creativity", "Adaptability"],
  },
  {
    id: 2,
    company: "Driven by experiences",
    role: "Implementation and Deployment",
    period: "Match Deadlines",
    location: "Remote collaboration",
    type: "24/7 Support",
    logo: "/data.svg",
    skills: ["Accomplishment", "Efficiency", "Excellency"],
  },
]

const skillsData = {
  "Cyber Security": [
    { name: "Firewall", proficiency: 95 },
    { name: "WAF", proficiency: 95 },
    { name: "Networking", proficiency: 85 },
    { name: "EDR/XDR", proficiency: 88 },
    { name: "PAM, SIEM, IAM", proficiency: 90 },
    { name: "Red & Blue Teaming", proficiency: 95 },

  ],
  "Data & Cloud Computing": [
    { name: "Virtualization Solutions", proficiency: 95 },
    { name: "AWS", proficiency: 90 },
    { name: "Google Cloud", proficiency: 90 },
    { name: "VPS", proficiency: 85 },
  ],
  Software: [
    { name: "Laravel", proficiency: 98 },
    { name: "NextJS", proficiency: 88 },
    { name: "Open Source", proficiency: 95 },
    { name: "Python", proficiency: 93 },
    { name: "containerization", proficiency: 94 },
    { name: "AI/ML", proficiency: 85 },


  ],
}
export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a488e] to-[#97b2de]">
              About us
            </span>
            <span className="ml-2"></span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
              <div className="relative w-full h-full mx-auto intense-glow">
        <Image
          src="https://i.postimg.cc/nhVsjt7m/xyz3-Photoroom.png"
          alt="LOGO"
          fill
          className="rounded-lg object-cover z-10"
        />
</div>

              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                At <strong>ITTS</strong>we specialize in delivering innovative and reliable technology solutions across data center infrastructure, telecom services, IT solutions, and cloud computing. Our enterprise-grade offerings are designed to support mission-critical operations, ensuring scalability, performance, security, and business continuity. From advanced networking and high-speed connectivity to robust cybersecurity and custom software development, we help businesses optimize their operations and protect their digital assets. With a customer-first approach, we tailor solutions to drive digital transformation, improve productivity, and empower growth, ensuring that your business remains competitive and future-ready.
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                     <strong>Hello from ITTS</strong>
                  </p>
                  <p className="mb-4">
                  At <strong>ITTS</strong>  we specialize in providing innovative and reliable technology solutions designed to meet the evolving needs of businesses across various industries. Our expertise spans data center infrastructure, telecom services, IT solutions, and cloud computing, enabling organizations to scale with confidence while ensuring performance, security, and business continuity.{" "}
                  </p>
                  <p className="mb-4">
                  We are dedicated to delivering enterprise-grade solutions that support mission-critical operations and offer flexibility to adapt to the future. From advanced networking and high-speed connectivity to robust cybersecurity and custom software development, our services are designed to enhance operational efficiency and protect digital assets.{" "}                  </p>
                  <p>
                  With a customer-first approach, we partner with businesses to build tailored solutions that drive digital transformation, improve productivity, and empower growth. Whether you're looking to modernize your infrastructure, optimize your cloud environment, or innovate your software applications, we are here to help you achieve your goals.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#97b2de] to-[#1a488e]">
              Our strategy
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={56}
                            height={56}
                            className="rounded-full"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < timelineData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a488e] to-[#97b2de]">
                Our Team's Forge
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                  <h4 className="text-xl font-bold mb-4 text-purple-400 text-center md:text-left">{category}</h4>
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({ name, proficiency }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  )
}

