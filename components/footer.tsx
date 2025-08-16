"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import personalData from "@/data/personal.json"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AryanMishra09",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aryanmishra09/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: `mailto:${"mishraaryan9204@gmail.com"}`,
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold font-space-grotesk text-gradient">{personalData.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{personalData.tagline}</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${personalData.email}`} className="hover:text-white transition-colors">
                {personalData.email}
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {["Projects", "Experience", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 hover:cursor-pointer"
                  onClick={() => window.open(link.href, "_blank", "noopener,noreferrer")}
                >
                  <link.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                className="glass border-white/20 hover:border-white/40 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Built with Next.js, TypeScript & Framer Motion</p>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20" />
      </div>
    </footer>
  )
}
