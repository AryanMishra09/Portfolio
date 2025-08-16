"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Backend & Programming",
    description: "Server-side development and programming languages",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Go", level: 80 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 75 },
      { name: "Microservices", level: 85 },
      { name: "JWT", level: 90 },
      { name: "RBAC", level: 85 },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Data management and storage solutions",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma", level: 85 },
      { name: "Query Optimization", level: 80 },
      { name: "Database Seeding", level: 90 },
      { name: "Caching", level: 85 },
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure and deployment technologies",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Helm", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Jenkins", level: 75 },
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Bash", level: 80 },
    ],
  },
  {
    title: "AI/ML Integration",
    description: "Artificial Intelligence and Machine Learning",
    skills: [
      { name: "Deep Learning", level: 75 },
      { name: "CNN", level: 70 },
      { name: "AI Model Deployment", level: 80 },
      { name: "Python ML Pipelines", level: 75 },
    ],
  },
]

const currentlyExploring = ["DevOps", "Linux", "Go", "CyberSecurity", "Computer Networks"]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, performant applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyExploring.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-4 border-primary/50 text-primary hover:bg-primary/10 animate-pulse"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
