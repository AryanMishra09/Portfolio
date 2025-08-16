"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: 1,
    company: "Medecro",
    role: "SDE-1",
    period: "08/2025 – Present",
    location: "Noida",
    type: "Full-time",
    description: "Sole backend owner for the company's health-tech suite (CMS, PMS, EHR, AI Radiology)",
    achievements: [
      "Scaled backend to support 3× more concurrent users without performance loss",
      "Launched key modules like real-time appointment scheduling and secure medical file sharing",
      "Architected a distributed AI inference pipeline for radiology, cutting scan processing time by 40%",
      "Led DevOps improvements with automated rollbacks, blue-green deployments, and proactive monitoring using Prometheus & Grafana",
    ],
    tech: ["Node.js", "TypeScript", "Go", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    current: true,
  },
  {
    id: 2,
    company: "Medecro",
    role: "SDE Intern",
    period: "08/2024 – 07/2025",
    location: "Noida",
    type: "Internship",
    description: "Built the entire backend from scratch as the only backend engineer",
    achievements: [
      "Developed REST APIs powering web, mobile, and admin platforms",
      "Integrated AI/ML models into production with the data science team",
      "Implemented secure authentication using ORY Kratos/Keto in Go",
      "Managed deployments with Docker, Kubernetes, and Helm",
    ],
    tech: ["Node.js", "Go", "ORY Kratos", "ORY Keto", "Docker", "Kubernetes", "Helm"],
    current: false,
  },
  {
    id: 3,
    company: "AutoText",
    role: "SDE Intern",
    period: "05/2024 – 08/2024",
    location: "Remote",
    type: "Internship",
    description: "Enhanced platform functionality and user experience",
    achievements: [
      "Integrated a payment gateway, enabling secure and real-time transactions",
      "Enhanced authentication flow, reducing login failures and improving security",
      "Developed multiple UI components, ensuring smooth user experience across the platform",
    ],
    tech: ["React", "Node.js", "Payment Gateway", "Authentication"],
    current: false,
  },
  {
    id: 4,
    company: "Engineering Innovations Research Lab Pvt Ltd",
    role: "Software Engineering Intern",
    period: "01/2024 – 05/2024",
    location: "Remote",
    type: "Internship",
    description: "Developed APIs and optimized database operations",
    achievements: [
      "Developed APIs for user registration, scheduling, and payments",
      "Optimized MongoDB queries for better performance",
      "Built authentication & RBAC for role-specific access control",
    ],
    tech: ["Node.js", "MongoDB", "REST APIs", "RBAC"],
    current: false,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in backend engineering and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={item} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background hidden md:block" />

                <div className="md:ml-16">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {exp.role}
                            {exp.current && (
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                                Current
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>

                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
