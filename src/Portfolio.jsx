import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
// import "@fontsource/space-grotesk/400.css";
// import "@fontsource/space-grotesk/700.css";

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const roles = ["Front-end Developer", "Cyber Security Engineer", "Data Analyst"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-[Space_Grotesk] bg-black text-gray-100 overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur bg-black/40 border-b border-white/10 z-50 flex justify-between px-10 py-5">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Mariyam
        </h1>
        <div className="flex gap-8 text-lg">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative hover:text-blue-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Hi, I'm Mariyam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-2xl md:text-3xl text-gray-300 h-10"
        >
          {roles[index]}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 mt-10"
        >
          <a href="mailto:mariyammrym826@gmail.com" className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"><Mail /></a>
          <a href="tel:+919995840842" className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"><Phone /></a>
          <a href="https://www.linkedin.com/in/mariyam826" target="_blank" className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"><Linkedin /></a>
          <a href="https://github.com/mariyam826" target="_blank" className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"><Github /></a>
        </motion.div>
        <a href="#projects" className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition">
          Explore My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="h-screen flex flex-col justify-center items-center px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">About Me</h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Detail-oriented Software Engineer with experience in full-stack development and Cyber Security.
            Skilled in building responsive UIs with React, backend development in Spring Boot, and IAM Data Analytics.
            Passionate about problem-solving and continuous learning.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="h-screen flex flex-col justify-center px-10 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {["JavaScript, Python, Java", "React.js, Spring Boot, Node.js", "PostgreSQL, MySQL, Snowflake", "Vulnerability Management, IAM", "Git, REST APIs", "Team Collaboration, Problem Solving"].map((skill, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow hover:shadow-blue-500/30 transition text-lg">
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="h-screen flex flex-col justify-center px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Experience</h2>
          <div className="mt-12 space-y-10">
            <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow">
              <h3 className="font-bold text-2xl">Accenture – Security Engineer</h3>
              <p className="text-sm text-gray-400">Oct 2024 – Present</p>
              <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-1 text-left">
                <li>Vulnerability Management with Qualys</li>
                <li>70+ OT Security labs with Immersive Labs</li>
                <li>IAM Data Analytics automation</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow">
              <h3 className="font-bold text-2xl">Luminar Technolab – Full Stack Intern</h3>
              <p className="text-sm text-gray-400">Sep 2023 – Mar 2024</p>
              <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-1 text-left">
                <li>Resolved 50+ issues improving app stability</li>
                <li>Developed DBView interface for backend data</li>
                <li>Integrated OneDrive API for secure file handling</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="h-screen flex flex-col justify-center px-10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow">
              <h3 className="font-semibold text-xl">React Media Hub</h3>
              <a href="https://media-player-project-three.vercel.app/" target="_blank" className="inline-block mt-3 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90">Live Demo</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow">
              <h3 className="font-semibold text-xl">Sign Language Recognition (CNN)</h3>
              <a href="https://github.com/FathimathNahida/-A-Real-time-sign-language-recoginition-system-using-CNN" target="_blank" className="inline-block mt-3 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90">GitHub</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow">
              <h3 className="font-semibold text-xl">Crime Management System</h3>
              <a href="https://github.com/Thahiba/CRIME-MANAGEMENT-SYSTEM" target="_blank" className="inline-block mt-3 px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90">GitHub</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Contact Me</h2>
          <p className="mt-6 text-lg text-gray-300">I’m open to opportunities and collaborations. Let’s connect!</p>
          <div className="flex gap-6 mt-10">
            <a href="mailto:mariyammrym826@gmail.com" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:opacity-90">Email Me</a>
            <a href="https://www.linkedin.com/in/mariyam826" target="_blank" className="px-6 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-900">LinkedIn</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
