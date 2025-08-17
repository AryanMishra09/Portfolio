"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center items-end h-fit"
          >
            {/* Elegant Gradient Background */}
            {/* <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
            </div> */}

            {/* Subtle Grid Overlay */}
            {/* <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
            </div> */}

            {/* Person image */}
            <motion.img
              src="/avatar.png"
              alt="Aryan Mishra"
              className="relative w-44 sm:w-56 md:w-72 drop-shadow-2xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Ground shadow */}
            {/* <div className="absolute bottom-6 w-56 h-10 bg-black/40 blur-2xl rounded-full opacity-70"></div> */}

            {/* Subtle floor gradient */}
            {/* <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div> */}
          </motion.div>

          {/* Greeting Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-base sm:text-lg text-muted-foreground">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight"
          >
            Aryan Mishra
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-foreground leading-relaxed"
          >
            Backend Engineer & Full-Stack Developer
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Building scalable health-tech solutions that impact thousands of users. Specialized in backend architecture,
            AI/ML integration, and DevOps excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 min-h-[48px]"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto group border-2 hover:bg-primary/10 bg-transparent min-h-[48px]"
              asChild
            >
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={16} className="mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors p-2"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
