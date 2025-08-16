"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Verbi",
    description: "AI-powered language learning platform with gamified experience and voice synthesis",
    longDescription:
      "Developed using Next.js 14, DrizzleORM, and PostgreSQL, featuring AI-powered voices, gamified learning, Shadcn UI, and Stripe integration for seamless user experience.",
    tech: ["Next.js 14", "DrizzleORM", "PostgreSQL", "AI/ML", "Stripe", "Shadcn UI"],
    image: "/Verbi.png",
    github: "https://github.com/AryanMishra09",
    live: "https://verbi-tau.vercel.app/",
    featured: true,
    metrics: ["10k+ users", "95% retention", "4.8★ rating"],
  },
  {
    id: 2,
    title: "Quatrix",
    description: "Automation SaaS integrating multiple platforms for seamless workflows",
    longDescription:
      "Developed Quatrix, an automation SaaS that integrates Google Drive, Notion, Slack, and Discord, enabling seamless cross-platform workflows.",
    tech: ["Node.js", "TypeScript", "REST APIs", "OAuth", "Webhooks", "Docker"],
    image: "/Quatrix.png",
    github: "https://github.com/AryanMishra09",
    live: "https://quatrix.vercel.app/",
    featured: true,
    metrics: ["500+ workflows", "99.9% uptime", "50% time saved"],
  },
  {
    id: 3,
    title: "Cologram",
    description: "MERN stack platform for real-time academic updates and communication",
    longDescription:
      "Built a MERN stack platform enabling real-time updates on academics, exams, and club activities, improving information flow and overall educational experience.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
    image: "/Cologram.png",
    github: "https://github.com/AryanMishra09",
    live: "https://cologram.onrender.com/",
    featured: false,
    metrics: ["1000+ students", "Real-time sync", "80% engagement"],
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in backend engineering, full-stack development, and AI integration
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                        <Star size={12} className="mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="bg-muted/50 px-2 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/AryanMishra09" target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
